// challenge 1: Calculate Your Current Age!

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
    };
        
        var h3 = document.createElement("h3");
        var answer = document.createTextNode("You Are " + actualAge + " Years Old as of Today!");

        h3.setAttribute("id", "ageToday") // will add into html as "<h1 id="ageInDays"></h1>
        h3.appendChild(answer);

        if (document.getElementById("result").children.length == 0) {
            document.getElementById("result").appendChild(h3);
        }
    
};

document.getElementById("year").onkeydown = function (event) {
    if (event.keyCode === 13) {
        ageToday();
    }
};

function clearFields() {
    document.getElementById("ageToday").remove();
    document.getElementById("dob").reset();
};