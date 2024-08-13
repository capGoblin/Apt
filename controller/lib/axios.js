const axios = require('axios');
const MY_TOKEN = "7448568060:AAFdxqls9uA8_phYiJI-tRF5mtaFIgH49nM"

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data) {
            return axios.post(`/${method}`, data, {
                baseURL: BASE_URL,
            });
        }
    };
}

const GECKO_BASE_URL = "https://api.geckoterminal.com/api/v2";

function getGeckoAxiosInstance() {
    return {
        get(endpoint, params) {
            return axios.get(`${GECKO_BASE_URL}${endpoint}`, {
                params,
            });
        }
    };
}

module.exports = {
    axiosInstance: getAxiosInstance(), geckoAxiosInstance: getGeckoAxiosInstance(),
};