/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '@/config/constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

const handleError = (error: any): never => {
    if (error.response) {
        console.error('Erro na resposta:', error.response.data);
        throw error.response.data;
    } else if (error.request) {
        console.error('Sem resposta do servidor:', error.request);
        throw new Error('Sem resposta do servidor');
    } else {
        console.error('Erro ao configurar a requisição:', error.message);
        throw new Error(error.message);
    }
};

export const httpGet = async <T>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {}
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axiosInstance.get(url, {
            params,
            ...config,
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return handleError(error);
    }
};

export const httpPost = async <T>(
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axiosInstance.post(url, data, config);
        return response.data;
    } catch (error) {
        handleError(error);
        return handleError(error);
    }
};
