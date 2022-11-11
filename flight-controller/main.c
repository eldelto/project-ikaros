#include <stdio.h>
#include <string.h>
#include "pico/stdlib.h"
#include "pico/binary_info.h"
#include "hardware/i2c.h"
#include "mpu6050.h"

static void handle_error(const int error_value, const char const * error_message) {
  if (error_value >= 0)
    return;

  while (true) {
    puts(error_message);
    sleep_ms(1000);
  }
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
  bi_decl(bi_2pins_with_func(PICO_DEFAULT_I2C_SDA_PIN, PICO_DEFAULT_I2C_SCL_PIN, GPIO_FUNC_I2C));

  handle_error(mpu6050_init(i2c_default), "MPU-6050 init failed");
  handle_error(mpu6050_configure_dlpf(i2c_default, DLPF_44HZ), "MPU-6050 DLPF config failed");

  int16_t acceleration[3], gyro[3];

  while (true) {
    if (mpu6050_read_raw_acceleration(i2c_default, acceleration) < 0)
      puts("Failed to read raw acceleration data");

    if (mpu6050_read_raw_gyro(i2c_default, gyro) <0)
      puts("Failed to read raw gyro data");

    printf("accelerationX=%d;accelerationY=%d;accelerationZ=%d;gyroX=%d;gyroY=%d;gyroZ=%d\n", 
      acceleration[0], acceleration[1], acceleration[2], gyro[0], gyro[1], gyro[2]);

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
