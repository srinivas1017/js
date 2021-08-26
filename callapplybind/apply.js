let obj2 = {
    num1:100,
    num2:200
};

function fun_three(arg1,arg2) {
    console.log(this.num1+this.num2+arg1+arg2)
}

fun_three.call(obj2,300,400)

let arr1 = [600,400]
fun_three.apply(obj2,arr1)