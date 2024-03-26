
//--------------------------------Day-4--------------------------------------------------------
//---------------1.Do the below programs in anonymous function & IIFE---------------------------

//a.Print odd numbers in an array By Anonymous function--------------------
var a_question=[2,5,4,3,7,8,11];

var ananymousFunction=function(datas){
  for(var i=0;i<datas.length;i++){
    //Checking for Odd number 
      if(datas[i]%2==1){
         console.log("Anonymous function :",datas[i])
      }
  }
}
ananymousFunction(a_question);

// By IIFE (Imediate invoke function)-------------------------------------
(function () {
  for(var i=0;i<a_question.length;i++) {
      if(a_question[i]%2==1) {
         console.log( "IIFE :", a_question[i])
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
  console.log("Anonymous Function :",changedData)
}

title_Cap();

// By IIFE (Imediate invoke function)-------------------------------------
(function () {
  var changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
    return res[0].toUpperCase() + res.substring(1).toLowerCase()
})
console.log("IIFE :",changedData)
})();

//-----------------------------------------------------------------------------------------------------

// c.Sum of all numbers in an array By Anonymous function-----------------

var c_question=[1,3,5,4,3]

var sum=function(){
  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log( "Anonymous Function :",ans)
}

sum();

// By IIFE (Imediate invoke function)-------------------------------------

(function() {
  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log("IIFE :",ans)

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
 console.log("Anonymous Function :",prime_Num);

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
console.log("IIFE :",prime)

//--------------------------------------------------------------------------------------------------------

// E.Return all the palindromes in an array By Anonymous function-----------------------------------------
var e_question=["sos","java","nitin"]

var palindrome_Anonymous=function(){
  var palindrome="" // variable for capture Individual Palidromes
  var palindrome_array=[] //Array to club the Individual Palindromes

  for(var i=0;i<e_question.length;i++){
    //Each outer Loop we need to refresh the variable to store new element
    palindrome=""
        // Reverse each element in an array to Identify Palindrome
        for(var j=e_question[i].length-1; j>=0;j--){
          palindrome+=e_question[i][j]
         
        }
        //Verify the normal element and reversed element are same
        if(palindrome==e_question[i]){
            palindrome_array.push(e_question[i])
        }

  }
  return palindrome_array
}
console.log("Anonymous function :",palindrome_Anonymous());


 // By IIFE (Imediate invoke function)------------------------------------------


var IIFE_palindrome=(function(){
  var palindrome="" // variable for capture Individual Palidromes
  var palindrome_array=[] //Array to club the Individual Palindromes

  for(var i=0;i<e_question.length;i++){
    //Each outer Loop we need to refresh the variable to store new element
    palindrome=""
        // Reverse each element in an array to Identify Palindrome
        for(var j=e_question[i].length-1; j>=0;j--){
          palindrome+=e_question[i][j]
         
        }
        //Verify the normal element and reversed element are same
        if(palindrome==e_question[i]){
            palindrome_array.push(e_question[i])
        }

  }
  return palindrome_array
})();
console.log("IIFE :",IIFE_palindrome)

//-------------------------------------------------------------------------------------------------------------------

//-----F.Return median of two sorted arrays of the same size---------------------------------------------

//----------ANONYMOUS FUNCTION----------------------------------
