import { Repository } from './Repository';

export class GoodsRepository extends Repository {
  public async categories() {
    const response = await this.httpClient.get<string[]>('/categories');

    return response.data;
  }
}
