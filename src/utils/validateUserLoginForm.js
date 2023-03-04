export const validateUserLoginForm = (values) => {
  const errors = {};
  console.log(values);

  if (values.username.length < 6) {
    errors.username = "Your username is too short.";
  } else if (values.username.length > 15) {
    errors.username = "Your username is too long";
  }

  if (values.password.length < 8) {
    errors.password = "Your password is too short.";
  }
  console.log(errors);
  return errors;
};
