//---------------------------------------DAY-6-TASK-----------------------------------------------------------

//-------------------------------Write a “person” class to hold all the details.-------------------------------
class Person{
    constructor(name,age){
       this._name=name
       this._age=age
    }

    getName(){
    console.log(this._name)

    }
    getAge(){
        console.log(this._age)
    }
    getAllData(){
        console.log(this._name)
        console.log(this._age)
    }
}

let Obj=new Person("Vicky","23")
Obj.getAllData()

//-----------------------------------------------------------------------------------------------------------

//----------------------------write a class to calculate the Uber price.----------------------------------
class UberPrice {  
    constructor(price,percent){
       this._price=price
       this._percent=percent
    }

    getPrice(){
       let percentage =(this._price*this._percent)/100
       let fare=this._price-percentage
       console.log(`Total fare is ${fare}`)

    }

}

let obj1=new UberPrice(2000,10)

obj1.getPrice()