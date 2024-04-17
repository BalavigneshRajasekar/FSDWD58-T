var data="1234034 4"
var question=data.split(' ')
var[a,b]=question
var flag =0
for(var i=0;i<=b;i++){
   if(a.includes(i)){
   flag++
   }
}


if(flag==(Number(b)+1)){
 console.log('yes')
}else{
    console.log('no');
}