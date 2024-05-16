import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { UserToken } from '@/@types/auth';

export const getCookie = (key: string) => {
  let cookieValue = '';
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, key.length + 1) === key + '=') {
        cookieValue = decodeURIComponent(cookie.substring(key.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
/**
 * Server Only - Uses JWT
 */
export const getUserTokenData = () => {
  const token = cookies().get('accessToken');
  let decoded = null;
  if (token) {
    decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as UserToken;
  }
  return decoded;
};
