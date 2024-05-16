export interface FormStatus {
  isValid: null | boolean;
  message: string;
}

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface SignupFormFields extends LoginFormFields {
  passwordConfirm: string;
}

export interface ValidationResult {
  success: boolean;
  uiMessage: string;
}

export interface UserToken {
  userId: string;
  storeId: string;
  iat: number;
  exp: number;
}

export type UserCredentials = LoginFormFields;
