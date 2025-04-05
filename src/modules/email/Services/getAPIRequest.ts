import axios, { AxiosResponse } from "axios";
import { BASE_URL } from '../../../Constant';

type Callback<T = any> = (err: any, res: AxiosResponse<T> | null) => void;

const getHeaders = (type: "json" | "form" = "json"): Record<string, string> => {
    const token = localStorage.getItem("access_token");
    const headers: Record<string, string> = {};

    if (type === "form") headers["Content-Type"] = "multipart/form-data";
    else headers["Content-Type"] = "application/json";

    if (token) headers["Authorization"] = `Bearer ${token}`;

    return headers;
};

export const getApiData = async <T = any>(
    endpoint: string,
    cb: Callback<T>,
    params: Record<string, any> = {},
    type: "json" | "form" = "json"
): Promise<void> => {
    try {
        const headers = getHeaders(type);
        const res = await axios.get<T>(`${BASE_URL}${endpoint}`, {
            headers,
            params,
        });
        cb(null, res);
    } catch (err) {
        cb(err, null);
    }
};
