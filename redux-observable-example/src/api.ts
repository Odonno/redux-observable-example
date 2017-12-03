import { httpGetRequest, httpPostRequest } from './http';

const baseUrl = 'http://localhost:61185/api/';

export const getValues = () => {
    return httpGetRequest(baseUrl + 'values/all');
};

export const postIncrement = (key: string) => {
    return httpPostRequest(baseUrl + 'values/increment/' + key, {});
};

export const postDecrement = (key: string) => {
    return httpPostRequest(baseUrl + 'values/decrement/' + key, {});
};