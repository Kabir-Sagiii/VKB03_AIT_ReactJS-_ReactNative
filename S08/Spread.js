
var obj1 = {
    name:"xyz",
    city:"hyd"
}

var obj2 = {
    id:101,
    ...obj1,
    gender:"male"
}

var arr1 = [10,20,30,40]

var arr2 = ["a",...arr1,true,false]

console.log(arr1)
console.log()
console.log(arr2)