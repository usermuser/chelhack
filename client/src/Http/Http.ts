import Axios, { AxiosInstance } from 'axios';

export interface IHttpRequestConfig {
  headers?: Record<string, string>;
}

export class Http {
  private instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = Axios.create({
      baseURL,
    });

    this.instance.defaults.headers.post['Content-Type'] = 'application/json';
  }

  public request: AxiosInstance['request'] = (...args) => {
    return this.instance.request(...args);
  }

  public get: AxiosInstance['get'] = (...args) => {
    return this.instance.get(...args);
  }

  public post: AxiosInstance['post'] = (...args) => {
    return this.instance.post(...args);
  }

  public patch: AxiosInstance['patch'] = (...args) => {
    return this.instance.patch(...args);
  }

  public delete: AxiosInstance['delete'] = (...args) => {
    return this.instance.delete(...args);
  }
}
