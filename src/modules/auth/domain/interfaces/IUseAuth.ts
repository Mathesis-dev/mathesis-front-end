import SignUpDTO from '../dtos/SignUpDTO';
import { loginData } from '../schemas/login';
import IAuth from './IAuth';

export default interface IUseAuth extends IAuth {
  signUp: (data: SignUpDTO) => Promise<string>;
  login: (data: loginData) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  refreshUser: () => Promise<void>;
}
