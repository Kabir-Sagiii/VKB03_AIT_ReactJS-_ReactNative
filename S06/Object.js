
let user = {

    username : "Aditya",
    gender:"male",
    id:101,
    isMarried : false

}

console.log(user)

// Add New Property
  user.city = "hyderabad";
  user.state = "TS"

//Update Property Values
user.username = "Rohan Verma"
user.id = 107


//Remove the Property
  delete user.gender
  delete user.isMarried


//Access the Property Value
var name = user.username
var cityName = user.city
console.log(name,cityName)