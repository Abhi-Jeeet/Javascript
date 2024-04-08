// primitive

//7 types: String, Number, Boolean, Null, Undefined, Symbol
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail; //output->undefined

const id=Symbol("123")
const anotherId= Symbol("123")
console.log(id===anotherId);

const bigNumber = 435343536353n


//Reference(Non primitive)
//Array, Objects, Functions

const heroes=["shaktiman","nagraj","doga"]//arrays
let myObj={
    name: "abhijeet", //objects
    age:18,
}

const myFunction =function(){
    console.log("Hello world");
    //typeof(function)-->object function
}