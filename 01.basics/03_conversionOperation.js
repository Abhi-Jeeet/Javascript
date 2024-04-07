let score=33
//console.log(typeof(score));

//converting to string

let numberToString=String(score);//first letter i.e S should be capital
//console.log(typeof(numberToString));
//console.log(numberToString);

let score1="33";
//console.log(typeof(score1));
//converting to number

let stringToNumber=Number(score1);//first letter i.e N should be capital
//console.log(typeof(stringToNumber));
//console.log(stringToNumber);

let naam="33abc"
//console.log(typeof(naam));
let naamkanumber=Number(naam);
//console.log(typeof(naamkanumber));
//console.log(naamkanumber);

/*
"33"-> 33
"33abc"-> NaN(Not a number)
true=>1; false->0
*/
//converting to Boolean

let isLoggedIn="abhijeet"

let booleanloogedin=Boolean(isLoggedIn);
// console.log(typeof(isLoggedIn));
// console.log(booleanloogedin);

//1->true, 0->false
//""->false
//"abhijeet"->true

/********************Operations ************/

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);

let str1="abhijeet ";
let str2="Kumar";
let str3=str1+str2;
console.log(str3);

console.log("1"+1+1);//if there is string in the first, it will be conactenated
//output--> 111
console.log(1+1+"1");//if there is string in the last then the first one will be added and then concatenated with the last one
//output--> 21