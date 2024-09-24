// axios.ts
import Axios, { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";

// Create a custom Axios instance
const apiService = Axios.create({
  //@ts-ignore
  baseURL: import.meta.env.VITE_ROOT,
});

// Create a hook to configure Axios with a token
export const useApiService = () => {
  const [tokenCookie] = useCookies(["token"]);

  const withToken = async (config: AxiosRequestConfig) => {
    const token = await tokenCookie.token;

    return {
      ...config,
      headers: {
        ...config.headers,

        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  };

  apiService.interceptors.request.use(withToken as any);

  return apiService;
};
