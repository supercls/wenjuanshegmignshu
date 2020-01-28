export {clot1,clot2}

let clot1 = []
for(let i = 0; i<100;i++){
    let obj = {
        text:i+'年'+' ', //空格一定要有
        value:i+'年',
    }
    clot1.push(obj)
}

let clot2 = []
for(let i = 0; i<13;i++){
    let obj = {
        text:i+'个月',
        value:i+'个月',
    }
    clot2.push(obj)
}