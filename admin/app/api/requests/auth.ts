import { UserCredentials } from '@/@types/auth';

export const registerUser = async (userData: UserCredentials) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

  if (response) {
    return await response.json();
  }
};

export const loginUser = async (userData: UserCredentials) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

  if (response) {
    return await response.json();
  }
};
