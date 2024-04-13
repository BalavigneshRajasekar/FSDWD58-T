
let urlData; // To store the Open windows

function openWindow(){
  let URL=document.getElementById('url').value
  if(URL){
    urlData= window.open(URL,'_blank')
  }
  else{
    alertSystem("danger","Plz add URL....")
    setTimeout(function(){
      let child =document.getElementById('child')
      child.remove()

    },5000)
  }
}

function closeWindow(){
  if(urlData){
      urlData.close()
      alertSystem("success","Tab is closed")
      urlData=null
      setTimeout(function(){
        let child =document.getElementById('child')
        child.remove()
  
      },5000)
  }
  else{
    alertSystem("warning","No tab are open to close")
    setTimeout(function(){
      let child =document.getElementById('child')
      child.remove()

    },5000)

  
  }
}


function windowStatus(){
  if(urlData){
      alertSystem("success","Window is open After 10 sec it will close")
      setTimeout(function(){
        let child =document.getElementById('child')
        child.remove()
  
      },5000)
   
      setTimeout(function(){
        urlData.close()
        urlData=null
        alertSystem("success" ,"Opend tab is closed")
         
  
      },10000)

  }
  else{

  }
}




//Function for all alert -----------------------//
function alertSystem(value,message){

let parent =document.getElementById('Alert-div')
let sibling=document.getElementById('sibling')
let child =document.createElement('div')

child.innerHTML=`<div class="alert alert-${value} "  role="alert" id="child">
${message}
</div>
<p id="anime"></p>


`


parent.insertBefore(child,sibling)

}
