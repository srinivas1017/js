let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("hello1")},0)
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("hello105")},5000)
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise3")},7000)
});

/*promise1.then((posRes)=>{console.log(posRes);},(errRes)=>{console.log(errRes);})


promise2.then((posRes)=>{console.log(posRes);},(errRes)=>{console.log(errRes);})
promise3.then((posRes)=>{console.log(posRes);},(errRes)=>{console.log(errRes);}) */

Promise.all([promise1,promise2,promise3]).then((posRes)=>{console.log(posRes);},(errRes)=>{console.log(errRes);})

// thought then using not good idea ...coz of no call backs ...no of call backs leads to hell