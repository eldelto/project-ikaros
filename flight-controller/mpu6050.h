#include <stdint.h>
#include "hardware/i2c.h"

// Registers
#define PWR_MANAGEMENT          (0x6B)
#define BANK_SEL                (0x6D)
#define MEM_RW                  (0x6F)
#define FIFO_RW                 (0x74)
#define INT_ENABLE              (0x38)
#define USER_CTRL               (0x6A)
#define FIFO_ENABLE             (0x23)
#define CONFIG                  (0x1A)
#define ACCEL_OUT               (0x3B)
#define GYRO_OUT                (0x43)
#define GYRO_CONFIG             (0x1B)
#define ACCEL_CONFIG            (0x1C)

#define DINA20                  (0x20)
#define DINA28                  (0x28)
#define DINA30                  (0x30)
#define DINA38                  (0x38)
#define CFG_8                   (2718)

// Data
#define ZERO                    (0x00)
#define BIT_RESET               (0x80)
#define BIT_DMP_INT_EN          (0x02)
#define BIT_FIFO_RST            (0x04)
#define BIT_FIFO_EN             (0x40)
#define BIT_DMP_RST             (0x08)
#define BIT_DMP_EN              (0x80)
#define GYRO_RANGE_250_DEG      (0x00)
#define GYRO_RANGE_500_DEG      (0x08)
#define GYRO_RANGE_1000_DEG     (0x10)
#define GYRO_RANGE_2000_DEG     (0x18)
#define ACCEL_RANGE_2G          (0x00)
#define ACCEL_RANGE_4G          (0x08)
#define ACCEL_RANGE_8G          (0x10)
#define ACCEL_RANGE_16G         (0x18)
#define DLPF_184HZ              (0x01)
#define DLPF_184HZ              (0x01)
#define DLPF_94HZ               (0x02)
#define DLPF_44HZ               (0x03)
#define DLPF_21HZ               (0x04)
#define DLPF_10HZ               (0x05)
#define DLPF_5HZ                (0x06)

// Misc constants
#define MPU6050_ADDRESS         (0x68)
#define DMP_START_ADDRESS       (0x0400)
#define DMP_CODE_SIZE           (3062)
#define DMP_FIFO_PACKET_LENGTH  (16)

int mpu6050_init(i2c_inst_t* i2c);
int mpu6050_configure_gyro(i2c_inst_t* i2c, uint8_t config);
int mpu6050_configure_accel(i2c_inst_t* i2c, uint8_t config);
int mpu6050_configure_dlpf(i2c_inst_t* i2c, uint8_t config);
int mpu6050_read_raw_gyro(i2c_inst_t* i2c, int16_t data[3]);
int mpu6050_read_raw_accel(i2c_inst_t* i2c, int16_t data[3]);


// TODO: Validate if those actually work.
int mpu6050_reset_fifo(i2c_inst_t* i2c);
int mpu6050_init_dmp(i2c_inst_t* i2c);
int mpu6050_enable_dmp_quaternion(i2c_inst_t* i2c);
int mpu6050_read_fifo_packet(i2c_inst_t* i2c, uint8_t* packet_data);
