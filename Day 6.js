//Array creation and access

//Task 1

const arr =[1,2,3,4,5]

console.log(arr)

//Task 2

console.log(arr[0])
console.log(arr[4])


//Array methods
arr.push(9)

console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(77)
console.log(arr)




//Array Methods - Map Filter Reduce

const newArr = arr.map((x)=>{
    return x*2;
})

console.log(newArr);



const newArr2 = arr.filter ((x)=>
    x%2==0 
);

console.log(newArr2)


const sum = arr.reduce((x,y) => {
 return   x+=y;
})

console.log(sum)



arr.forEach ((x)=>{
    console.log(x," ");
})

