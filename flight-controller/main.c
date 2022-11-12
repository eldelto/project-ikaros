#include <stdio.h>
#include <string.h>
#include <math.h>
#include "pico/stdlib.h"
#include "pico/binary_info.h"
#include "hardware/i2c.h"
#include "mpu6050.h"

static void handle_error(const int error_value, const char const* error_message) {
  if (error_value >= 0)
    return;

  while (true) {
    puts(error_message);
    sleep_ms(1000);
  }
}

// TODO: This won't be accurate because the sample rate is currently undefined.
#define GYRO_MEASUREMENT_COUNT (131) // 32750 / 250
static void gyro_to_degree(const int16_t gyro[3], float degree[3], const unsigned int delta_time_ms) {
  const float delta_time_s = (float)delta_time_ms / 1000;

  for (unsigned int i = 0; i < 3; ++i)
    degree[i] = ((float)gyro[i] / (float)GYRO_MEASUREMENT_COUNT) * delta_time_s;
}

#define RAD_TO_DEG_FACTOR (57.295) // 180 / 3.1459
static void accel_to_degree(const int16_t accel[3], float degree[3]) {
  const float acc_x = accel[0];
  const float acc_y = accel[1];
  const float acc_z = accel[2];

  const float force_vector = sqrt(acc_x * acc_x + acc_y * acc_y + acc_z * acc_z);

  degree[0] = acos(acc_x / force_vector) * RAD_TO_DEG_FACTOR;
  degree[1] = acos(acc_y / force_vector) * RAD_TO_DEG_FACTOR;
  degree[2] = acos(acc_z / force_vector) * RAD_TO_DEG_FACTOR;
}

static void combine_accel_gyro(const float accel[3], const float gyro[3], float combined[3]) {
  for (unsigned int i = 0; i < 3; ++i)
    combined[i] = accel[i] * 0.5 + gyro[i] * 0.5;
}

int main() {
  stdio_init_all();

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

  handle_error(mpu6050_init(i2c_default), "MPU-6050 init failed");
  handle_error(mpu6050_configure_gyro(i2c_default, GYRO_RANGE_250_DEG),
    "MPU-6050 gyro config failed");
  handle_error(mpu6050_configure_accel(i2c_default, ACCEL_RANGE_2G),
    "MPU-6050 accel config failed");
  handle_error(mpu6050_configure_dlpf(i2c_default, DLPF_44HZ), "MPU-6050 DLPF config failed");

  int16_t acceleration[3], gyro[3];
  float accel_deg[3], gyro_deg[3] = { 0, 0, 0 }, gyro_delta_deg[3], combined_deg[3];

  while (true) {
    if (mpu6050_read_raw_accel(i2c_default, acceleration) < 0)
      puts("Failed to read raw acceleration data");

    if (mpu6050_read_raw_gyro(i2c_default, gyro) < 0)
      puts("Failed to read raw gyro data");

    // printf("accelerationX=%d;accelerationY=%d;accelerationZ=%d;gyroX=%d;gyroY=%d;gyroZ=%d\n",
    //   acceleration[0], acceleration[1], acceleration[2], gyro[0], gyro[1], gyro[2]);

    accel_to_degree(acceleration, accel_deg);
    gyro_to_degree(gyro, gyro_delta_deg, 50);
    for (unsigned int i = 0; i < 3; ++i) gyro_deg[i] += gyro_delta_deg[i];
    combine_accel_gyro(accel_deg, gyro_deg, combined_deg);

    printf("accelDegX=%f;accelDegY=%f;accelDegZ=%f,gyroDegX=%f;gyroDegY=%f;gyroDegZ=%f\n",
      accel_deg[0], accel_deg[1], accel_deg[2], gyro_deg[0], gyro_deg[1], gyro_deg[2]);

    // printf("degX=%f;degY=%f;degZ=%f\n", combined_deg[0], combined_deg[1], combined_deg[2]);

    // uint8_t fifo_data[DMP_FIFO_PACKET_LENGTH] = {};
    // // if (mpu6050_read_fifo_packet(i2c_default, fifo_data) < 0) {
    // //   puts("MPU-6050 read FIFO packet failed");
    // // }
    // for (unsigned int i = 0; i < DMP_FIFO_PACKET_LENGTH; i++) {
    //   printf("fifo%d=%d, ", i, fifo_data[i]);
    // }
    // printf("\n");

    sleep_ms(50);
  }

  return 0;
}
