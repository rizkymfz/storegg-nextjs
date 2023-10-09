import axios, { Axios, AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie';


interface callApiProps extends AxiosRequestConfig {
    token?: boolean;
}

export const callApi = async ({ url, method, data, token }: callApiProps) => {
    let headers = {}
    if(token) {
        const tokenCookies = Cookies.get('token')
        if(tokenCookies) {
            const jwtToken = atob(tokenCookies!) // ugly to beauty
            headers = {
                Authorization: `Bearer ${jwtToken}`,
            }
        }
    }

    const response = await axios({
        url: url,
        method: method,
        data: data,
        headers,
    }).catch(err => err.response)

    if (response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    }
    const res = {
        error: false,
        message: response.data.message,
        data: response.data.data
    }
    return res
}