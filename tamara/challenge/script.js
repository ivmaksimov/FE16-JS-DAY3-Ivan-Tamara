var students = ["John", "Jane", "Mary", "Lucas", "Jack"];
var mathGrades = [70, 85, 65, 30, 100];
var result = prompt("type your name");
if (students.includes(result)) {
    document.write(students[0] + " has reached " + mathGrades[0] + " points in Math this season.")
} else {
    document.write("You are not on the list.")
}