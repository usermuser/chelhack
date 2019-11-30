import { Repository } from './Repository';

export class GoodsRepository extends Repository {
  public async getBooks() {
    const response = await this.httpClient.post('/books');

    return response.data;
  }
}
