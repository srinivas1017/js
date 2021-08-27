let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("welcome to promises")},5000)
});

promise1.then((posRes)=>{console.log(posRes);},(errRes)=>{console.log(errRes);})
