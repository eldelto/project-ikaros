#include <stdint.h>
#include "hardware/i2c.h"

// Registers
#define PWR_MANAGEMENT          (0x6B)

// Data
#define ZERO                    (0x00)
#define BIT_RESET               (0x80)

// Misc constants
#define MPU6050_ADDRESS (0x68)

int mpu6050_init(i2c_inst_t* i2c);
