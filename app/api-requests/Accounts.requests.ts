import { publicApi } from "~/lib/axios-instance";
import { GAME_ENDPOINTS } from "~/constants/api.constants";

export interface GameCategory {
  id: string;
  name: string;
  slug?: string;
  status?: number;
  description?: string;
  image?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GameGroup {
  id: string;
  name: string;
  slug?: string;
  status?: number;
  description?: string;
  image?: string;
  categoryId?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ApiResponse<T> {
  message: string;
  result: T[]; 
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
};

export default AccountsApi;
