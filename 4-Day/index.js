
//----------------------------------------Day-4------------------------------------------------------------------

//------------------------1.Do the below programs in anonymous function------------------------

//-------------------a.Print odd numbers in an array By Anonymous function---------------------

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

//----------------------------- By IIFE (Imediate invoke function)--------------------------------
(function () {
  for(var i=0;i<a_question.length;i++) {
      if(a_question[i]%2==1) {
         console.log( "IIFE :", a_question[i])
      }
  }
})();

//------------------------------------------------------------------------------------------------------

//-------------- -------b.Convert all the strings to title caps in a string array------------------------------

//---------------------------------------ANONYMOUS FUNCTION--------------------------

var b_question=["html","css","javascript","react"]

var title_Cap=function(){

  var changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
      return res[0].toUpperCase() + res.substring(1).toLowerCase()
  })
  console.log("Anonymous Function :",changedData)
}

title_Cap();

//------------------------------- By IIFE (Imediate invoke function)-----------------------------

(function () {

  var changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
    return res[0].toUpperCase() + res.substring(1).toLowerCase()
})

console.log("IIFE :",changedData)
})();

//-----------------------------------------------------------------------------------------------------

//------------------------------- c.Sum of all numbers in an array --------------------------------------------

//---------------------------------------ANONYMOUS FUNCTION--------------------------

var c_question=[1,3,5,4,3]

var sum=function(){

  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log( "Anonymous Function :",ans)
}

sum();

//---------------------------------- By IIFE (Imediate invoke function)----------------------------

