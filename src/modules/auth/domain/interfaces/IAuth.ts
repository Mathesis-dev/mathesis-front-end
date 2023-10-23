import User from '@/modules/user/domain/entities/User';

export default interface IAuth {
  authenticated: boolean;
  user: User | null;
}
