/* Schnick, Schnack, Schnuck - einfaches Schere, Stein, Papier - Spiel in JavaScript/HTML */
/* ====================================================================================== */

/* Funktionsblock */
/* -------------- */

/* vergleich vergleicht die Eingaben und gibt den Gewinner zurück */

var vergleich = function (auswahl1, auswahl2) {
    if (auswahl1 === auswahl2) {
        return "Unentschieden!";
    } else if (auswahl1 === "Stein") {
        if (auswahl2 === "Schere") {
            return "Stein gewinnt";
        } else {
            return "Papier gewinnt!";
        }
    } else if (auswahl1 === "Papier") {
        if (auswahl2 === "Stein") {
            return "Papier gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    }
    else if (auswahl1 === "Schere") {
        if (auswahl2 === "Stein") {
            return "Stein gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    }
};

/* Hauptteil */
/* --------- */

var auswahl = prompt("Bitte Schere, Stein oder Papier eingeben:");
var computerAuswahl = Math.random();
if (computerAuswahl < 0.34) {
	computerAuswahl = "Stein";
} else if(computerAuswahl <= 0.67) {
	computerAuswahl = "Papier";
} else {
	computerAuswahl = "Schere";
} 

alert(vergleich(auswahl, computerAuswahl));