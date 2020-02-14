export function getUrlParam(name) {  //
    if (window.location.href.indexOf('?') >= 0) {
        var a = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        var t;
        var i = 0;
        var l = a.length;
        for (; i < l; i++) {
            if ((t = a[i].split('='))[0] === name) return t[1];
        }
    }
    return null;
}
export function WeeksBetw(date1,date2) {  //计算日期之间相差得天数
    var _dt1=new Date(date1);
    var _dt2=new Date(date2);
    var dt1=_dt1.getTime();
    var dt2=_dt2.getTime();
    return parseInt(Math.abs(dt1- dt2)/1000/60/60/24);//这里是计算天数,如果想获得周数则在该返回值上再除以7
}

export function dateForm(data){   //日期格式化
    return   new Date(data).getFullYear()+'-'+addZero((new Date(data).getMonth()+1))+'-'+addZero(new Date(data).getDate())
}

function addZero(s){
    return s < 10 ? '0' + s: s;
}