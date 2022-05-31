//ex1

var randomNumbergenerator = (min, max) => {return(Math.floor(Math.random() * (max - min + 1) + min));}
var randomNumber=randomNumbergenerator(-5,25);

if (randomNumber >-5 && randomNumber <11) {
    console.log("The weather is cold.")
} else{
    console.log("The weather is moderate.")
}
console.log(randomNumber)


//ex2

let numbers=[1,7,-3,9];
let highestNumber = Math.max(...numbers)

console.log(highestNumber);

//ex 3



