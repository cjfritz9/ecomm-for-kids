export interface AuthProperties {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<AuthContext['email']>>;
  token: {
    userId: string;
    storeId: string;
    iat: number;
    exp: number;
  }
  setToken: React.Dispatch<React.SetStateAction<AuthContext['token']>>;
  isLoggedIn: boolean | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<AuthContext['isLoggedIn']>>
}
