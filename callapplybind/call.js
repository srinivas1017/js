
    let obj = {num:10}


    function func_one(){


        
        console.log(this.num)
    }


func_one()
func_one.call(obj)

let obj1 = {num1:10, num2:10}

function func_two() {
    console.log(this.num1+this.num2)
}

func_two.call(obj1)