import Repository from '@/core/Http/Repository';

export default class ChatRepository extends Repository {
  constructor() {
    super('/chat');
  }

  public async sendMessage(message: string): Promise<string> {
    const { status, data } = await this.http.post('/', { message });

    if (this.isOK(status)) return data;

    throw new Error('Ops, algo inesperado aconteceu!');
  }
}
