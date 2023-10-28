import Repository from '@/core/Http/Repository';

import User from '@/shared/domain/entities/User';

import { loginData } from '../domain/schemas/login';
import SignUpDTO from '../domain/dtos/SignUpDTO';

export default class AuthRepository extends Repository {
  constructor() {
    super('');
  }

  public async signUp(signUp: SignUpDTO): Promise<any> {
    const { status, data } = await this.http.post(
      'users',
      signUp
    );

    if (this.isOK(status)) return data;

    throw new Error('Ops, algo inesperado aconteceu!');
  }

  public async login(login: loginData): Promise<{ token: string; user: User }> {
    const { status, data } = await this.http.post('/auth/login', login);

    if (this.isOK(status))
      return {
        token: data.access_token ?? '',
        user: User.make(data.user ?? {}),
      };

    throw new Error('Ops, algo inesperado aconteceu!');
  }

  public async check(): Promise<User> {
    const { status, data } = await this.http.get('/auth');

    if (this.isOK(status)) return User.make(data);

    throw new Error('Ops, algo inesperado aconteceu!');
  }
}
