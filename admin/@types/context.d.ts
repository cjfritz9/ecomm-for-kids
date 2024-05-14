export interface AuthProperties {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<AuthContext['email']>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<AuthContext['token']>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<AuthContext['isLoggedIn']>>
}
