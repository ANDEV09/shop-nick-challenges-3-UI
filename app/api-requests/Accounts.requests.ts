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

  getMyPurchasedAccounts: async (): Promise<PurchasedAccount[]> => {
    const res = await privateApi.get<PaginatedApiResponse<PurchasedAccount>>(
      GAME_ENDPOINTS.GET_MY_PURCHASED,
    );
    const data = res.data.result;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray((data as any).data)) return (data as any).data;
    return [];
  },

  // Lấy danh sách tài khoản đã đăng bán của tôi
  getMySellingAccounts: async (): Promise<GameAccount[]> => {
    const res = await privateApi.get<PaginatedApiResponse<GameAccount>>(
      "/game-accounts/my-selling"
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
