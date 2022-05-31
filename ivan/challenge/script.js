
let message = document.getElementById("message");


var students = ["John", "Jane", "Mary", "Lucas", "Jack"];
var mathGrades = [70, 85, 65, 30, 100];
var result = prompt("type your name");
// if (students[0].includes(result)) {
//     message.innerText = (students[0] + " has reached " + mathGrades[0] + " points in Math this season.")
    
// } else if (students[1].includes(result)) {
//     message.innerText = (students[1] + " has reached " + mathGrades[1] + " points in Math this season.")
// } else if (students[2].includes(result)) {
//     message.innerText = (students[2] + " has reached " + mathGrades[2] + " points in Math this season.")
// } else if (students[3].includes(result)) {
//     message.innerText = (students[3] + " has reached " + mathGrades[3] + " points in Math this season.")
// } else if (students[4].includes(result)) {
//     message.innerText = (students[4] + " has reached " + mathGrades[4] + " points in Math this season.")
// } else {
//     document.write("You are not on the list.")
// }


if (students.includes(result)) {
    message.innerText = (students[students.indexOf(result)]) + " has reached " +
    (mathGrades[students.indexOf(result)]) + " points in Math this season.";
    if (mathGrades[students.indexOf(result)] < 60) {
        message.style.background = "red";
    } else if (mathGrades[students.indexOf(result)] >= 60 && mathGrades[students.indexOf(result)] < 70 ) {
        message.style.background = "yellow";
    } else if (mathGrades[students.indexOf(result)] >= 70 && mathGrades[students.indexOf(result)] < 100) {
        message.style.background = "green";
    } else  {
        message.style.background = "blue";
    }
} else {
    message.innerText = "There is no result for this name. Try again later."
    message.style.background = "orange";
}

