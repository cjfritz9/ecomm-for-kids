import { LoginFormFields, SignupFormFields, ValidationResult } from '@/@types/auth';

export const passwordRequirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

const validateEmail = (email: string) => {
  return email.includes('@') && email.includes('.') && email.lastIndexOf('.') < email.length - 2;
};

const validatePassword = (password: string) => {
  const errors = passwordRequirements.filter((requirement) => !requirement.re.test(password));

  return errors.length === 0;
};

export const validateLogin = ({ email, password }: LoginFormFields): ValidationResult => {
  const [isEmailValid, isPasswordValid] = [validateEmail(email), validatePassword(password)];

  if (!isEmailValid) {
    return { success: false, uiMessage: 'Invalid Email, try again' };
  }

  if (!isPasswordValid) {
    return { success: false, uiMessage: 'Invalid Password, try again' };
  }

  return { success: true, uiMessage: 'Success' };
};

export const validateSignup = ({
  email,
  password,
  passwordConfirm,
}: SignupFormFields): ValidationResult => {
  const [isEmailValid, isPasswordValid] = [validateEmail(email), validatePassword(password)];

  if (!isEmailValid) {
    return { success: false, uiMessage: 'Invalid Email, try again' };
  }

  if (!isPasswordValid) {
    return { success: false, uiMessage: 'Invalid Password, try again' };
  }

  if (password !== passwordConfirm) {
    return { success: false, uiMessage: 'Passwords do not match'}
  }

  return { success: true, uiMessage: 'Success' };
};
