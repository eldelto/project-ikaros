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

static vector vector_add(const vector a, const vector b) {
  return (vector) {
    .x = a.x + b.x,
      .y = a.y + b.y,
      .z = a.z + b.z
  };
}

static vector vector_multiply_scalar(const vector v, const double scalar) {
  return (vector) {
    .x = v.x * scalar,
      .y = v.y * scalar,
      .z = v.z * scalar
  };
}

static vector vector_normalize(const vector v) {
  const double length = 1.0 / sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  return vector_multiply_scalar(v, length);
}

static vector vector_cross_product(const vector a, const vector b) {
  return (vector) {
    .x = a.y * b.z - a.z * b.y,
      .y = a.z * b.x - a.x * b.z,
      .z = a.x * b.y - a.y * b.x
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
  if (value <= -1.0) return M_PI / -2.0;
  if (value >= 1.0) return M_PI / 2.0;
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

#define GYRO_MEASUREMENT_COUNT_250 (131) // 32750 / 250
#define GYRO_MEASUREMENT_COUNT_500 (65.5) // 32750 / 500
static vector gyro_to_vector(const int16_t gyro[3], const unsigned int delta_time_ms) {
  const vector v = {
      .x = ((double)-gyro[1] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR,
      .y = ((double)-gyro[0] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR,
      .z = ((double)-gyro[2] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR
  };

  const double delta_time_s = (double)delta_time_ms / 1000;
  return vector_multiply_scalar(v, delta_time_s);
}

static vector accelerometer_to_vector(
  const int16_t accelerometer[3],
  const quaternion previous
) {
  const vector half_gravity = {
    .x = previous.x * previous.z - previous.w * previous.y,
    .y = previous.y * previous.z + previous.w * previous.x,
    .z = previous.w * previous.w - 0.5 + previous.z * previous.z,
  };

  vector v = {
    .x = accelerometer[1],
    .y = accelerometer[0],
    .z = accelerometer[2],
  };

  return vector_cross_product(vector_normalize(v), half_gravity);
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
  handle_error(mpu6050_configure_gyro(i2c_default, GYRO_RANGE_500_DEG),
    "MPU-6050 gyro config failed");
  handle_error(mpu6050_configure_accel(i2c_default, ACCEL_RANGE_2G),
    "MPU-6050 accel config failed");
  handle_error(mpu6050_configure_dlpf(i2c_default, DLPF_94HZ), "MPU-6050 DLPF config failed");

  int16_t acceleration[3], gyro[3];
  quaternion quat = IDENTITY_QUATERNION;

#define SAMPLE_RATE_MS (50)
#define MIX_FACTOR (0.2)
  while (true) {
    if (mpu6050_read_raw_accel(i2c_default, acceleration) < 0)
      puts("Failed to read raw acceleration data");

    if (mpu6050_read_raw_gyro(i2c_default, gyro) < 0)
      puts("Failed to read raw gyro data");

    // printf("accelerationX=%d;accelerationY=%d;accelerationZ=%d;gyroX=%d;gyroY=%d;gyroZ=%d\n",
    //   acceleration[0], acceleration[1], acceleration[2], gyro[0], gyro[1], gyro[2]);

    const vector accelerometer_vec = accelerometer_to_vector(acceleration, quat);
    // printf("x=%f;y=%f;y=%f\n", accelerometer_vec.x, accelerometer_vec.y, accelerometer_vec.z);

    const vector gyro_vec = gyro_to_vector(gyro, SAMPLE_RATE_MS);
    const vector half_gyro_vec = vector_multiply_scalar(gyro_vec, 0.5);
    // printf("x=%f;y=%f;y=%f\n", gyro_vec.x, gyro_vec.y, gyro_vec.z);

    const vector feedback = vector_add(
      half_gyro_vec,
      vector_multiply_scalar(accelerometer_vec, MIX_FACTOR));

    quat = quaternion_normalize(
      quaternion_add(
        quat,
        quaternion_multiply_vector(quat, feedback))); //feedback
    printf("graph=inclination;w=%f;x=%f;y=%f;z=%f\n", quat.w, quat.x, quat.y, quat.z);

    euler angles = quaternion_to_euler(quat);
    printf("graph=Euler Angles;roll=%f;pitch=%f;yaw=%f\n", angles.roll, angles.pitch, angles.yaw);

    sleep_ms(SAMPLE_RATE_MS);
  }

  return 0;
}
