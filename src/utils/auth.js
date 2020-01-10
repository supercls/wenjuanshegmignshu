const TokenKey = 'Admin-Token'
const Tokenuserid = 'user-Token'
const MobileTel = 'Mobile-Tel'
export function getWxdata() {
    return settingstorage().wxData
}

export function setWxdata(mobile) {
    var settings=settingstorage()
    settings.wxData=mobile
    settingstorage(settings)
}

export function removeWxdata() {
    var settings=settingstorage()
    settings.wxData=''
    settingstorage(settings)
}

export function getToken() {
    return settingstorage().token
}

export function setToken(token) {
    var settings=settingstorage()
    settings.token=token
    settingstorage(settings)
}


export function removeToken() {
    localStorage.removeItem('h5_settings');
}

export function getDstoken() {
    return settingstorage().openId
}

export function setDstoken(token) {
    var settings=settingstorage()
    settings.openId=token
    settingstorage(settings)
}

export function settingstorage(settings){
    if(!!arguments.length) {
        settings = settings || {};
        localStorage.setItem('h5_settings', JSON.stringify(settings));
    } else {
        var settingsText = localStorage.getItem('h5_settings') || "{}";
        return JSON.parse(settingsText);
    }
}

export function getDoctorNew(){
    let getDoctorNew = localStorage.getItem('doctorNews') || "{}";
    return JSON.parse(getDoctorNew);
}