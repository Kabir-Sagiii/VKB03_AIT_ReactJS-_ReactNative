
function f1(){

    var promise = new Promise(function(resolve,reject){
        resolve({ok:true,result:[{},{}]})
    })

    return promise
}

// var promiseObject =  f1()
// console.log(promiseObject)

// How to access data from promise
   
  async function getDataFromPromise(){
      const data = await f1()
      console.log(data)

  }

  getDataFromPromise()