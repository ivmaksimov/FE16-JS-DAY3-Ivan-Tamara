let title= document.getElementById("title")
var students = ["John", "Jane", "Mary", "Lucas", "Jack"];
        var mathGrades = [70, 85, 65, 30, 100];
        var result = prompt("type your name");
        if (students.includes(result)) {
            title.innerText = students[students.indexOf(result)] + " has reached " + mathGrades[students.indexOf(result)] + " points in Math this season."
        } else {
            title.innerText = "You are not on the list."
        }
        if (mathGrades[students.indexOf(result)] < 60) {
            title = document.getElementById("title").style.color = "red";
        }else if (mathGrades[students.indexOf(result)] <= 69) {
            title = document.getElementById("title").style.color = "yellow";
        }
        else if (mathGrades[students.indexOf(result)] <100) {
            title = document.getElementById("title").style.color = "green";
        }
        else if (mathGrades[students.indexOf(result)] == 100) {
            title = document.getElementById("title").style.color = "blue";
        }
        
        