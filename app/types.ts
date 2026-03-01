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

export type UserLoginT = {
  userName: string;
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
