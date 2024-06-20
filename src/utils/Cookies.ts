import { Cookies } from 'react-cookie';

/* eslint-disable */

export interface CookieGetOptions {
  doNotParse?: boolean;
  doNotUpdate?: boolean;
}
export interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
}
export interface CookieChangeOptions {
  name: string;
  value?: any;
  options?: CookieSetOptions;
}

const cookies = new Cookies();

export const setCookie = (
  name: string,
  value: string,
  options?: CookieSetOptions
) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string, options?: CookieGetOptions) => {
  return cookies.get(name, options);
};

export const removeCookie = (name: string, options?: CookieSetOptions) => {
  return cookies.remove(name, options);
};
