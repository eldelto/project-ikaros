cmake_minimum_required(VERSION 3.13)

include(pico_sdk_import.cmake)
project(test_project C CXX ASM)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

pico_sdk_init()
add_executable(flight-controller
  main.c
)

target_include_directories(flight-controller PRIVATE
        ${CMAKE_CURRENT_LIST_DIR}
)

target_compile_definitions(flight-controller PRIVATE
  PICO_DEFAULT_I2C=1
  PICO_DEFAULT_I2C_SCL_PIN=15
  PICO_DEFAULT_I2C_SDA_PIN=14
)

pico_enable_stdio_usb(flight-controller 1)
pico_add_extra_outputs(flight-controller)

add_library(mpu6050 mpu6050.c)

target_link_libraries(flight-controller 
  pico_stdlib
  pico_cyw43_arch_none
  hardware_i2c
  mpu6050
)