import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';

type UnauthorizedCallback = () => void;

const BACKEND_URL = 'https://api.entsu.ru/';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401, // У тебя есть файл с константами, почему бы не вынести туда?
}

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        (config.headers ??= {})['Authorization'] = token;
      }

      return config;
    },
  );

  return api;
};
