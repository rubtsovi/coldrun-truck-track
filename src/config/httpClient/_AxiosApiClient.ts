import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IHttpClient, RequestBaseParams, ResponseObject } from '_models/httpClient.ts';

class AxiosApiClient implements IHttpClient {
  private axiosInstance: AxiosInstance;
  constructor(_baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: _baseUrl,
    });
  }

  public makeRequest<TResponse, TData>(
    baseParams: RequestBaseParams,
    data?: TData,
    options?: AxiosRequestConfig
  ): ResponseObject<TResponse> {
    const controller = new AbortController();
    const response = this.axiosInstance
      .request({
        ...options,
        ...baseParams,
        ...(baseParams.method === 'get' ? { params: data } : { data }),
        signal: controller.signal,
      })
      .then(res => {
        return res.data;
      });

    return { response: response, abortController: controller };
  }

  public get<TResponse, TParams = undefined>(
    url: string,
    params?: TParams,
    options?: AxiosRequestConfig
  ): ResponseObject<TResponse> {
    return this.makeRequest({ url, method: 'get' }, params, options);
  }

  public post<TResponse, TData>(
    url: string,
    data: TData,
    options?: AxiosRequestConfig
  ): ResponseObject<TResponse> {
    return this.makeRequest({ url, method: 'post' }, data, options);
  }

  public delete<TResponse>(url: string): ResponseObject<TResponse> {
    return this.makeRequest({ url, method: 'delete' });
  }

  public put<TResponse, TData>(url: string, data: TData): ResponseObject<TResponse> {
    return this.makeRequest({ url, method: 'put' }, data);
  }
}

export default AxiosApiClient;
