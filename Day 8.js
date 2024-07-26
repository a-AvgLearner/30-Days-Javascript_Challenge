// Template Literal


//TASK 1

const name = "Hitesh Sir "

const age = 34;

const LiteralString = `I am ${name} and I am ${age} year old`
console.log(LiteralString)

//Task 2

const hero = `Hitesh sir`;
const nature =`Lovely`;

const sentence = ` How ${hero} is ${nature} everyone knows`

console.log(sentence)

//Destructing

//TAsk 3

const arr = [5,6,7,8,9]
console.log(arr);

const [ele1,ele3,ele2] = [...arr];

console.log(ele1,ele3,ele2)


//Task 4



//  Activity 3
//  spread and Rest operator
//  task 5
const arr1 = [1,2,3,4,5];
const arr2 = [11,22,33,...arr1,44,55,66];
console.log(arr2);

//Task 6

const [first, ...rest] = [2,3,4,5,6,7];
console.log(first);
console.log(rest);

//task 7

function product(a,b=7){
    return a*b;
}

console.log(product(10))