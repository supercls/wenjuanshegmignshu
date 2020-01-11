import service from '@/utils/fetch.js'
// 提交绑定数据
export function SaveQuestionair_Hospital(data) { //医疗机构
    return service({
        url: '/Questionair/SaveQuestionair_Hospital',
        method: 'post',
        data
    })
}

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