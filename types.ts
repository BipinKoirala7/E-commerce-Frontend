// User enums, interfaces, and types
export enum Role {
  USER,
  ADMIN,
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

export type RegisterUserInfo = {
  userName: string;
  email: string;
  password: string;
};

export type LoginUserInfo = Omit<RegisterUserInfo, "userName">;

// Product enums, interfaces, and types

export type ProductSearchParams = {
  query?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  page?: string;
  size?: string;
  direction: "ASC" | "DESC";
};

export interface ProductImage {
  id: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  images: ProductImage[];
  brand: string;
  weight: number;
  weightUnit: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductSummary = Omit<
  Product,
  | "description"
  | "stockQuantity"
  | "weight"
  | "weightUnit"
  | "createdAt"
  | "updatedAt"
>;

export type ProductSearchResult = PageableResult<ProductSummary>;

// Wishlist enums, interfaces, and types
export interface WishList {
  productId: string;
  createdAt: Date;
}

export interface WishListProductSummary extends WishList, ProductSummary {}

// Cart enums, interfaces, and types
export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartProductSummary extends CartItem, ProductSummary {}

// Order enums, interfaces, and types
export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  PROCESSING = "PROCESSING",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
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
  createdAt: Date;
  updatedAt: Date;
}

export type OrderSummary = Omit<
  Order,
  | "billingAddress"
  | "shippingAddress"
  | "email"
  | "phone"
  | "orderItems"
  | "updatedAt"
>;
// Response enums, interfaces, and types
export type ApiResponse<T> = {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
};

// Common enums, interfaces, and types

export type PageableResult<T> = {
  content: T[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
  pageSize: number;
  numberOfElements: number;
};

export type ProductSearchResponse = ApiResponse<ProductSearchResult>;
