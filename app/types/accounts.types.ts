export interface GameCategory {
  id: string;
  name: string;
  slug?: string;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface GameGroup {
  id: string;
  title: string;
  slug?: string;
  status?: number;
  thumbnail?: string;
  categoryId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GameAccount {
  id: string;
  accountName: string;
  thumb?: string;
  images?: string[];
  price: number;
  groupId?: string;
  description?: string;
  details?: Record<string, string | number>;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PurchaseResponse {
  message: string;
  result: {
    orderId: string;
    accountId: string;
    price: number;
    status: string;
    purchasedAt: string;
  };
}

export interface PurchasedAccount {
  id: string;
  accountName?: string;
  password?: string;
  price: number;
  status?: number;
  thumb?: string;
  images?: string | string[];
  details?: Record<string, string | number>;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  message: string;
  result: T[];
}

export interface SingleApiResponse<T> {
  message: string;
  result: T;
}

export interface PaginationMeta {
  total: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedApiResponse<T> {
  message: string;
  result: {
    data: T[];
    meta: PaginationMeta;
  };
}
