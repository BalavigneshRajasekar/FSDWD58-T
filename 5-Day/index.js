const Http= new XMLHttpRequest()

Http.open("GET","./resume.json",true)

Http.onload=function(){
    if(Http.status==200){
          var resume=JSON.parse(Http.response)
          // Using Destructure To split the Object into pieces
          const{personal,education,skills,certification,work}=resume
          
          // Using for in To capture personal Details
          for(const forin in personal){
             
             if(forin=="contact"){
                   // This for help to capture contact
                   for(const key in personal[forin]){
                         console.log(key,":",personal[forin][key])
                   }

             } else{
                console.log(forin ,":",personal[forin])
             }
                         
          }
          // USing "for of" loop to iterate education
          for (const iterator of education) {
                // Using "for in" to iterate each object we got
                 for(const key in iterator){
                      console.log(key,":",iterator[key])
                }
          
            
          }
          
          // Using "for" loop to iterate skills
          for(let i=0;i<skills.length;i++){
                 // This loop help us to find the particular domain in skills
                 for(let key in skills[i]){
                       console.log(key)
                        // This loop help to find the each domain's skillset
                       for(let key1 in skills[i][key]){
                           let individual_skills= skills[i][key][key1]
                           console.log(key1,":",individual_skills.join(" "))
                       }
                 }
          }
          
          // Using for Each to capture Cerification 
            certification.forEach(element => {
                //Using for in to iterate each object we got
                 for(let key in element){
                    console.log(key,":",element[key])

                }
           });
















    }
}
Http.send()



