var students = ["John", "Jane", "Mary", "Lucas", "Jack"];
var mathGrades = [70, 85, 65, 30, 100];
var result = prompt("type your name");
if (students[0].includes(result)) {
    document.write(students[0] + " has reached " + mathGrades[0] + " points in Math this season.")
} else if (students[1].includes(result)) {
    document.write(students[1] + " has reached " + mathGrades[1] + " points in Math this season.")
} else if (students[2].includes(result)) {
    document.write(students[2] + " has reached " + mathGrades[2] + " points in Math this season.")
} else if (students[3].includes(result)) {
    document.write(students[3] + " has reached " + mathGrades[3] + " points in Math this season.")
} else if (students[4].includes(result)) {
    document.write(students[4] + " has reached " + mathGrades[4] + " points in Math this season.")
} else {
    document.write("You are not on the list.")
}