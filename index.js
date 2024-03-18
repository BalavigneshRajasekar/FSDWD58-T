var data=7
var flag=0
for(var i=1;i<=data;i++){
 if(data%i==0){
 flag++
 }
}
if(flag==2){
console.log('yes')
}else{
    console.log('no')
}
console.log(flag)