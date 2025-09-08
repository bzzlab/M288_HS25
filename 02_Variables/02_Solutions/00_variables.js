/*
Übung: LU02.A02 - Variablen und Deklarationen
 */

/*
Übung 1: Deklarieren Sie Variablen für folgende Informationen:
    Ihren Namen (als Text, String)
    Ihr Alter (als Number)
    Ihre Lieblingsfarbe (als String)
Überlegen Sie sich: Verwenden Sie let oder const?
*/

const name1 = "Anna"; 
let alter1 = 18; 
const lieblingsfarbe1 = "Blau";

const name2 = "Max";
let alter2 = 19;
const lieblingsfarbe2 = "Gelb";


console.log("Name1:", name1, "Name2:" name2);
console.log("Alter1:", alter1);
console.log("Lieblingsfarbe1:", lieblingsfarbe1);


/*
Übung 2:  Rechnen mit Variablen

Deklarieren Sie zwei Variablen x und y mit Zahlenwerten. 
Berechnen Sie mit diesen Variablen die Summe, Differenz, das Produkt und den Quotienten.
Geben Sie diese Werte in der Konsole aus.
*/

// Variablen deklarieren und initialisieren
let x = 12;
let y = 4;

let summe = x + y;
let differenz = x - y;
let produkt = x * y;
let quotient = x / y;


console.log("Summe:", summe);
console.log("Differenz:", differenz);
console.log("Produkt:", produkt);
console.log("Quotient:", quotient);

/*
Übung 3:
*/

{
    var a = 1;          // mit var deklariert → auch ausserhalb sichtbar
    let b = 2;          // mit let deklariert → nur im Block sichtbar
    const c = 3;        // mit const deklariert → nur im Block sichtbar

    console.log(a,b,c);
}

console.log("a ausserhalb vom Block:",a);
console.log("b ausserhalb vom Block:",b);
console.log("c ausserhalb vom Block:",c);