export interface User {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  address: string;
}

export interface ApiError extends Error {}

export interface LoginRequest {
  username: string;
  password: string;
}

export type ResponseData = User | null;

export type ApiResponse = {
  error: ApiError | null;
  data: User | null;
};
