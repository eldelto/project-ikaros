#ifndef SERVO
#define SERVO

#include <limits.h>
#include "pico/stdlib.h"
#include "hardware/pwm.h"

// Clock speed 125 MHz => cycle rate = 8 ns
// Wanted cycle rate = 20 ms => 50 Hz = 125 MHz / 2,500,000
// Servo min = 1/40 (0.025) * 2,500,000
// Servo max = 1/8 (0.125) * 2,500,000

#define COUNT_TOP   (25000)
#define DUTY_MIN    (0.025)
#define DUTY_MAX    (0.125)
#define DUTY_RANGE  (0.100)

void servo_init(const uint gpio) {
  pwm_config cfg = pwm_get_default_config();
  pwm_config_set_wrap(&cfg, COUNT_TOP);
  pwm_config_set_clkdiv(&cfg, 100.0f);
  pwm_init(pwm_gpio_to_slice_num(gpio), &cfg, true);
  gpio_set_function(gpio, GPIO_FUNC_PWM);
  pwm_set_gpio_level(gpio, DUTY_MIN * (COUNT_TOP + 1));
}

void servo_write(const uint gpio, unsigned short value) {
  const float pwm_value = value * (DUTY_RANGE / USHRT_MAX) + DUTY_MIN;
  pwm_set_gpio_level(gpio, pwm_value * (COUNT_TOP + 1));
}

#endif
