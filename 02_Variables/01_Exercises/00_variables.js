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
let name = ____ ;    // String


/*
Übung 2:  Rechnen mit Variablen

Deklarieren Sie zwei Variablen x und y mit Zahlenwerten. 
Berechnen Sie mit diesen Variablen die Summe, Differenz, das Produkt und den Quotienten.
Geben Sie diese Werte in der Konsole aus.
*/

// Variablen deklarieren und initialisieren
let x 

let summe = x + y;

console.log("Summe:", summe);

/*
Übung 3:
*/

{
    var a = 1;        // mit var deklariert → auch außerhalb sichtbar
    let b = 2;
    const c = 3;

    console.log(a,b,c);
}

console.log("a ausserhalb vom Block:",a);
console.log("b ausserhalb vom Block:",b);
console.log("c ausserhalb vom Block:",c);