import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export const domain: string = "http://localhost:8080";
export const USERLOGIN: string = "userLogin";

export const http = axios.create({
  baseURL: domain,
  timeout: 30000,
});

// API interceptors
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = config.headers ?? {};
  }
  let token: string | undefined = getStorageJSON(USERLOGIN)?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err) => {
    if (err.response?.status === 401) {
      history.push("/login");
    }
    return Promise.reject(err);
  }
);

// LocalStorage utilities
export const saveStorageJSON = (name: string, data: any): void => {
  const sData = JSON.stringify(data);
  localStorage.setItem(name, sData);
};

export const getStorageJSON = (name: string): any => {
  const sData = localStorage.getItem(name);
  if (sData) {
    return JSON.parse(sData);
  }
  return {};
};

export const clearStorageJSON = (name: string): void => {
  localStorage.removeItem(name);
};
