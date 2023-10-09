import axios from 'axios'
import { callApi } from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1'

export const setSignUp = async (data: FormData) => {
    const url = `${ROOT_API}/${API_VERSION}/auth/signup`

    return callApi({
        url,
        method: 'POST',
        data,
    })

    // const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    //     .catch(err => err.response)
    // const axiosResponse = response.data
    // if(axiosResponse?.error === 1){
    //     return axiosResponse;
    // }
    
    // return axiosResponse.data
}

export const setLogin = async (data: LoginTypes) => {
    const url = `${ROOT_API}/${API_VERSION}/auth/signin`

    return callApi({
        url,
        method: 'POST',
        data,
    })
}