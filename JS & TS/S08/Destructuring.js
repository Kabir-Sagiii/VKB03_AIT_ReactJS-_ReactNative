let data = [10,20,30,40,50,function fn(){console.log("fn is called")}]

let [x,y,z,a,b,c] = data

function f1(){
    // let x = data[3]
console.log(a) //40
console.log(y)
}
f1()

function f2(para){

    console.log(para) // 30
}

// f2(data[2])
f2(z)


function f3(){
    //    data[5]()
    c() // fn
    return b
}

console.log(f3()) //50