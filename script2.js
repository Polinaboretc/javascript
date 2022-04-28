//chiedo all'utente di inserire un numero
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numero è divisibile per entrambi, scrivo in console FIZZBUZZ


// string

console.log('ciao mondo!');

// alert("Ciao mondo");

console.log("Ciao Cinzia");

console.log("7");

console.log("andrea" + "è" + "in" + "ritardo")

// number

console.log(7);

console.log('somma', 10 + 5);

console.log("sottrazione", 10 - 5);

console.log("moltiplicazione", 10 * 5);

console.log("divisione", 10 / 5);

console.log("potenza", 5 ** 2);

console.log("modulo", 5 % 2)

console.log("Math round", Math.round(3.56))

// complicazioni

console.log("ciao" + 7);

console.log("7" + 7);

console.log(7 + "7");


// boolean

console.log(true);

console.log(false);

// tavola verità del NOT
console.log("non true", !true);
console.log("non false", !false);

// tavola verità dell'AND
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);

// tavola verità dell'OR
console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);


// operatore di ugualianza
console.log("true === true", true === true);
console.log("false === false", false === false);

console.log("true === false", true === false);
console.log("false === true", false === true);

console.log("'pippo' === 'pippo'", 'pippo' === 'pippo')
console.log("'pippo' === 'pluto'", "pippo" === "pluto");

console.log("7 === 7", 7 === 7);
console.log("7 === 12", 7 === 12);

// complicazioni

console.log("'7' === 7", '7' === 7);
console.log("'7' == 7", "7" == 7);



// variabili
// let

let pippo = 7;

console.log(pippo);

console.log(pippo + 3);

let pluto = 5;

console.log(pippo + pluto);

let paperino = "ciao";

console.log(paperino);

console.log(paperino + pluto);

pluto = "mondo";

console.log(paperino + pluto);

//var

var paperoga = 12;

var paperone = 15;

console.log(paperoga + paperone);

console.log(paperino + paperoga);


// const

const topolino = "viva";

const topolina = "javascript";

console.log(topolino + topolina);


// errore di riassegnazione di una costante
// topolina = "l'Italia";
// console.log(topolino + topolina);

const stringa1 = prompt("inserisci la prima stringa");
const stringa2 = prompt("inserisci la seconda stringa");

// console.log(stringa1 + stringa2);

alert(stringa1 + stringa2);

 115  
script2.js
@@ -0,0 +1,115 @@
// CONDIZIONALI (IF)

// const numeroInStringa = prompt("inserisci il numero");

// const numero = parseFloat(numeroInStringa);

// const isEven = numero % 2 === 0;

// const isOdd = numero % 2 === 1;


// if (isEven) {
//     console.log("il numero è pari");
// } else if (isOdd){
//     console.log("il numero è dispari");
// } else {
//     console.log("il numero non è ne pari ne dispari");
// }



// if (isEven) {
//     console.log("il numero è pari");
// } else {
//     console.log("il numero è dispari")
// }


//CALCOLATRICE

// const primoNumeroInStringa = prompt("inserisci il primo numero")

// const primoNumero = parseFloat(primoNumeroInStringa);

// const secondoNumeroInStringa = prompt("inserisci il secondo numero")

// const secondoNumero = parseFloat(secondoNumeroInStringa);

// const operazione = prompt("inserisci l'operazione, puoi inserire: '+', '-', 'x', ':'");

// const isAddizione = operazione === "+";

// const isSottrazione = operazione === "-";

// const isMoltiplicazione = operazione === "x";

// const isDivisione = operazione === ":";

// if (isAddizione) {
//     const risultato = primoNumero + secondoNumero;
//     console.log("risultato: " + risultato);
// } else if(isSottrazione){
//     const risultato = primoNumero - secondoNumero;
//     console.log("risultato: " + risultato);
// } else if (isMoltiplicazione) {
//     const risultato = primoNumero * secondoNumero;
//     console.log("risultato: " + risultato);
// } else if(isDivisione){
//     const risultato = primoNumero / secondoNumero;
//     console.log("risultato: " + risultato);
// } else {
//     console.log("operazione non ammessa")
// }



const numero = 6;

const isDivisibilePerDue = numero % 2 === 0;

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerQuattro = numero % 4 === 0;


// if (isDivisibilePerDue) {
//   console.log("il numero è divisibile per 2");
// } else if (isDivisibilePerTre) {
//   console.log("il numero è divisibile per 3");
// } else if (isDivisibilePerQuattro) {
//   console.log("il numero è divisibile per 4");
// } else {
//   console.log("il numero non è divisibile per nessuno dei divisori selezionati");
// }

// if (isDivisibilePerDue) {
//   console.log("il numero è divisibile per 2");
// }
// if (isDivisibilePerTre) {
//   console.log("il numero è divisibile per 3");
// }
// if (isDivisibilePerQuattro) {
//   console.log("il numero è divisibile per 4");
// }

if (isDivisibilePerDue || isDivisibilePerTre || isDivisibilePerQuattro){

  if (isDivisibilePerDue) {
    console.log("il numero è divisibile per 2");
  }
  if (isDivisibilePerTre) {
    console.log("il numero è divisibile per 3");
  }
  if (isDivisibilePerQuattro) {
    console.log("il numero è divisibile per 4");
  }

} else {
    console.log(
      "il numero non è divisibile per nessuno dei divisori selezionati"
    );
}

