/*global document */

//document.write("<h1>Hello JavaScript</h1>");
document.getElementById("test").innerHTML = "Hello JavaScript From H1: " + 10 * 20 / 100;

// Variables & DataType
/*var string, boolean, number, object,
    myAge, //undefined
    string = "",
    boolean = false,
    number = 10,
    object = {
        namOfObject: "test",
        name: "Ahmed",
    },
    array = ["name", "ali"];


var enterInput = document.getElementById("enter").value,
    f100 = 100,
    a650 = 650;
function result() {
    enterInput / a650 * f100;
}*/



function cUsToEl() {
    "use strict";
    var amount = document.getElementById('dollar').value,
        result = amount * 3.75,
        massageD = document.getElementById('result');

    if (amount === "") {
        massageD.innerHTML = "Oops!" + "<br>" + "<br>" + "You Should Type Your Dollar In The Field!!"
    } else if (isNaN(amount)) {
        massageD.innerHTML = "Oops!" + "<br>" + "<br>" + "You Should Type Number In The Field!!"
    } else if (amount === "0") {
        massageD.innerHTML = "Oops!" + "<br>" + "<br>" + "This Field cant calc Zero!!"
    } else if (amount < 0) {
        massageD.innerHTML = "Oops!" + "<br>" + "<br>" + "The Value Must Not Be nagtive Number!!"
    } else if (amount >= 1000000) {
        massageD.innerHTML = "Oops!" + "<br>" + "<br>" + "The Value Not Accpet Number Apove 1millios!!"
    } else {
        massageD.innerHTML = "This Value Equel: <span style='color:blue'>(</span> " + result + " <span style='color:blue'>)</span> " + "Dollar."
    }

}

function calc() {
    "use strict";
    var ageValue = document.getElementById('enterYourAge').value,
        hoursInYear = 365 * 24,
        cal22 = ageValue * hoursInYear,
        massage = document.getElementById("print");
    
    if (ageValue == "") {
        massage.innerHTML = "Oops!" + "<br>" + "<br>" + "You Should Type Your Age In The Field!!"
    } else if (isNaN(ageValue)) {
        massage.innerHTML = "Oops!" + "<br>" + "<br>" + "You Should Type Number In The Field!!"
    } else if (ageValue === "0") {
        massage.innerHTML = "Oops!" + "<br>" + "<br>" + "This Field cant calc Zero!!"
    } else if (ageValue < 0) {
        massage.innerHTML = "Oops!" + "<br>" + "<br>" + "The Value Must Not Be nagtive Number!!"
    } else if (ageValue >= 1000000) {
        massage.innerHTML = "Oops!" + "<br>" + "<br>" + "The Value Not Accpet Number Apove 1millios!!"
    } else {
        massage.innerHTML = "Your Age by Days is: <span style='color:blue'>(</span> " + cal22 + " <span style='color:blue'>)</span> day."
    }
}
