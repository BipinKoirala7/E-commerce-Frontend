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
