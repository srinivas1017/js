function add(num,callback) {
return callback(num+5,false)
}

add(5,(addRes,error)=>{if(!error){console.log(addRes)}})

// using callback function i snot good idea, alternative solution using promises async and await function

f