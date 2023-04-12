import {ApiError, ApiResponse, ResponseData} from '../auth/auth.types';

export const generateApiResposeObject = (
  error: ApiError | null,
  data: ResponseData,
): ApiResponse => {
  return {
    error,
    data,
  };
};
