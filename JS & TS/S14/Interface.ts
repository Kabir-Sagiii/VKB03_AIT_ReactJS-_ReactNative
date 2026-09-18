
interface IStudent  {

    readonly sid : Number,
    sname : String,
    isPlacement : Boolean,
    city? :String

}

let student1 : IStudent = {

    sid:101,
    sname : "raj",
    isPlacement:true,
    city :"hyd"
}

// student1.sid = 105  invalid

console.log(student1)

let student2 : IStudent = {

    sid:103,
    sname : "rohan",
    isPlacement:true,
   
}