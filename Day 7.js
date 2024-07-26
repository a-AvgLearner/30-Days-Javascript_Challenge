// Object Creation and access

//Task 1

const book = {
    title : "Hawking Life",
    author: "Stephen Hawking",
    year : "1990" 
}

console.log(book)

//Task 2

console.log(book.author,",",book.title)


//Object Methods

//TAsk 3

const book2 = {
    title : "Hawking Life",
    author: "Stephen Hawking",
    year : "1990",
    
     bookTitle : function () {
         return this.title;
    },

    bookAuthor : function (){
        return this.author;
    }

}


console.log(book2.bookAuthor, book2.bookTitle())




//Task 4
const book3 = {
    title : "Dhoni Life",
    author: "MSD",
    year : "2000" ,

    getUpdatedYear : function(year){
        return year;

    }
}

console.log(book3.getUpdatedYear(2024))


//Nested objects

//Task 5

const library = {

book1 : {
    title : "John Nash",
    year: "1950"
},

book2 : {
    title: "Sachin tendulkar",
    year: "2010"
}

}

console.log(library)

//TASK 6

console.log(library.book1.title)
console.log(library.book1.year)
console.log(library.book2.title)
console.log(library.book2.year)


// THis Keyword

//TASK 7

const book5 = {
    title : "Dhoni Life",
    author: "MSD",
    year : "2000" ,

    getUpdatedYear : function(){

       
         return   this.year + this.title;
    }
}

console.log(book5.getUpdatedYear())



// Object Iteration

//TAsk 8

for ( const i in library ){
    console.log(i);
}

for ( const i in book5 ){
    console.log(i);
}


const objKey = Object.keys(book5);

console.log(objKey)
const objvalue = Object.values(book5);

console.log(objvalue)