//IF-else

 let vote=12

if(vote >=18){
    console.log("start vote")
}else{
    console.log("Not to vote")
}

//nested if-else

let num1= 1000;
let num2= 200;
let num3= 35;


if(num1 > num2){
if(num1 > num3){
    console.log("greatest number is",num1)
}else{
    console.log("greatest number is",num2)
}
}
else{
    if(num2>num3){
        console.log("greatest number is",num2)
    }else{
        console.log("greatest number is", num3)
    }
}



//switch case
let date =3;

switch (date){
    case 1: {
       console.log("Monday");
}
case 2:{
   console.log("Wednesday");
}
case 3:{
   console.log( "friday");
}

default :{
 console.log("is the Day in week");
}
}


//Ternary operator

let numA =7;
numA % 2 ? console.log("ODD",numA) : console.log("EVEN",numA);

//TASK Leap Year

let year= 2021;

if(year%400==0 || (year%4==0 && year%100 !=0)){
    console.log("Leap Year");
}else{
    console.log("Not a leap year");
}

