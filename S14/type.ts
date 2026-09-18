// type User = {
//     name:string,

// }

// type User = {
//     id:number
// }

type User = [number,string]

type ProductName = string

// let user1 : User = [101,""]

let producName:ProductName = "vfjdkvbjdfk"


//intersection : &

type name = {
    username:string
}

type city = {
    city : string
}

type myUser = name & city

let user1 : myUser = {
    city:"",
    username:""
}
