/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

import { IHttpClient } from '@/app/contracts/i-http-client';

const goRest = axios.create({
  baseURL: import.meta.env.VITE_GOREST_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GOREST_TOKEN}`,
  },
});

export class AxiosAdapter implements IHttpClient {
  async get(url: string): Promise<any> {
    const response = await goRest.get(url);
    return response.data;
  }

  async post(url: string, body: any): Promise<any> {
    const response = await goRest.post(url, body);
    return response.data;
  }

  async put(url: string, body: any): Promise<any> {
    const response = await goRest.put(url, body);
    return response.data;
  }

  async delete(url: string): Promise<any> {
    const response = await goRest.delete(url);
    return response.data;
  }
}
