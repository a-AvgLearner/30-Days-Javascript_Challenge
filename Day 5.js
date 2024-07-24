//Function Declaratiopn

//Task 1

function check( x){
if(x%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}
}

check(8)


//Task 2

function calc(z){
    return z*z;
}

console.log(calc(8))


//Function Expresssion

//Task 3
function whoMax(x,y){
    if(x>y){
        console.log("Greater Number",X)
    }else{
        return console.log(y);
    }
}

whoMax(8,9)

//Task 4
function concat(x,y){
    return console.log(x+y);
}

concat("Roh","an")



//Arrow Functions

//Task 5
const sum = (x,y) =>{
     return x+y;
}

console.log(sum(5,7));



//Task 6

const checkString =(x,y) =>{


    for(let i=0; i<x.length; i++){
if(x[i]==y){
   return true;
}

} return false;

}

console.log(checkString("Rohan", 'k'));


//Function Parameter and default value

function product(x, y=6){

console.log("Product is",x*y);

}
product(8);



//HIGHER ORDER fUNCTIONS

function greet(n){
    while(n>=0){
    console.log("Hello",n)
    n--;
}
}

greet(5)
