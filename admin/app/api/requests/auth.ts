import { RegisterUserData, SignupFormFields } from '@/@types/auth';

export const registerUser = async (userData: RegisterUserData) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

  if (response) {
    return await response.json();
  }
};
