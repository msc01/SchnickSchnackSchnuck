var userChoice = prompt("Bitte Schere, Stein oder Papier eingeben:");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Stein";
} else if(computerChoice <= 0.67) {
	computerChoice = "Papier";
} else {
	computerChoice = "Schere";
} 

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "Unentschieden!";
    } else if (choice1 === "Stein") {
        if (choice2 === "Schere") {
            return "Stein gewinnt";
        } else {
            return "Papier gewinnt!";
        }
    } else if (choice1 === "Papier") {
        if (choice2 === "Stein") {
            return "Papier gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    }
    else if (choice1 === "Schere") {
        if (choice2 === "Stein") {
            return "Stein gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    }
};

alert(compare(userChoice, computerChoice));