// challenge 1: Your Age in Days



function ageToday() {
    
    var birthMonth = document.getElementById("month").value;
    var birthDate = document.getElementById("date").value;
    var birthYear = document.getElementById("year").value;
    var currentMonth = new Date().getMonth()+1;
    var currentDate = new Date().getDate();
    var ageByYear = new Date().getFullYear()-birthYear;
    var actualAge = 0;

    if (birthMonth > currentMonth) {
        actualAge = ageByYear -1;
    }
    else if (birthMonth < currentMonth) {
        actualAge = ageByYear;
    }
    else if (birthMonth == currentMonth) {
        if (birthDate < currentDate) {
            actualAge = ageByYear -1;
        }
        else {
            actualAge = ageByYear;
        }
    }

    
    var h3 = document.createElement("h3");
    var answer = document.createTextNode("You Are " + actualAge + " Years Old as of Today!");

    h3.setAttribute("id", "ageInDays") // will add into html as "<h1 id="ageInDays"></h1>
    h3.appendChild(answer);
    document.getElementById("result").appendChild(h3);
    
};

document.getElementById("year").onkeydown = function (event) {
    if (event.keyCode === 13) {
    ageToday();
    }
}; 


function clearFields() {
    document.getElementById("ageInDays").remove();
    document.getElementById("dob").reset();
};