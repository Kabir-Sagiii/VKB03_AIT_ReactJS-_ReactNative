
function f1(value:any){

    console.log(value)
}

  f1(100);

  f1("hello")

  f1([1,2,3,4])


  function getData<T>(value:T):T{

    return value
  }

     console.log(getData(100))

     console.log(getData<string>("hello"))

interface Student<T,U> {
        value : T,
        id : U
     }

     var student1 : Student<number,string> = {
        value : 100,
        id:""
     }

     var student2 : Student<string,number> = {
        value : "hello",
        id:101
     }