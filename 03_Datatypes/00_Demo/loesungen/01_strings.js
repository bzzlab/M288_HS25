/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
/* ***************
 1) Definition von Variable "city" mit dem Wert "Zürich"
 und Konstante "country" mit dem Wert "Schweiz"
*/
let city = 'Zürich';
const country = 'Schweiz';
console.log(city);
console.log(country);


/* ***************
 2) Definition von Variable "location", welcher der zusammengesetzte
 Wert der zwei Variablen "city" und "country" ist
*/
let location = city + ', ' + country;
console.log(location);


/* ***************
  3) neu soll in Variable city "Bern" stehen und die variable location ebenfalls aktualisiert werden.
*/
city = "Bern";
location = city + ', ' + country;
console.log(location);


/* ***************
 4) neues Land und neue Stadt setzen und variable location aktualisieren
*/
city = "Roma";
//country = "Italia"; //TypeError: Assignment to constant variable.
const country2 = "Italia";
location = city + ', ' + country2;
console.log(location);


/* ***************
 5) String konkatinieren mittels "Template literals (Template strings)"
*/

// herkömmliche Variante: 
const alter = 20;
console.log('Max Muster wurde ' + alter + ' Jahre alt.');

// Verwenden von Template literals
console.log(`Max Muster wurde ${alter} Jahre alt.`);