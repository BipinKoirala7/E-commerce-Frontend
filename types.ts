export enum Role {
  USER,
  ADMIN,
}

export enum OrderStatus {
  PENDING,
  CONFIRMED,
  PROCESSING,
  DELIVERED,
  CANCELLED,
  RETURNED,
}

export interface User {
  userName: string;
  email: string;
  emailVerified: boolean;
  role: Role;
  profilePictureUrl: string;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserRegister {
  userName: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export type ApiResponseT<T> = {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
};

export interface WishList {
  productId: string;
  createdAt: Date;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

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

export interface ProductSummary {
  productId: string;
  productName: string;
  productPrice: number;
  productImageUrl: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  billingAddress: string;
  shippingAddress: string;
  email: string;
  phone: string;
  orderItems: OrderItem[];
  totalPrice: number;
  orderStatus: OrderStatus;
  createdAt?: Date;
  updatedAt: Date;
}

export interface OrderSummary {
  orderId: string;
  totalPrice: number;
  orderStatus: OrderStatus;
  createdAt: Date;
}

export interface WishListProductSummary extends WishList, ProductSummary {}

export interface CartProductSummary extends CartItem, ProductSummary {}
