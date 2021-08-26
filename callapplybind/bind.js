let obj2 = {
    num1:100,
    num2:200
};

function fun_three(arg1,arg2) {
    console.log(this.num1+this.num2+arg1+arg2)
}

let newmemo = fun_three.bind(obj2)
newmemo(300,400)