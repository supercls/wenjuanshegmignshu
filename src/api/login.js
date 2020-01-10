import service from '@/utils/fetch.js'
export function login(data) { //fetch  promise用法
    return service({
        url: '/User/UserLoginIn',
        method: 'post',
        data:data
    })
}



export function getVerCode(data) {
    return service({
        url: '/User/GetMobileVerifyCode',
        method: 'get',
        params: data
    })
}

export function ResetPassword(data) { //重置密码
    return service({
	url: '/User/ResetPassword',
	method: 'post',
	data:data
    })
}