import service from '@/utils/fetch.js'
export function GetSzdq(data) { //获取地区
    return service({
        url: '/BreastFeedingQuestionair/GetSzdq',
        method: 'get',
        params:data
    })
}

export function GetCommunity(data) { //获取社区
    return service({
        url: '/BreastFeedingQuestionair/GetCommunity',
        method: 'get',
        params:data
    })
}

export function GetMobileVerifyCode(data) { //获取验证码
    return service({
        url: '/BreastFeedingQuestionair/GetMobileVerifyCode',
        method: 'get',
        params:data
    })
}

export function MatchVerCode(data) { //匹配验证码
    return service({
        url: '/BreastFeedingQuestionair/MatchVerCode',
        method: 'get',
        params:data
    })
}

// 提交绑定数据
export function SaveMyQuestionair(data) { 
    return service({
        url: '/BreastFeedingQuestionair/SaveMyQuestionair',
        method: 'post',
        data
    })
}