
var obj1 = {
    name :"Kabir",
    display : function(){
        console.log(this)
    }
}

obj1.display()

var obj2 = {
    name :"Sagar",
    display : ()=>{
      console.log(this)
    }
}

obj2.display()