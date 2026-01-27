import { publicApi, privateApi } from "~/lib/axios-instance";
import { GAME_ENDPOINTS } from "~/constants/api.constants";
import type {
  GameCategory,
  GameGroup,
  GameAccount,
  PurchaseResponse,
  PurchasedAccount,
  ApiResponse,
  SingleApiResponse,
  PaginatedApiResponse,
} from "~/types/accounts.types";

const AccountsApi = {
  // Thêm category mới (admin)
  addCategory: async (data: { name: string; status: number }): Promise<any> => {
    const res = await privateApi.post(GAME_ENDPOINTS.ADD_CATEGORY, data);
    return res.data;
  },
  // Lấy tất cả categories
  getCategories: async (): Promise<GameCategory[]> => {
    const response = await publicApi.get<ApiResponse<GameCategory>>(
      GAME_ENDPOINTS.GET_CATEGORIES,
    );
    return response.data.result;
  },

  // Lấy tất cả categories cho admin
  getAdminCategories: async (): Promise<GameCategory[]> => {
    const response = await privateApi.get<{
      message: string;
      result: GameCategory[];
    }>(GAME_ENDPOINTS.GET_ADMIN_CATEGORIES);
    return response.data.result;
  },

  // Cập nhật category (admin)
  updateCategory: async (
    categoryId: string,
    data: { name: string; status: number },
  ): Promise<any> => {
    const res = await privateApi.put(
      GAME_ENDPOINTS.DELETE_CATEGORY(categoryId),
      data,
    );
    return res.data;
  },

  // Xóa category (admin)
  deleteCategory: async (categoryId: string): Promise<any> => {
    const res = await privateApi.delete(
      GAME_ENDPOINTS.DELETE_CATEGORY(categoryId),
    );
    return res.data;
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

  // Lấy chi tiết account cho admin
  getAccountDetailAdmin: async (accountId: string): Promise<GameAccount> => {
    const response = await privateApi.get<SingleApiResponse<GameAccount>>(
      GAME_ENDPOINTS.GET_ACCOUNT_DETAIL_ADMIN(accountId),
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

  getMyPurchasedAccounts: async (): Promise<PurchasedAccount[]> => {
    const res = await privateApi.get<PaginatedApiResponse<PurchasedAccount>>(
      GAME_ENDPOINTS.GET_MY_PURCHASED,
    );
    const data = res.data.result;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray((data as any).data)) return (data as any).data;
    return [];
  },

  getPendingAdminAccounts: async (): Promise<GameAccount[]> => {
    const res = await privateApi.get<PaginatedApiResponse<GameAccount>>(
      GAME_ENDPOINTS.GET_PENDING_ADMIN,
    );
    const data = res.data.result;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray((data as any).data)) return (data as any).data;
    return [];
  },
  getMySellingAccounts: async (): Promise<GameAccount[]> => {
    const res = await privateApi.get<PaginatedApiResponse<GameAccount>>(
      "/game-accounts/my-selling",
    );
    const data = res.data.result;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray((data as any).data)) return (data as any).data;
    return [];
  },
};

export type {
  GameCategory,
  GameGroup,
  GameAccount,
  PurchaseResponse,
  PurchasedAccount,
  ApiResponse,
  SingleApiResponse,
  PaginatedApiResponse,
} from "~/types/accounts.types";

export default AccountsApi;
