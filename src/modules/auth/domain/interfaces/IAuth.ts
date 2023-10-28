import User from '@/shared/domain/entities/User';

export default interface IAuth {
  authenticated: boolean;
  user: User | null;
}
