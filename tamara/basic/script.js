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

let text = document.getElementById("text");
  let image = document.getElementById("image");
  let weatherTemp = randomNumbergenerator(-5, 50);
  let cold = "pics/cold.jpg";
  let hot = "pics/hot.jpg";
  let moderate = "pics/moderate.jpg";
if (weatherTemp < 11) {
  image.src = cold
  text.innerHTML = ("The weather is cold today. The air temperature it is " + weatherTemp + " °C");
} else if (weatherTemp > 31) {
  image.src=hot
  text.innerHTML = ("The weather is hot today. The air temperature it is " + weatherTemp + " °C");
} else {
  image.src=moderate
  text.innerHTML = ("The weather is moderate today. The air temperature it is " + weatherTemp + " °C");
};

