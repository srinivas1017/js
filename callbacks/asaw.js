let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("hello1")},0)
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("hello105")},5000)
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise3")},7000)
});

async function consume(){
    let res1 = await promise1;
    let res2 = await promise2;
    let res3 = await promise3;
    console.log(res1,res2,res3)
}
consume()