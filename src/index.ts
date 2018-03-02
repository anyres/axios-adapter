import {
  Anyres,
  IAnyresRequestOptions,
  IAnyresResponse,
  IHttpAdapter,
} from "@anyres/core";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

export class AxiosAdapter implements IHttpAdapter {

  public http: AxiosInstance = axios.create();

  public get(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return Observable.fromPromise<AxiosResponse<any>>(this.http.get(url, axiosRequestConfig))
      .map((response) => {
        return {
          status: response.status,
          headers: response.headers,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public post(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return Observable.fromPromise(this.http.post(url, options.body || {}, axiosRequestConfig))
      .map((response) => {
        return {
          status: response.status,
          headers: response.headers,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public put(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return Observable.fromPromise(this.http.put(url, options.body || {}, axiosRequestConfig))
      .map((response) => {
        return {
          status: response.status,
          headers: response.headers,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public delete(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return Observable.fromPromise(this.http.delete(url, axiosRequestConfig))
      .map((response) => {
        return {
          status: response.status,
          headers: response.headers,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public patch(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    let axiosRequestConfig: AxiosRequestConfig = {};
    if (options) {
      axiosRequestConfig = {
        params: options.params,
        headers: options.headers,
      };
    }
    return Observable.fromPromise(this.http.patch(url, options.body || {}, axiosRequestConfig))
      .map((response) => {
        return {
          status: response.status,
          headers: response.headers,
          body: response.data,
          json: () => response.data,
        };
      });
  }

}

