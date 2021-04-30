import axios from 'axios';

function configureRequest(options) {
    const client = axios.create({
        baseURL: options.url,
        method: options.method,
        data: options.data,
        params: options.params,
    });
    return client(options);
}

export default async function requestWrapper(options) {
    return configureRequest(options);
}