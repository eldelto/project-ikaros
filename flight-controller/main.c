#include <stdio.h>

#include "pico/stdlib.h"
#include "pico/binary_info.h"
#include "hardware/i2c.h"
#include "hardware/pwm.h"
#include "hardware/watchdog.h"

#include "mpu6050.h"
#include "vmath.h"
#include "sensor_fusion.h"
#include "servo.h"

/* Main Logic */
#define SAMPLE_RATE_MS (50)
#define MIX_FACTOR (0.2)

#define MOTOR0_GPIO (7)
#define MOTOR_ARM   (9000)
#define MOTOR_IDLE  (9000)

static void handle_error(const int error_value, const char const* error_message) {
  if (error_value >= 0)
    return;

  while (true) {
    puts(error_message);
    sleep_ms(1000);
  }
}

int16_t gyro[3], acceleration[3];
ring_buffer gyro_data = {
  .pointer = 0,
};
ring_buffer acceleration_data = {
  .pointer = 0,
};

static void read_raw_values() {
  if (mpu6050_read_raw_gyro(i2c_default, gyro) < 0) {
    puts("Failed to read raw gyro data");
    return;
  }
  ring_buffer_insert(&gyro_data, gyro);

  if (mpu6050_read_raw_accel(i2c_default, acceleration) < 0) {
    puts("Failed to read raw acceleration data");
    return;
  }
  ring_buffer_insert(&acceleration_data, acceleration);
}

int main() {
  watchdog_enable(100, 1);
  stdio_init_all();

  servo_init(MOTOR0_GPIO);
  servo_write(MOTOR0_GPIO, MOTOR_ARM);

#if !defined(i2c_default)
  || !defined(PICO_DEFAULT_I2C_SDA_PIN)
    || !defined(PICO_DEFAULT_I2C_SCL_PIN)
#error flight-controller requires a board with I2C pins
#endif

    i2c_init(i2c_default, 400 * 1000);
  gpio_set_function(PICO_DEFAULT_I2C_SDA_PIN, GPIO_FUNC_I2C);
  gpio_set_function(PICO_DEFAULT_I2C_SCL_PIN, GPIO_FUNC_I2C);
  gpio_pull_up(PICO_DEFAULT_I2C_SDA_PIN);
  gpio_pull_up(PICO_DEFAULT_I2C_SCL_PIN);

  // Make the I2C pins available to picotool
  bi_decl(bi_2pins_with_func(PICO_DEFAULT_I2C_SDA_PIN,
    PICO_DEFAULT_I2C_SCL_PIN, GPIO_FUNC_I2C));

  handle_error(mpu6050_init(i2c_default),
    "MPU-6050 init failed");
  handle_error(mpu6050_configure_gyro(i2c_default, GYRO_RANGE_500_DEG),
    "MPU-6050 gyro config failed");
  handle_error(mpu6050_configure_accel(i2c_default, ACCEL_RANGE_2G),
    "MPU-6050 accel config failed");
  handle_error(mpu6050_configure_dlpf(i2c_default, DLPF_94HZ),
    "MPU-6050 DLPF config failed");
  handle_error(mpu6050_configure_sample_rate(i2c_default, 20),
    "MPU-6050 sample rate config failed");

  int16_t gyro_mean[3], acceleration_mean[3];
  quaternion quat = IDENTITY_QUATERNION;

  while (true) {
    watchdog_update();

    for (unsigned int i = 0; i < DATA_BUFFER_LEN; ++i)
      read_raw_values();

    for (unsigned int i = 0; i < 3; ++i) {
      gyro_mean[i] = 0;
      acceleration_mean[i] = 0;
    }

    ring_buffer_mean(&gyro_data, gyro_mean);
    const vector gyro_vec = gyro_to_vector(gyro_mean, SAMPLE_RATE_MS);
    const vector half_gyro_vec = vector_multiply_scalar(gyro_vec, 0.5);
    // printf("x=%f;y=%f;y=%f\n", gyro_vec.x, gyro_vec.y, gyro_vec.z);

    ring_buffer_mean(&acceleration_data, acceleration_mean);
    const vector accelerometer_vec = accelerometer_to_vector(acceleration_mean, quat);
    // printf("x=%f;y=%f;z=%f\n", accelerometer_vec.x, accelerometer_vec.y, accelerometer_vec.z);

    const vector feedback = vector_add(
      half_gyro_vec,
      vector_multiply_scalar(accelerometer_vec, MIX_FACTOR));

    quat = quaternion_normalize(
      quaternion_add(
        quat,
        quaternion_multiply_vector(quat, feedback))); //feedback
    // printf("graph=inclination;w=%f;x=%f;y=%f;z=%f\n", quat.w, quat.x, quat.y, quat.z);

    euler angles = quaternion_to_euler(quat);
    printf("graph=Euler Angles;roll=%f;pitch=%f;yaw=%f\n", angles.roll, angles.pitch, angles.yaw);

    servo_write(MOTOR0_GPIO, angles.roll * 728 + MOTOR_ARM);

    sleep_ms(SAMPLE_RATE_MS);
  }

  return 0;
}