(function() {

  var ans=0
  for(var i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log("IIFE :",ans)

})();

//------------------------------------------------------------------------------------------------------

//------------------------------- D.Return all the prime numbers in an array------------------------

//---------------------------------------ANONYMOUS FUNCTION----------------------------

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

 //--------------------------------- By IIFE (Imediate invoke function)----------------------------

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

//-------------------------- E.Return all the palindromes in an array -------------------------------------

//---------------------------------------ANONYMOUS FUNCTION--------------------------

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


 //---------------------------------- By IIFE (Imediate invoke function)-------------------------


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

//-------------------------F.Return median of two sorted arrays of the same size-------------------------------

//--------------------------------------ANONYMOUS FUNCTION----------------------------------

let f_question1=[1,3,4,2]
let f_question2=[5,2,6,8]

let median=function(){

  //combine both array and sort
  let sortedArray=[...f_question1,...f_question2].sort()
   // This calulation help us to find the middle value of an array
  let middleNum=sortedArray.length/2
  let median = (sortedArray[middleNum-1]+sortedArray[middleNum])/2
  
  return median
}
 let ans= median()
 console.log("Anonymous Function :",ans);

 // ------------------------------By IIFE (Imediate invoke function)---------------------------

 let IIFE_Median=(function(){

    //combine both array and sort
  let sortedArray=[...f_question1,...f_question2].sort()
  // This calulation help us to find the middle value of an array
 let middleNum=sortedArray.length/2
 let median = (sortedArray[middleNum-1]+sortedArray[middleNum])/2

 return median

 })()
 console.log("IIFE :",IIFE_Median)

 //-----------------------------------------------------------------------------------------------------------

 //--------------------------------G.Remove duplicates from an array------------------------------

 //---------------------------------------ANONYMOUS FUNCTION----------------------------------------

 let G_question=[10,5,20,4,3,5]

 let find_Duplicate=function(){
   
    let removed=[]
    G_question.forEach((value)=>{
        if(!removed.includes(value)){
           removed.push(value)
        }
    })

  console.log("Anonymous Function :",removed)

 }
find_Duplicate();

//-----------------------------------IIFE (Imediate invoke function)-------------------------------

(function(){

  let removed=[]
    G_question.forEach((value)=>{
        if(!removed.includes(value)){
           removed.push(value)
        }
    })

  console.log("IIFE :",removed)

})()

//----------------------------------------------------------------------------------------------------------

//-----------------------------------H.Rotate an array by k times--------------------

//---------------------------------------ANONYMOUS FUNCTION--------------------------

let h_question=[1,3,5,7,9]
let k=2;

let rotate_K=function(){

  let length=h_question.length
// This Hold the rotated values
let rotated_array=[]
// This loop help us to capture K time roatated element and store
for(let i=k;i>=1;i--){
  rotated_array.push(h_question[length-i])

}
// This loop help to store the balance value
for(let i=0;i<length-k;i++){
  rotated_array.push(h_question[i])

}
console.log("Anonymous Function :",rotated_array)

}
rotate_K();

//--------------------------------------IIFE (Imediate invoke function)----------------


(function(){

  let length=h_question.length
  // This Hold the rotated values
  let rotated_array=[]
  // This loop help us to capture K time roatated element and store
  for(let i=k;i>=1;i--){
    rotated_array.push(h_question[length-i])
  
  }
  // This loop help to store the balance value
  for(let i=0;i<length-k;i++){
    rotated_array.push(h_question[i])
  
  }
  console.log("IIFE :",rotated_array)
})();

//-------------------------------------1. QUESTION END HERE ---------------------------------------------------------------------------

//----------------------------2. Do the below programs in arrow functions.------------------------------------------

//--------------------------------a. Print odd numbers in an array-----------------------------


// same question which is used for Anonymous & IIFE 
// Question Line = 6
let odd_Arrow=()=>{

  for(var i=0;i<a_question.length;i++) {
    if(a_question[i]%2==1) {
       console.log( "Arrow function :", a_question[i])
    }
}

}
odd_Arrow()

//---------------------------------------------------------------------------------------------------------

//-----------------------B.Convert all the strings to title caps in a string array----------------------

// same question which is used for Anonymous & IIFE 
// Question Line = 31

let title_Cap_Arrow=()=>{

  let changedData=b_question.map((res)=>{
    // Here it will return the Each element First index into Capital
      return res[0].toUpperCase() + res.substring(1).toLowerCase()
  })
  console.log("Arrow Function :",changedData)

}
title_Cap_Arrow()

//--------------------------------------------------------------------------------------------------------

//-------------------------------------C.Sum of all numbers in an array-------------------------------

// same question which is used for Anonymous & IIFE 
// Question Line = 56

let sum_Arrow=()=>{
  
  let ans=0
  for(let i=0;i<c_question.length;i++){
    ans+=c_question[i]
  }
  console.log( "Arrow Function :",ans)

}
sum_Arrow()

//--------------------------------------------------------------------------------------------------------

//---------------------------------D.Return all the prime numbers in an array--------------------------

// same question which is used for Anonymous & IIFE 
// Question Line = 84

let prime_Arrow=()=>{

  let prime_data=[] // store final prime number
  let check_isPrime=0 // checking flag for prime number
  
  for(let i=0;i<d_question.length;i++) {
    //after each itertaion restart the flag
    check_isPrime=0
    // here each num will devide with each number time
    for(let j=1;j<=d_question[i];j++) {
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

console.log("Arrow Function :",prime_Arrow())

//---------------------------------------------------------------------------------------------------------

//---------------------------------E.Return all the palindromes in an array---------------------

// same question which is used for Anonymous & IIFE 
// Question Line = 141

let palindrome_Arrow=()=>{

  let palindrome="" // variable for capture Individual Palidromes
  let palindrome_array=[] //Array to club the Individual Palindromes

  for(let i=0;i<e_question.length;i++){
    //Each outer Loop we need to refresh the variable to store new element
    palindrome=""
        // Reverse each element in an array to Identify Palindrome
        for(let j=e_question[i].length-1; j>=0;j--){
          palindrome+=e_question[i][j]
         
        }
        //Verify the normal element and reversed element are same
        if(palindrome==e_question[i]){
            palindrome_array.push(e_question[i])
        }

  }
  return palindrome_array

}

console.log("Arrow Function",palindrome_Arrow())


//------------------------------------------DAY-4 TASK END----------------------------------------------------------