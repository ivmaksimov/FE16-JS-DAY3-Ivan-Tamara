//ex1

var students = [
  ['Martin', 76],
  ['Thomas', 85],
  ['Klaus', 65],
  ['Maria', 93],
  ['David', 81]
];

var Avgmarks = 0;

students.forEach((students) => {
  let grade = students[1];
  if (grade < 60) {
    console.log(students[0] + " has " + students[1] + " points and grade : F");
  } else if (grade < 70) {
    console.log(students[0] + " has " + students[1] + " points and grade : D");
  } else if (grade < 80) {
    console.log(students[0] + " has " + students[1] + " points and grade : C");
  } else if (grade < 90) {
    console.log(students[0] + " has " + students[1] + " points and grade : B");
  } else if (grade < 100) {
    console.log(students[0] + " has " + students[1] + " points and grade : A");
  }
});

for (var i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}

//ex 2 fizzbuzz single line output for loop

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

//fizzbuzz2 array output while loop

let output = [];
let count = 1;

function fizzBuzz() {
  while (count <= 100) {
  if (count % 15 === 0) {
      output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++
}
console.log(output);
}

fizzBuzz();

//ex3


const loops = ["*", "**", "***", "****", "*****"];

for (let i of loops) {
  console.log(i);
}

//fibonacci

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0, 1];

    for (var i = 2; i<n; i++)

    output.push(output[output.length-2] + output[output.length-1]);
  }
  return output;
}
output= fibonacciGenerator(100);
console.log(output)