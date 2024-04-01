//----------------------------------------DAY-7 TASK-----------------------------------------------------------

//---1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


let http= new XMLHttpRequest()
let url="https://restcountries.com/v3.1/all"
let method="GET"

http.open(method,url,true)
http.onload=function(){
   
       if(http.status==200){
        let countries=JSON.parse(http.response)
        //Get all the countries from Asia continent /region using Filter function
         let asiaContinent=countries.filter((value)=>{
            return value.region == "Asia"
        })
        console.log(asiaContinent)


        //Get all the countries with a population of less than 2 lakhs using Filter function
        let population=countries.filter((value)=>{
            return value.population < 200000
        })
        console.log(population)


        //Print the following details name, capital, flag, using forEach function
        countries.forEach((value)=> {
            console.log(`Name : ${value.name.common} , Capital : ${value.capital} , Flag : ${value.flag}`)
                
        });


        //Print the total population of countries using reduce function
       let total;
       let totalPopulation= countries.reduce((x,y)=>{
           if(x.population==undefined){
                total+=y.population
               
           }else{ // This will take the first X value and store it to total
            total=x.population
            
           }
           return total
        })
        console.log(totalPopulation)


        //Print the country that uses US dollars as currency.
        countries.forEach((value)=>{
            for(let dollar in value.currencies){
                if(dollar == "USD"){
                    console.log(`Country : ${value.name.common}, Uses ${dollar}`)

                }
            }
        })
           




       }

}

http.send()