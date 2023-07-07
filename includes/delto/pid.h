#ifndef PID
#define PID

struct pid_controller {
  double p_gain;
  double i_gain;
  double d_gain;
  double i_error;
  double last_error;
};

double pid_calculate_output(struct pid_controller *pid, double set_point, double value) {
  const double error_value = set_point - value;

  if (pid->i_gain <= 0) pid->i_error = 0;
  else pid->i_error += error_value;

  const double error_change = error_value - pid->last_error;
  pid->last_error = error_value;

  const double p_out = error_value * pid->p_gain;
  const double i_out = pid->i_error * pid->i_gain;
  const double d_out = error_change * pid->d_gain;

  return p_out + i_out + d_out;
}

#endif