import { CollectionProduct } from './shopify';

export interface AuthProperties {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<AuthContext['email']>>;
  token: {
    userId: string;
    storeId: string;
    iat: number;
    exp: number;
  };
  setToken: React.Dispatch<React.SetStateAction<AuthContext['token']>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<AuthContext['isLoggedIn']>>;
  reset: () => void;
}

export interface ProductsProperties {
  products: CollectionProduct[] | null;
  setProducts: React.Dispatch<React.SetStateAction<AuthContext['products']>>;
  pageInfo: {
    hasNextPage: boolean | null;
    hasPrevPage: boolean | null;
    endCursor: string | null;
    startCursor: string | null;
  };
  setPageInfo: React.Dispatch<React.SetStateAction<AuthContext['pageInfo']>>;
}

export interface StoreProperties {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<AuthContext['name']>>;
  storeId: string | null;
  setStoreId: React.Dispatch<React.SetStateAction<AuthContext['storeId']>>;
  collectionId: string | null;
  setCollectionId: React.Dispatch<React.SetStateAction<AuthContext['collectionId']>>;
}
