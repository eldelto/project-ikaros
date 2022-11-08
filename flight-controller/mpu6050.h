#include <stdint.h>
#include "hardware/i2c.h"

// Registers
#define PWR_MANAGEMENT          (0x6B)
#define BANK_SEL                (0x6D)
#define MEM_RW                  (0x6F)

// Data
#define ZERO                    (0x00)
#define BIT_RESET               (0x80)

// Misc constants
#define MPU6050_ADDRESS         (0x68)
#define DMP_START_ADDRESS       (0x0400)
#define DMP_CODE_SIZE           (3062)

int mpu6050_init(i2c_inst_t* i2c);
int mpu6050_init_dmp(i2c_inst_t* i2c);
