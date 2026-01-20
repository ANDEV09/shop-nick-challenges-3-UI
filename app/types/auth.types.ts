export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  result: {
    userInfo: UserInfoResponse;
    access_token: string;
    refresh_token: string;
  };
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface UserInfoResponse {
  id: string;
  username: string;
  email: string;
  balance: number;
  role: string;
  totalDeposited: number;
  createdAt: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}
