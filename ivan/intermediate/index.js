// Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

// Martin = 76

// Thomas = 85

// Klaus = 65

// Maria = 93

// David = 81

// Based on their points, output the grade, according to the following table:

// < 60 F

// < 70 D

// < 80 C

// < 90 B

// < 100 A

// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).

let Martin = ["Martin", 76];

let Thomas = ["Thomas", 85];

let Klaus = ["Klaus",65];

let Maria = ["Maria", 93];

let David = ["David", 81];
let studentsArray = [Martin, Thomas, Klaus, Maria, David] ;
  // console.log(studentsArray);
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i][1] < 60) {
      console.log(studentsArray[i][0]+ "'s grade is F")
    } else if (studentsArray[i][1] >= 60 && studentsArray[i][1] < 70) {
      console.log(studentsArray[i][0]+ "'s grade is D")
    } else if (studentsArray[i][1] >= 70 && studentsArray[i][1] < 80) {
      console.log(studentsArray[i][0]+ "'s grade is C")
    } else if (studentsArray[i][1] >= 80 && studentsArray[i][1] < 90) {
      console.log(studentsArray[i][0]+ "'s grade is B")
    } else if (studentsArray[i][1] >= 90 && studentsArray[i][1] < 100) {
      console.log(studentsArray[i][0]+ "'s grade is A")
    } 
    
  }
  let grades = []
  let sum = 0
  let message = "Average grade of the class is"
  for (let i = 0; i < studentsArray.length; i++) {
      grades.push(studentsArray[i][1]); 
  };
  // console.log(grades);

  for (let number of grades) {
    sum += number;
};
  // console.log(sum);

  let averageclass = sum / grades.length;
  // console.log(averageclass);

  if (averageclass < 60) {
      console.log(message + " F")
     } else if (averageclass >= 60 && averageclass < 70) {
      console.log(message + " D")
    } else if (averageclass >= 70 && averageclass < 80) {
      console.log(message + " C")
     } else if (averageclass >= 80 && averageclass < 90) {
      console.log(message + " B")
    } else if (averageclass >= 90 && averageclass < 100) {
      console.log(message + " A")
    } 

// Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
    
for (let i = 1; i <= 100; i++)
{
  if ( i % 3 == 0 && i % 5 == 0 ) {
    console.log ("FizzBuzz" );
  } else if ( i % 3 == 0 ) {
    console.log ( "Fizz" );
  } else if ( i % 5 == 0 ) {
    console.log ("Buzz" );
  } else {
    console.log (i );
  }
}
