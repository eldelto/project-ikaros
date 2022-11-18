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

typedef struct {
  double x;
  double y;
  double z;
} vector;

typedef struct {
  double w;
  double x;
  double y;
  double z;
} quaternion;

typedef struct {
  double roll;
  double pitch;
  double yaw;
} euler;

#define RAD_TO_DEG_FACTOR   (57.295)    // 180 / 3.1459
#define DEG_TO_RAD_FACTOR   (0.017477)  // 3.1459 / 180
#define IDENTITY_QUATERNION ((quaternion){.w = 1.0, .x = 0.0, .y = 0.0, .z = 0.0})

static vector vector_multipliy_scalar(const vector v, const double scalar) {
  return (vector) {
    .x = v.x * scalar,
      .y = v.y * scalar,
      .z = v.z * scalar
  };
}

static quaternion quaternion_multiply_vector(const quaternion q, const vector v) {
  return (quaternion) {
    .w = -q.x * v.x - q.y * v.y - q.z * v.z,
      .x = q.w * v.x + q.y * v.z - q.z * v.y,
      .y = q.w * v.y - q.x * v.z + q.z * v.x,
      .z = q.w * v.z + q.x * v.y - q.y * v.x
  };
}

static quaternion quaternion_add(const quaternion a, const quaternion b) {
  return (quaternion) {
    .w = a.w + b.w,
      .x = a.x + b.x,
      .y = a.y + b.y,
      .z = a.z + b.z
  };
}

static quaternion quaternion_normalize(const quaternion q) {
  const double length = 1.0 / sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);

  return (quaternion) {
    .w = q.w * length,
      .x = q.x * length,
      .y = q.y * length,
      .z = q.z * length
  };
}

static double custom_asin(const double value) {
  if (value <= -1.0f) return (float)M_PI / -2.0f;
  if (value >= 1.0f) return (float)M_PI / 2.0f;
  return asinf(value);
}

static euler quaternion_to_euler(const quaternion q) {
  const double half_y_squared = 0.5 - q.y * q.y;
  return (euler) {
    .roll = RAD_TO_DEG_FACTOR * (atan2(q.w * q.x + q.y * q.z, half_y_squared - q.x * q.x)),
      .pitch = RAD_TO_DEG_FACTOR * (custom_asin(2.0 * (q.w * q.y - q.z * q.x))),
      .yaw = RAD_TO_DEG_FACTOR * (atan2(q.w * q.z + q.x * q.y, half_y_squared - q.z * q.z))
  };
}

#define GYRO_MEASUREMENT_COUNT (131) // 32750 / 250
static vector gyro_to_vector(const int16_t gyro[3], const unsigned int delta_time_ms) {
  const vector v = {
      .x = ((double)gyro[1] / GYRO_MEASUREMENT_COUNT) * DEG_TO_RAD_FACTOR,
      .y = ((double)-gyro[0] / GYRO_MEASUREMENT_COUNT) * DEG_TO_RAD_FACTOR,
      .z = ((double)gyro[2] / GYRO_MEASUREMENT_COUNT) * DEG_TO_RAD_FACTOR
  };

  const double delta_time_s = (double)delta_time_ms / 1000;
  return vector_multipliy_scalar(v, delta_time_s);
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
  quaternion quat = IDENTITY_QUATERNION;

  while (true) {
    if (mpu6050_read_raw_accel(i2c_default, acceleration) < 0)
      puts("Failed to read raw acceleration data");

    if (mpu6050_read_raw_gyro(i2c_default, gyro) < 0)
      puts("Failed to read raw gyro data");

    // printf("accelerationX=%d;accelerationY=%d;accelerationZ=%d;gyroX=%d;gyroY=%d;gyroZ=%d\n",
    //   acceleration[0], acceleration[1], acceleration[2], gyro[0], gyro[1], gyro[2]);

    const vector gyro_vec = gyro_to_vector(gyro, 50);
    const vector half_gyro_vec = vector_multipliy_scalar(gyro_vec, 0.5);
    // printf("x=%f;y=%f;y=%f\n", gyro_vec.x, gyro_vec.y, gyro_vec.z);

    quat = quaternion_normalize(
      quaternion_add(
        quat,
        quaternion_multiply_vector(quat, half_gyro_vec)));
    // printf("w=%f;x=%f;y=%f;y=%f\n", quat.w, quat.x, quat.y, quat.z);

    euler angles = quaternion_to_euler(quat);
    printf("roll=%f;pitch=%f;yaw=%f\n", angles.roll, angles.pitch, angles.yaw);

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
