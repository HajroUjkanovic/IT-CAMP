// Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

// 1. innerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda

// 3. Alert() - Upozorenje korisniku:

// alert("Jos jedan nacin prikazivanja poruke.");

// 4. console.log() - Prikazivanje nekih informacija u konzoli. Najcesce koriscen metod.

console.log("Poruka u konzoli");

// JavaScript nazivi promenljivih //

// Ime promenljive u JavaScruptu mora poceti:
// 1. Velikim ili malim slovom (A-Z ili a-z);
// 2. $(dollar znak);
// 3. _(donja crta);

// Broj mora biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

//  JavaScript je case sensitive (razliku velika i mala slova)!!!!

a = 10;
// console.log(A); error - A is not defined
console.log(a); // 10

// Zapisivanje promenljivih koje sadrze 2 ili vise reci:

// vecernji termin nije ispravan nacin da pravimo razmak
vecernji_termin = 19.3; // ispravan nacin zapisivanja promenljive - underscore
VecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive -  upper Camel case (pascal case)
vecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive. Najcesce koriscen nacin zapisivianja promenljive u JavaScriptu - Lower camel case

// deklaracija     i      inicijalizacija
// Postoje 4 nacina za deklarisanje promenljive u JavaScriptu:

// 1. Koriscenjem var rezervisane reci (keyword). Vise je ranije bila koriscena (dok nismo dobili nove dve)

var a; // deklarisanje promenljive (obezbedjivanje lokacijske memorije za promenljivu a)
a = 10; //  inicijalizacija promenljive (dodeljivanje vrednosti vec deklarisanoj promeljivoj a)

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju :
var a = 10;

// 2. Koriscenjem let rezervisane reci (keyword). Let koristiomo najvise kad hocemo da deklarisemo neku promeljivu koja ce da bude izlozena da joj se menja vrednost

// let b;  deklarisanje promenljive b
// b = 14; inicijalizacija promeljive b

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju :
let b = 14;
console.log(b);

// 3. Koriscenjem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promenljive cije se vrednosti nece menjati.

// Nije moguca posebna deklaracija i inicijalizacija za promenljive definisane preko const keyword
// const c;
// c = 20

const c = 20;
console.log(c);

//  4. Koriscenjem nicega.
d = 5;
console.log(5);

// Varijable (promeljive ) u JavaScirptu predstavljaju kontejnere za skladistenje vrednosti.
