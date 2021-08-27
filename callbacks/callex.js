/* function fun_one(arg1){
    console.log(arg1())
}

fun_one(()=> {return "welcome to call backs"}) */

/*

function fun_one(arg1){
   return arg1("one","two","three")
}

fun_one((parm1,parm2,parm3)=> {console.log(parm1,parm2,parm3)}) */


/*
function fun_one(arg1,arg2,arg3){
    return (arg1("reactjs"),arg2("mdb"),arg3("js"))
 }
 
 fun_one((param1)=> {console.log(param1)},(param2)=> {console.log(param2)}, (pram1)=> {console.log(pram1)}) */

 
 /*
 function add(num1, callback){
    return callback(num1+5,false)
 }

 add(5,(addRes,error)=>{ if(!error) {console.log(addRes)}}) 
 

 function sub(num, callback) {
     return callback(num-5,false)
 }
 sub(13,(addRes,error) => {if(!error){console.log(addRes)}}) */








 
 function add(num1, callback){
    return callback(num1+5,false)
 }

 
 function sub(num, callback) {
     return callback(num-3,false)
 }

 function mul(num,callback){
     return callback(num*2,false)
 }
 
 add(5,(addRes,error)=> { if(!error){sub(addRes,(subRes,error)=>{
     if(!error){
         mul(subRes,(muRes,error)=>{
             if(!error){
                 console.log(muRes)
                }})}})}})









































