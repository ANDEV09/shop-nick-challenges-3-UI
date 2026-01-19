import { publicApi, privateApi } from "~/lib/axios-instance";
import { GAME_ENDPOINTS } from "~/constants/api.constants";

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

interface ApiResponse<T> {
  message: string;
  result: T[];
}

interface SingleApiResponse<T> {
  message: string;
  result: T;
}

interface PaginationMeta {
  total: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface PaginatedApiResponse<T> {
  message: string;
  result: {
    data: T[];
    meta: PaginationMeta;
  };
}

const AccountsApi = {
  // Lấy tất cả categories
  getCategories: async (): Promise<GameCategory[]> => {
    const response = await publicApi.get<ApiResponse<GameCategory>>(
      GAME_ENDPOINTS.GET_CATEGORIES,
    );
    return response.data.result;
  },

  // Lấy groups theo categoryId
  getGroupsByCategory: async (categoryId: string): Promise<GameGroup[]> => {
    const response = await publicApi.get<ApiResponse<GameGroup>>(
      GAME_ENDPOINTS.GET_GROUPS_BY_CATEGORY(categoryId),
    );
    return response.data.result;
  },

  // Lấy accounts theo groupId
  getAccountsByGroup: async (
    groupId: string,
    page: number = 1,
    limit: number = 5,
  ): Promise<GameAccount[]> => {
    const response = await publicApi.get<PaginatedApiResponse<GameAccount>>(
      GAME_ENDPOINTS.GET_ACCOUNTS_BY_GROUP(groupId, page, limit),
    );
    return response.data.result.data;
  },

  // Lấy chi tiết account
  getAccountDetail: async (accountId: string): Promise<GameAccount> => {
    const response = await publicApi.get<SingleApiResponse<GameAccount>>(
      GAME_ENDPOINTS.GET_ACCOUNT_DETAIL(accountId),
    );
    return response.data.result;
  },

  // Mua account
  purchaseAccount: async (accountId: string): Promise<PurchaseResponse> => {
    const response = await privateApi.post<PurchaseResponse>(
      GAME_ENDPOINTS.PURCHASE_ACCOUNT(accountId),
    );
    return response.data;
  },
};

export default AccountsApi;
