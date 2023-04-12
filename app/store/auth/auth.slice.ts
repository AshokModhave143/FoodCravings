import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiError, LoginRequest, User} from './auth.types';

export interface AuthState {
  isAuthenticated: boolean;
  user?: User | null;
  error?: ApiError | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: (state, action: PayloadAction<LoginRequest>) => {
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    },
    loginFailure: (state, action: PayloadAction<ApiError>) => {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {login, loginFailure, loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
