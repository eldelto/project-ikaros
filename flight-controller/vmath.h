#ifndef VMATH
#define VMATH

#include <math.h>

typedef struct {
  float x;
  float y;
  float z;
} vector;

typedef struct {
  float w;
  float x;
  float y;
  float z;
} quaternion;

typedef struct {
  float roll;
  float pitch;
  float yaw;
} euler;

#define RAD_TO_DEG_FACTOR   (57.295)    // 180 / 3.1459
#define DEG_TO_RAD_FACTOR   (0.017477)  // 3.1459 / 180
#define IDENTITY_QUATERNION ((quaternion){.w = 1.0, .x = 0.0, .y = 0.0, .z = 0.0})

vector vector_add(const vector a, const vector b) {
  return (vector) {
    .x = a.x + b.x,
      .y = a.y + b.y,
      .z = a.z + b.z
  };
}

vector vector_multiply_scalar(const vector v, const float scalar) {
  return (vector) {
    .x = v.x * scalar,
      .y = v.y * scalar,
      .z = v.z * scalar
  };
}

vector vector_normalize(const vector v) {
  const float divisor = sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  if (divisor == 0) return v; // TODO: Can we prevent this check somehow?

  const float length = 1.0 / divisor;
  return vector_multiply_scalar(v, length);
}

vector vector_cross_product(const vector a, const vector b) {
  return (vector) {
    .x = a.y * b.z - a.z * b.y,
      .y = a.z * b.x - a.x * b.z,
      .z = a.x * b.y - a.y * b.x
  };
}

quaternion quaternion_multiply_vector(const quaternion q, const vector v) {
  return (quaternion) {
    .w = -q.x * v.x - q.y * v.y - q.z * v.z,
      .x = q.w * v.x + q.y * v.z - q.z * v.y,
      .y = q.w * v.y - q.x * v.z + q.z * v.x,
      .z = q.w * v.z + q.x * v.y - q.y * v.x
  };
}

quaternion quaternion_add(const quaternion a, const quaternion b) {
  return (quaternion) {
    .w = a.w + b.w,
      .x = a.x + b.x,
      .y = a.y + b.y,
      .z = a.z + b.z
  };
}

quaternion quaternion_normalize(const quaternion q) {
  const float length = 1.0 / sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);

  return (quaternion) {
    .w = q.w * length,
      .x = q.x * length,
      .y = q.y * length,
      .z = q.z * length
  };
}

static float custom_asin(const float value) {
  if (value <= -1.0) return M_PI / -2.0;
  if (value >= 1.0) return M_PI / 2.0;
  return asinf(value);
}

euler quaternion_to_euler(const quaternion q) {
  const float half_y_squared = 0.5 - q.y * q.y;
  return (euler) {
    .roll = RAD_TO_DEG_FACTOR * (atan2(q.w * q.x + q.y * q.z, half_y_squared - q.x * q.x)),
      .pitch = RAD_TO_DEG_FACTOR * (custom_asin(2.0 * (q.w * q.y - q.z * q.x))),
      .yaw = RAD_TO_DEG_FACTOR * (atan2(q.w * q.z + q.x * q.y, half_y_squared - q.z * q.z))
  };
}

#endif
