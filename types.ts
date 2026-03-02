export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type UserT = {
  userName: string;
  email: string;
  emailVerified: boolean;
  role: Role;
  profilePictureUrl: string;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type UserRegisterT = {
  userName: string;
  email: string;
  password: string;
};

export type UserLoginT = {
  email: string;
  password: string;
};

export type ApiResponseT<T> = {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  imageUrl: string;
  brand: string;
  weight: number;
  weightUnit: string;
  createdAt: Date;
  updatedAt: Date;
}
