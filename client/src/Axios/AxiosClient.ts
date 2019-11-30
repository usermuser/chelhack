import { Http } from "../Http";
import { GoodsRepository } from "./GoodsRepository";

export class AxiosClient {
  public goods: GoodsRepository;

  public constructor(httpClient: Http) {
    this.goods = new GoodsRepository(httpClient);
  }
}