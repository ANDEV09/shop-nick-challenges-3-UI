// ==================== AUTH ENDPOINTS ====================
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH_TOKEN: "/auth/refresh",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  VERIFY_EMAIL: "/auth/verify-email",
  ME: "/auth/me",
} as const;

// ==================== USER ENDPOINTS ====================
export const USER_ENDPOINTS = {
  GET_USERS: "/users",
  GET_USER_BY_ID: (userId: string) => `/users/${userId}`,
  UPDATE_USER: (userId: string) => `/users/${userId}`,
  DELETE_USER: (userId: string) => `/users/${userId}`,
  UPLOAD_AVATAR: "/users/avatar",
  UPDATE_PROFILE: "/users/profile",
  CHANGE_PASSWORD: "/users/change-password",
} as const;

// ==================== GAME ENDPOINTS ====================
export const GAME_ENDPOINTS = {
  GET_CATEGORIES: "/game-categories",
  GET_GROUPS_BY_CATEGORY: (categoryId: string) => `/game-groups/${categoryId}`,
  GET_ACCOUNT_DETAIL: (accountId: string) => `/game-accounts/detail/${accountId}`,
  GET_ACCOUNTS_BY_GROUP: (
    groupId: string,
    page: number = 1,
    limit: number = 5,
  ) => `/game-accounts/${groupId}?page=${page}&limit=${limit}`,
  PURCHASE_ACCOUNT: (accountId: string) => `/game-accounts/${accountId}/purchase`,
} as const;

// ==================== UPLOAD ENDPOINTS ====================
export const UPLOAD_ENDPOINTS = {
  UPLOAD_IMAGE: "/upload/image",
  UPLOAD_FILE: "/upload/file",
  UPLOAD_MULTIPLE: "/upload/multiple",
} as const;

// ==================== CONFIG CONSTANTS ====================
export const API_CONFIG = {
  TIMEOUT: 10000, // 10 seconds
  BASE_URL: import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:8000",
} as const;

// ==================== HTTP STATUS CODES ====================
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// ==================== ERROR MESSAGES ====================
export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: "Lỗi kết nối mạng. Vui lòng thử lại.",
  UNAUTHORIZED: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.",
  FORBIDDEN: "Bạn không có quyền truy cập.",
  NOT_FOUND: "Không tìm thấy dữ liệu.",
  SERVER_ERROR: "Lỗi server. Vui lòng thử lại sau.",
  TIMEOUT: "Yêu cầu quá lâu. Vui lòng thử lại.",
} as const;
