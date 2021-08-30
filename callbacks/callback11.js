function add(num) {
    return new Promise((resolve,reject)=>{
        resolve(num+5)
    })
}

function sub(num) {
    return new Promise((resolve,reject)=>{
        resolve(num-2)
    })
}

function mul(num) {
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}

async function consume(){
    let addRes = await add(5)
    let subRes = await sub(addRes)
    let mulRes = await mul(subRes)

    console.log(addRes, subRes, mulRes)
}

consume()