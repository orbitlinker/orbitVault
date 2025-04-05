import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { BASE_URL } from "../../../Constant";

type Callback<T = any> = (err: any, res: AxiosResponse<T> | null) => void;

const getHeaders = (type: "json" | "form" = "json"): Record<string, string> => {
    const token = localStorage.getItem("access_token");
    const headers: Record<string, string> = {};

    headers["Content-Type"] =
        type === "form" ? "multipart/form-data" : "application/json";

    if (token) headers["Authorization"] = `Bearer ${token}`;

    return headers;
};

interface RequestOptions {
    endpoint: string;
    method?: Method;
    params?: Record<string, any>;
    data?: any;
    type?: "json" | "form";
}

export const apiRequest = async <T = any>(
    options: RequestOptions,
    cb: Callback<T>
): Promise<void> => {
    const {
        endpoint,
        method = "GET",
        params = {},
        data = null,
        type = "json"
    } = options;

    try {
        const headers = getHeaders(type);

        const config: AxiosRequestConfig = {
            url: `${BASE_URL}${endpoint}`,
            method,
            headers,
            params,
            data,
        };

        const res = await axios.request<T>(config);
        cb(null, res);
    } catch (err) {
        cb(err, null);
    }
};
