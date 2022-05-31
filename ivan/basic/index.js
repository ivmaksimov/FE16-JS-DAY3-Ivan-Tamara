// ex 1 | Temperature v1.0
// Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

// Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .

function getRandumNumber(min, max) {
  return  Math.floor(Math.random() * (max - min - 5) + min);
};

let weatherTemp1 = getRandumNumber(-5, 25);

if (weatherTemp1 < 11) {
  console.log(weatherTemp1 + " °C")
  console.log("The weather is cold")
} else {
  console.log(weatherTemp1 + " °C")
  console.log("The weather is moderate")
}

// ex 2 | Highest value in an array
// Create a program to find the highest value in an array. 

// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

  let numbersArray = [2, 8, 6, 3, 9];

  let max = Math.max(...numbersArray);
  console.log(max)

//   ex 3 | Temperature v2.0
// Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.
  
  let text = document.getElementById("text");
  let image = document.getElementById("image");
  let weatherTemp = getRandumNumber(-5, 50);
  let cold = "pictures/cold.jpg";
  let hot = "pictures/hot.jpg";
  let moderate = "pictures/moderate.jpg";
if (weatherTemp < 11) {
  image.src = cold;
  text.innerHTML = ("The weather is cold today. The air temperature it is " + weatherTemp + " °C");
} else if (weatherTemp > 32) {
  image.src = hot;
  text.innerHTML = ("The weather is hot today. The air temperature it is " + weatherTemp + " °C");
} else {
  image.src = moderate;
  text.innerHTML = ("The weather is moderate today. The air temperature it is " + weatherTemp + " °C");
};




