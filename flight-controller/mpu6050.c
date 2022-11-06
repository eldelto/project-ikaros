#include "mpu6050.h"

int mpu6050_init(i2c_inst_t* i2c) {
  // The reset apparently removes the complete default config and
  // renders the sensor useless unless completely reconfigured.
  // Reset
  // uint8_t data[2] = { PWR_MANAGEMENT, BIT_RESET };
  // int result = i2c_write_blocking(i2c, MPU6050_ADDRESS, data, 2, false);
  // if (result < 0) {
  //   return -1;
  // }

  // Wake up
  uint8_t data[2] = { PWR_MANAGEMENT, ZERO };
  int result = i2c_write_blocking(i2c, MPU6050_ADDRESS, data, 2, false);
  if (result < 0) {
    return -1;
  }

  return 0;
}
