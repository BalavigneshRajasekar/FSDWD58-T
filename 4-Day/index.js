
//--------------------------------Day-4--------------------------------------------------------
//---------------1.Do the below programs in anonymous function & IIFE---------------------------

//a.Print odd numbers in an array By Anonymous function--------------------
var a_question=[2,5,4,3,7,8,11];

var ananymousFunction=function(datas){
  for(var i=0;i<datas.length;i++){
    //Checking for Odd number 
      if(datas[i]%2==1){
         console.log(datas[i])
      }
  }
}
ananymousFunction(a_question);

// By IIFE (Imediate invoke function)-------------------------------------
(function () {
  for(var i=0;i<a_question.length;i++) {
      if(a_question[i]%2==1) {
         console.log(a_question[i])
      }
  }
})();

//------------------------------------------------------------------------------------------------------

// b.Convert all the strings to title caps in a string array By Anonymous function---------------

var b_question=["html","css","javascript","react"]

var title_Cap=function(){
  var changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
      return res[0].toUpperCase() + res.substring(1).toLowerCase()
  })
  console.log(changedData)
}

title_Cap();

// By IIFE (Imediate invoke function)-------------------------------------
(function () {
  var changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
    return res[0].toUpperCase() + res.substring(1).toLowerCase()
})
console.log(changedData)
})();

//-----------------------------------------------------------------------------------------------------

// c.Sum of all numbers in an array By Anonymous function-----------------

var c_question=[1,3,5,4,3]

var sum=function(){
  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log(ans)
}

sum();

// By IIFE (Imediate invoke function)-------------------------------------

(function() {
  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log(ans)

})();

//------------------------------------------------------------------------------------------------------

// D.Return all the prime numbers in an array--------------------------------

var d_question=[2,4,5,10,11,3]

var prime_Num=function() {
  var prime_data=[] // store final prime number
  var check_isPrime=0 // checking flag for prime number
  
  for(var i=0;i<d_question.length;i++) {
    //after each itertaion restart the flag
    check_isPrime=0
    // here each num will devide with each number time
    for(var j=1;j<=d_question[i];j++) {
      if(d_question[i]%j==0 ) {
        check_isPrime++
      }
     

    }
    //here which num has only 2 flag is prime
    if(check_isPrime==2){
      prime_data.push(d_question[i])
    }
  }
  return prime_data
}
  var prime_Num=prime_Num();
 console.log(prime_Num);

 // By IIFE (Imediate invoke function)------------------------------------------
var prime=(function() {

  var prime_data=[] // store final prime number
  var check_isPrime=0 // checking flag for prime number
  
  for(var i=0;i<d_question.length;i++) {
    //after each itertaion restart the flag
    check_isPrime=0
    // here each num will devide with each number time
    for(var j=1;j<=d_question[i];j++) {
      if(d_question[i]%j==0 ) {
        check_isPrime++
      }
     

    }
    //here which num has only 2 flag is prime
    if(check_isPrime==2){
      prime_data.push(d_question[i])
    }
  }
  return prime_data 

})();
console.log(prime)

//--------------------------------------------------------------------------------------------------------