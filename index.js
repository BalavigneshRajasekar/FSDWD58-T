var data=["7","1 2 3 4 5 6"]
var question=data[1].split(' ')
var flag=0
var flagA=0
var index=0
for(var i=0;i<question.length;i++){
   if(i>0){
         if(question[i-1]<question[i]){
              flagA++
         }else{
            var value=i
            index= value-1

                flag++
         }
   }

}


if(flag==1){
    console.log(index)
    }else if(flag>1){
     console.log(-1)
    }else if(flagA==question.length-1){
        console.log(-1)
    }
    