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

    
    document.getElementById("result").value = actualAge;
    
}

document.getElementById("year").onkeydown = function (e) {
    if (e.keyCode === 13) {
    ageToday();
    }
}; 


function clearFields() {
    document.getElementById("dob").reset();
    document.getElementById("result-box").reset();
};