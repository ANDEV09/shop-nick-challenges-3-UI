import { create } from "zustand";
import AccountsApi, {
  type GameCategory,
  type GameGroup,
} from "~/api-requests/Accounts.requests";
import { showErrorToast } from "~/lib/utils";
import { AxiosError } from "axios";

interface AccountsStore {
  categories: GameCategory[];
  groups: Record<string, GameGroup[]>;
  isLoading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
  fetchGroupsByCategory: (categoryId: string) => Promise<void>;
}

export const useAccountsStore = create<AccountsStore>((set, get) => ({
  categories: [],
  groups: {},
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    if (get().categories.length > 0) {
      return;
    }

    try {
      set({ isLoading: true, error: null });

      const categoriesData = await AccountsApi.getCategories();
      set({ categories: categoriesData, isLoading: false });
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Lỗi tải danh mục game"
          : "Có lỗi không xác định";

      set({ error: message, isLoading: false });
      showErrorToast(message);
    }
  },

  

  fetchGroupsByCategory: async (categoryId: string) => {
    const existingGroups = get().groups[categoryId];
    if (existingGroups && existingGroups.length > 0) {
      return;
    }

    try {
      set({ isLoading: true, error: null });

      const groupsData = await AccountsApi.getGroupsByCategory(categoryId);
      set((state) => ({
        groups: { ...state.groups, [categoryId]: groupsData },
        isLoading: false,
      }));
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Lỗi tải nhóm game"
          : "Có lỗi không xác định";

      set({ error: message, isLoading: false });
      showErrorToast(message);
    }
  },
}));
