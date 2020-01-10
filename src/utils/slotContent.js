export {monthCont, dayCont,timaAge,fourSevent,zeroSix,fourSixth, frequencyCont,cardType,hourCont,minuteCont,heightCont,radixPoint,weightCont,tenCont,bitCon,sexCon,headCon,yunCon,booleanCon,weekCon,bornCon,alltenCon,hasCon,momAge,addressCon,hukCon}

let cardType=[    //证件类型
    {text: '身份证', value: '身份证'},
    {text: '护照', value: '护照'}
];

let hourCont=[]         //小时范围
for(let i =0; i< 24; i ++){
    let obj= {text: i+"小时", value: i};
    hourCont.push(obj)
}

let minuteCont=[]         //分钟范围

let frequencyCont=[]         //次数


let monthCont=[]         //次数


let dayCont=[]         //天数


let heightCont=[]         //身高范围

let radixPoint=[]       //.0
for(let i =0;i<10;i++){
    let obj= {text: '.'+i, value: '.'+i};
    radixPoint.push(obj)
}
let weightCont=[]       //体重

let tenCont=[]          //0~9
for(let i =0;i<10;i++){
    let obj= {text: i+'', value: i};
    tenCont.push(obj)
}
let bitCon=[           //是否
    {text: '是', value: '是'},
    {text: '否', value:  '否'}
]
let booleanCon=[           //是否
    {text: '是', value: 1},
    {text: '否', value:  0}
]
let sexCon=[
    {text: '男', value: true},
    {text: '女', value: false}
]
let headCon=[]  //1~100
for(let i =12;i<71;i++){
    let obj= {text: i, value: i};
    headCon.push(obj)
}
let yunCon=[]      //20-50
for(let i =0;i<41;i++){
    let obj= {text: i, value: i};
    yunCon.push(obj)
}
let weekCon=[]

let bornCon=[         //分娩方式

]
let alltenCon=[]
for(let i =0;i<11;i++){
    let obj= {text: i, value: i};
    alltenCon.push(obj)
}
let hasCon=[           //有，无
    {text: '有', value: '有'},
    {text: '无', value: '无'}
]

let momAge=[]

let addressCon=[           //
    {text: '城镇', value: true},
    {text: '农村', value: false}
]
let hukCon=[           //
    {text: '本区县', value: '本区县'},
    {text: '本市', value: '本市'},
    {text: '本省外市', value: '本省外市'},
    {text: '外省', value: '外省'}
]
let timaAge=[ {text: '1分钟', value: '1'}, {text: '2分钟', value: '2'}, {text: '3分钟', value: '3'}, {text: '4分钟', value: '4'},]
for(let i =1;i*5<91;i++){
    let obj= {text: i*5+'分钟', value: i*5};
    timaAge.push(obj)
}

let fourSixth=[]
for(let i =4;i<17;i++){
    let obj= {text: i, value: i};
    fourSixth.push(obj)
}

let fourSevent=[]
for(let i =4;i<73;i++){
    let obj= {text: i, value: i};
    fourSevent.push(obj)
}

let zeroSix=[]
for(let i =0;i<7;i++){
    let obj= {text: i, value: i};
    zeroSix.push(obj)
}