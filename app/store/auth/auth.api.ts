import {generateApiResposeObject} from '../utils/generateApiResponse';
import {LoginRequest, ApiResponse} from './auth.types';

export const login = (loginRequest: LoginRequest): ApiResponse => {
  try {
    if (
      loginRequest.username.toString().toLowerCase() === 'admin' &&
      loginRequest.password.toString() === 'admin'
    ) {
      return generateApiResposeObject(null, {
        firstName: 'Ashok',
        lastName: 'Modhave',
        email: 'xyz@gmail.com',
        contact: 123456789,
        address: '9 road, lunarlab, mars',
      });
    } else {
      return generateApiResposeObject(new Error('Invalid credentials'), null);
    }
  } catch (err: any) {
    throw generateApiResposeObject(new Error('Login failed'), null);
  }
};
