/* Schnick, Schnack, Schnuck - einfaches Schere, Stein, Papier - Spiel in JavaScript/HTML */
/* ====================================================================================== */

/* Funktionsblock */
/* -------------- */

/* vergleich vergleicht die Eingaben und gibt den Gewinner zurück */

var vergleich = function (auswahl1, auswahl2) {
	auswahl1 = auswahl1.toLowerCase().trim();
	auswahl2 = auswahl2.toLowerCase().trim();
    if (auswahl1 === auswahl2) {
        return "Unentschieden!";
    } else if (auswahl1 === "stein") {
        if (auswahl2 === "schere") {
            return "Stein gewinnt";
        } else {
            return "Papier gewinnt!";
        }
    } else if (auswahl1 === "papier") {
        if (auswahl2 === "stein") {
            return "Papier gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    } else if (auswahl1 === "schere") {
        if (auswahl2 === "stein") {
            return "Stein gewinnt!";
        }
        else {
            return "Schere gewinnt!";
        }
    } else {
    	return "Falsche Eingabe!?"
    }
};

/* Hauptteil */
/* --------- */

var auswahl = prompt("Bitte Schere, Stein oder Papier eingeben:");
var computerAuswahl = Math.random();
if (computerAuswahl < 0.34) {
	computerAuswahl = "stein";
} else if(computerAuswahl <= 0.67) {
	computerAuswahl = "papier";
} else {
	computerAuswahl = "schere";
} 

alert("Der Computer hatte " + computerAuswahl + ". " + vergleich(auswahl, computerAuswahl));
