//----------------------DAY 3 TASK---------------------------------------------------------//

// 1. How To compare Two JSON have the same properties without order ? -----------------------------//
let obj1={name:"Person1",age:5}
let obj2={age:5,name:"Person1"}

function compareTwoJson(){
    
    var obj1_Key=Object.keys(obj1)
    var obj2_Key=Object.keys(obj2)

     //Check the length of the key's stored are same
    if(obj1_Key.length!==obj2_Key.length){
        
        return false
    }
    // Checking the values hold by the key
   for(var key of obj1_Key){
       if(obj1[key]!==obj2[key]){
        
           return false
       }
       
   }

   return true;
}

console.log("Two Json have the same Properties :" ,compareTwoJson())

//--------------------------------------------------------------------------------------------------------//

// 2. Use the Rest countries Api URl "https://restcountries.com/v3.1/all" Display all the country flag //

// Create Object for Http
var Http= new XMLHttpRequest()

var Method="GET"
var Url="https://restcountries.com/v3.1/all"

//Open the Http request
Http.open(Method,Url,true)
//Function that handle the responce we get
Http.onload=function(){
     var Datas=JSON.parse(Http.responseText)
     for(var keys of Datas){
         console.log("Country Flag :"+" "+keys.flag)
     }

}

Http.send();
//-------------------------------------------------------------------------------------------------------//

// Use the same API and print all countries Name, region ,sub-region---------------------------//

var Http1= new XMLHttpRequest()

var Method1="GET"
var Url1="https://restcountries.com/v3.1/all"

//Open the Http request
Http1.open(Method1,Url1,true)
//Function that handle the responce we get
Http1.onload=function(){
     var Datas=JSON.parse(Http.responseText)
     for(var keys of Datas){
         console.log("Name :",keys.name.common+"| "+"Region :",keys.region+"| "+"Sub-region :",keys.subregion)
     }

}

Http1.send();