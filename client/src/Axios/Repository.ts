import { Http } from "../Http";

export abstract class Repository {
  protected readonly httpClient: Http;

  public constructor(httpClient: Http) {
    this.httpClient = httpClient;
  }
}