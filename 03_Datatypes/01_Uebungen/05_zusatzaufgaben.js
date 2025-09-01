/*
Zusatzaufgaben (optional):
Erraten Sie die Ausgabe aller folgenden Code-Snippets, bevor Sie sie in der Konsole ausführen.
*/

/*
Zusatzaufgabe 1: Logische Ausdrücke
*/
let x = 5;
let y = 10;
let z = 15;

console.log(`x kleiner als y UND y kleiner als z: ${x < y}`);           // erwartete Ausgabe: 
console.log(`x kleiner als y ODER y größer als z: ${y > z}`);           // erwartete Ausgabe: 
console.log(`NICHT (x größer als y): ${!(x > y)}`);                     // erwartete Ausgabe: 

/*
Zusatzaufgabe 2: Priorität von Operatoren
*/

let result1 = 10 + 5 * 2;
let result2 = (10 + 5) * 2;
let result3 = 10 / 2 + 5;
let result4 = 10 / (2 + 5);

console.log(`Ergebnis 1: ${result1}`); // erwartete Ausgabe: 
console.log(`Ergebnis 2: ${result2}`); // erwartete Ausgabe: 
console.log(`Ergebnis 3: ${result3}`); // erwartete Ausgabe: 
console.log(`Ergebnis 4: ${result4}`); // erwartete Ausgabe: 

/*
Zusatzaufgabe 3: String-Vergleiche
*/
let str1 = 'apple';
let str2 = 'banana';

console.log(`str1 gleich str2: ${str1 == str2}`);       // erwartete Ausgabe: 
console.log(`str1 ungleich str2: ${str1 != str2}`);     // erwartete Ausgabe: 
console.log(`str1 kleiner als str2: ${str1 < str2}`);   // erwartete Ausgabe: 
console.log(`str1 größer als str2: ${str1 > str2}`);    // erwartete Ausgabe: 

