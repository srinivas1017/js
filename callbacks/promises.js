//proper communication between producer and consumer called as promises 
//producer will create the promises 
// consumer will consume the promises 
//promises have following states 1.resolve 2.reject 3.pending
// we will create the promises by using the promise class
//we will consume in two ways 1.then()=> old approach 2. async&await => latest approach
//promises are special javascript objects.

let promise1 = new Promise((resolve,reject)=>{
    resolve("welcome to promises") 
}) 

promise1.then((posRes)=>{
console.log(posRes)
},(err)=>{
console.log("err")
})