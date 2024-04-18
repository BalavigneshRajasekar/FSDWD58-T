
const userName=(Name,Callback)=>{
    setTimeout(()=>{
         Callback(Name)
    },2000)
}
const userAge=(Name,age,Callback)=>{
  setTimeout(()=>{
    Callback(`UserName is ${Name} and Age is ${age}`)
  })
}

const userDesignation=(userdetail,Designation,Callback)=>{
    setTimeout(()=>{
        Callback(`${userdetail} designation is ${Designation}`)
    })

}

const Ans=userName('vicky',(Name)=>{
    console.log(`UserName is ${Name}`)

    userAge(Name,21,(userNamewithAge)=>{ 
       console.log(userNamewithAge)
       
       userDesignation(userNamewithAge,'Engineer',(finalUserDetail)=>{
          console.log(finalUserDetail)
       })
    })
})