export {clot1,clot2,clot3,clot4,clot5,clot6,clot7,clot8,clot9,clot10}

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

let clot3 = []
for(let i = 0; i<10;i++){
    let obj = {
        text:i,
        value:i,
    }
    clot3.push(obj)
}
let clot4 = []
for(let i = 0; i<46;i++){
    let obj = {
        text:i+'周'+' ', //空格一定要有
        value:i+'周'
    }
    clot4.push(obj)
}
let clot5 = []
for(let i = 0; i<8;i++){
    let obj = {
        text:i+'天',
        value:i+'天'
    }
    clot5.push(obj)
}
let clot6 = []
for(let i = 0; i<100;i++){
    let obj = {
        text:i,
        value:i
    }
    clot6.push(obj)
}

let clot7 = []
for(let i = 0; i<31;i++){
    let obj = {
        text:i,
        value:i
    }
    clot7.push(obj)
}

let clot8 = []
for(let i = 0; i<24;i++){
    let obj = {
        text:i,
        value:i
    }
    clot8.push(obj)
}

let clot9 = []
for(let i = 0; i<8;i++){
    let obj = {
        text:i,
        value:i
    }
    clot9.push(obj)
}

let clot10 = []
for(let i = 0; i<24;i++){
    let obj = {
        text:i,
        value:i
    }
    clot10.push(obj)
}
clot10.push({
    text:99,
    value:99
})