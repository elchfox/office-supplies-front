import config from "./config";
import { ToQuery } from "./helpers";

export type UseFetch = {
  data?: unknown;
  params?: Record<string, unknown>;
} & RequestInit;

export const headers = { "Content-Type": "application/json" };

const fetchAPI = async (url: string, options?: UseFetch) => {
  let query = options?.params ? ToQuery(options?.params) : "";
  const URL = `${config.baseUrl}${url}?${query}`.replace("??", "?");
  try {
    const response = await fetch(URL, {
      method: options?.method || "GET",
      headers: { ...headers, ...options?.headers },
      body: JSON.stringify(options?.data),
    });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export default fetchAPI;
