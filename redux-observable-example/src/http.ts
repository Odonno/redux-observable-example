import { ajax } from 'rxjs/observable/dom/ajax';

export const httpGetRequest = (url: string) => {
    return ajax({ url, withCredentials: true, crossDomain: true });
};

export const httpPostRequest = (url: string, body: {}) => {
    return ajax({ url, body, method: 'POST', withCredentials: true, crossDomain: true });
};