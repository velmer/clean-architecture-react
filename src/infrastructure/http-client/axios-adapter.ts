import axios from "axios";
import { IHttpClient } from "./i-http-client";

const goRest = axios.create({
  baseURL: process.env.REACT_APP_GOREST_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
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
