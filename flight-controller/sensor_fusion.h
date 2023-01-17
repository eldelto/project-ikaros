#ifndef SENSOR_FUSION
#define SENSOR_FUSION

#include <string.h>
#include "vmath.h"

/* Ring Buffer */
#define DATA_BUFFER_LEN (3)
typedef struct {
  unsigned int pointer;
  int16_t data[DATA_BUFFER_LEN][3];
} ring_buffer;

void ring_buffer_insert(ring_buffer* buffer, int16_t data[3]) {
  memcpy(buffer->data[buffer->pointer], data, sizeof buffer->data[0]);
  buffer->pointer = (buffer->pointer + 1) % DATA_BUFFER_LEN;
}

void ring_buffer_mean(ring_buffer* buffer, int16_t mean[3]) {
  for (unsigned int i = 0; i < DATA_BUFFER_LEN; ++i)
    for (unsigned int j = 0; j < 3; ++j)
      mean[j] += (buffer->data[i][j] / DATA_BUFFER_LEN);
}

/* MPU-6050 specific code */
#define GYRO_MEASUREMENT_COUNT_250 (131) // 32750 / 250
#define GYRO_MEASUREMENT_COUNT_500 (65.5) // 32750 / 500
static vector gyro_to_vector(const int16_t gyro[3], const unsigned int delta_time_ms) {
  const vector v = {
      .x = ((float)-gyro[1] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR,
      .y = ((float)-gyro[0] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR,
      .z = ((float)-gyro[2] / GYRO_MEASUREMENT_COUNT_500) * DEG_TO_RAD_FACTOR
  };

  const float delta_time_s = (float)delta_time_ms / 1000;
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

#endif
