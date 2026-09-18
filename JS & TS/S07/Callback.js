
function f1(){
    console.log("f1 is called")
}

function f2(fn){
    console.log("f2 is called")
    fn()
}

function f3(x){
    x()
    console.log("f3 is called")
    x()
}

  f2(f1)

  f3(function(){
    console.log("New Callback function")
  })

  f3(()=>{
    console.log("arrow fn as a callback")
  })