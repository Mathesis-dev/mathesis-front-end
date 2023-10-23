import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { parse, stringify } from 'qs';
import EUnauthenticatedPath from '../Router/enums/EUnauthenticatedPath';

function handleAxiosRequest(config: InternalAxiosRequestConfig) {
  const item = localStorage.getItem('token');
  const token = item ? JSON.parse(item)['token'] : 'none';

  config.headers.setAuthorization(`Bearer ${token}`);

  return config;
}

function handleAxiosRequestError(error: any) {
  throw error;
}

function handleAxiosResponse(response: AxiosResponse<any, any>) {
  return response;
}

function handleAxiosResponseError(error: any) {
  if (
    (error.response &&
      error.response.status &&
      error.response.status === 502) ||
    (error.code && error.code === 'ERR_NETWORK')
  )
    throw new Error('Servidor indisponível!');

  if (
    error.response &&
    error.response.status &&
    error.response.status === 401 &&
    localStorage.getItem('token') &&
    !window.location.pathname
      .split('/')
      .some((path) =>
        [
          EUnauthenticatedPath.REGISTER,
          EUnauthenticatedPath.LOGIN,
        ].includes(path as EUnauthenticatedPath)
      )
  ) {
    localStorage.removeItem('token');

    const to = '/' + EUnauthenticatedPath.LOGIN;
    window.location.href = to;

    throw new Error('Sem autorização!');
  }

  throw error;
}

const Client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  withCredentials: true,
  timeout: 900000,
  timeoutErrorMessage:
    'Zzz... O servidor está demorando. Tente novamente mais tarde.',
  paramsSerializer: {
    encode: (params) => parse(params),
    serialize: (params) => stringify(params),
  },
});

Client.interceptors.request.use(handleAxiosRequest, handleAxiosRequestError);

Client.interceptors.response.use(handleAxiosResponse, handleAxiosResponseError);

export default Client;
