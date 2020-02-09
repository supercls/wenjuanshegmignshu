import Vue from "vue";
import axios from 'axios';
import qs from 'qs';
import { MessageBox } from 'mint-ui';
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
let httpBefore=''
if(window.location.href.indexOf('https')>=0){
    httpBefore='https://'
}
else{
    httpBefore='http://'
}
let httpName=httpBefore+window.location.host;
let BASE_API='http://localhost:1442/api';
if(httpName.indexOf('localhost')==-1){
    BASE_API=httpName+'/YYQ.API/V5.2.9/api/'   //版本需要随时修改
}
Vue.prototype.BASE_API=BASE_API
const service = axios.create({
    baseURL:BASE_API, // api的base_url
    timeout: 15000, // 请求超时时间
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})
// request拦截器
service.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    config.headers['Authorization'] = "ticket " + 'PMZrj63slI/2jN+QY2Mob71fkS8Q2djxzhdXLgfkQA6E79/oltiyZwNgd5BAomb/' // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
}, error => {
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非0是抛错 可结合自己业务进行修改
         */
        const res = response.data
        if (!res) {
            return 
        }
        let data = JSON.parse(res);
        if (!data.isSuccess) {
            MessageBox({
                message: data.msg,
            })
            return Promise.reject('error')
        } else {
            return data
        }
    },
    error => {
        console.log('err' + error) // for debug
        MessageBox({
            message: error.message,
        })
        return Promise.reject(error)
    }
)
export default service