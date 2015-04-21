/* Schnick, Schnack, Schnuck - einfaches Schere, Stein, Papier - Spiel in JavaScript/HTML */
/* ====================================================================================== */

/* Funktionsblock */
/* -------------- */

/* "vergleich" vergleicht die Eingaben und gibt das gewinnende Element zurück */

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

var erzeugeComputerAuswahl = function () {
	var zufallsZahl = Math.random();
	if (zufallsZahl < 0.34) {
		return "stein";
	} else if(zufallsZahl <= 0.67) {
		return "papier";
	} else {
		return "schere";
	} 	
}

/* Hauptteil */
/* --------- */

var spielerAuswahl = prompt("Bitte Schere, Stein oder Papier eingeben:");
var computerAuswahl = erzeugeComputerAuswahl();
var meldung = "Du hast " + spielerAuswahl.substr(0, 1).toUpperCase() + spielerAuswahl.substr(1) + " und der Computer hat " + computerAuswahl.substr(0, 1).toUpperCase() + computerAuswahl.substr(1) + ".\n";
meldung = meldung + vergleich(spielerAuswahl, computerAuswahl);
alert(meldung);