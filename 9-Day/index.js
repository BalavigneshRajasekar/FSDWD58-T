let data="1234"
let question=data.split('')
flag=0

for(var i=0; i<question.length; i++){
   for(var j=0;j<question.length;j++){

    if(question[i]==question[j]){
      flag++

    }
   }


}
if(flag==question.length){
  console.log('no')
}else{
  console.log('yes')
}