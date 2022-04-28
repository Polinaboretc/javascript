const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1, 1.45, 200000, -23.9];

const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

const testArray3 = [[1, 4, 8, 12],
                    [34, 2.1, -23, 4],
                    [1.1, -2000, 2, 88]];




function min(array) {
    let minElement = array[0];

    for (const iterator of array) {
        if (minElement > iterator){
            minElement = iterator;
        }
    }
    return minElement;
}
console.log(min(testArray1)) /// -123




function sumEven(array) {
    let totale = 0;

    for (const iterator of array) {
        if (iterator % 2 === 0){
            totale = totale + iterator;
        }
    }
    return totale;
}
console.log(sumEven(testArray1)) /// 200008




function moreThan5Chars(array) {
    
    const arrayMoreThan5 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5){
            arrayMoreThan5.push(array[i]);
        }
    }
    return arrayMoreThan5;
}

console.log(moreThan5Chars(testArray2)) /// ['giallo, arancione, magenta']




function firstUpperCase(array) {
    
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newWord = '';
        newWord = array[i].charAt(0).toUpperCase();
      newWord += array[i].slice(1);
      newArray.push(newWord);
    }
    return newArray;
}
console.log(testArray2) /// ['Rosso', 'Verde', 'Giallo', 'Arancione', 'Magenta', 'Blu']

// oppure
// const firstChar = element[0];
// const firstCharUpperCase = firstChar.toUpperCase();
// const remainingElement = element.substring(1);
// const newElement = firstCharUpperCase + remainingElement
//newArray.push(newElement)
// console.log(firstUpperCase(testArray2))

// oppure
// newArray.push(element[0].toUpperCase() + element.substring(1));




function superSumAll(array) {
    let risultato = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < 4; j++) {
          console.log(array[i][j]);
        risultato = risultato + array[i][j];
      }
    }
  return risultato; 
}
console.log(superSumAll(testArray3)) /// somma di tutti


// oppure

// for (let i = 0; i < array.length; i++) {
// const riga = array[i];
// for (let j = 0; j < 4; j++) {
// const element = riga[j];
// result = result + element;




function divide(array, divider = 2) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const risultato = array[i] / divider;
        newArray.push(risultato)
    }
    return newArray;
}
console.log(divide(testArray1, 3)) /// un clone con tutti i valori diviso 3
console.log(divide(testArray1)) /// un clone con tutti i valori diviso 2




function filterByMax(array, max) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < max) {
        newArray.push(element); 
        }         
    }
    return newArray;
    }
    
console.log(filterByMax(testArray1, 10)) /// un clone con tutti i valori minori di 10




function reverse(array) {
    const newArray = [];
    for (const i of array) {
        newArray.unshift(i);
    }
     return newArray;   
    }

console.log(reverse(testArray1)) /// mi da l'array con i valori invertiti
console.log(reverse(testArray2))

// oppure 
// for (let i = array.length - 1; i>= 0; i--){
//     const element = array[i];
//     newArray.push(element)
// }

// oppure
// return array.reverse()




function flatArray(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        const row = array[i];			
        for(let j = 0; j < row.length; j++){
            const element = row[j];
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(flatArray(testArray3)) /// [1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88];





//////// esercizi casa


const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34];

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

const testArray6 = [true, "pippo", 204, "verde", 3000, 100, false];

//_____________________________________________________________________________________________


// filtrare testArray4 in modo che rimangano solo i numeri positivi


function isElementPositive(number) {
    if (number > 0) {
        return number > 0;
    }
}

console.log("solo positivi", testArray4.filter(isElementPositive));
// const filtredArray4 = testArray4.filter((e) => e > 0)
// console.log('solo positivi lambda', filtredArray4)






// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3

function isDivisibilePer3(number) {
    return number % 3 === 0;
}

console.log("solo numeri divisibili per 3", testArray4.filter(isDivisibilePer3));
console.log("solo divisibili per 3 lambda", testArray4.filter((number) => number % 3 === 0));






// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3 e 4

function isDivisibilePer3E4(number) {
    return number % 3 === 0 && number % 4 === 0;
}

// oppure
// const isDivisibilePerTre = number % 3 === 0
// const isDivisibilePerQuattro = number % 4 === 0
// if (isDivisibilePerTre && isDivisibilePerQuattro) {
//     return true;
// }   else {
//     return false;
//     }

console.log("numeri divisibili per 3 e per 4", testArray4.filter(isDivisibilePer3E4));
console.log("numeri divisibili per 3 e per 4 lambda", testArray4.filter((number) => (number % 3 === 0) && (number % 4 === 0)))






// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere


function shorter(element) {
    if (element.length < 6) {
        return true;
        } else {
            return false;
        }
}
    
console.log("piu corta di 6", testArray5.filter(shorter));
console.log("piu corta di 6 lambda", testArray5.filter((e) => e.length < 6))





// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n'


function containLetterN(element) {
  if (element.includes('n')) {
  return true;
  } else {
      return false;
  }
}

console.log("contiene n", testArray5.filter(containLetterN));
console.log("contiene n lambda", testArray5.filter((e) => e.includes('n')));






// filtrare testArray6 in modo che rimangano solo i numeri

function isNumber(element) {

    if (typeof element === 'number') {
    return true;
    } else {
    return false;
    }
}   

console.log("solo i numeri dell'array", testArray6.filter(isNumber));
console.log("solo i numeri dell'array lambda", testArray6.filter((e) => typeof e === 'number'));






// mappare testArray4 dividendo tutti i numeri per 3

function divideByTre(element) {
    const elementDividedBy3 = element / 3;

    return elementDividedBy3;

}

function divideFor3(number) {
    return number / 3;
}

console.log("tutti i numeri divisi per 3", testArray4.map(divideByTre));
console.log("tutti i numeri divisi per 3 lambda", testArray6.map((e) => e / 3 ));





// mappare testArray4 facendo la radice quadrata di tutti i numeri

function squareRoot(element) {

    const sqRootElement = Math.sqrt(element)
    return sqRootElement;
}

console.log("radice quadrata", testArray4.map(squareRoot));
console.log("radice quadrata", testArray4.map((e) => Math.sqrt(e)));





// mappare testArray4 sommando uno solo ai numeri dispari

function addOneToOdd(number) {
    
    if (number % 2 === 1 || number % 2 === -1) {
        const newNumber = number + 1;
        return newNumber;
    } else {
        return number;
    }
}

console.log("più 1 ai numeri dispari", testArray4.map(addOneToOdd));

// operatore ternatio - cosa succede se è vero, cosa succede se è falso
console.log("più 1 ai numeri dispari lambda", testArray4.map((e) => e % 2 === 0 ? e : e + 1));





// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola

function strange(element) {

    const firstChar = element[0];
    const firstCharUpper = firstChar.toUpperCase();

    const lastChar = element[element.length - 1]
    const lastCharUpper = lastChar.toUpperCase();

    const remainingString = element.substring(1, element.length - 1);
    const newElement = firstCharUpper + remainingString + lastCharUpper;
    return newElement;
}

console.log("la prima e l'ultima maiuscola", testArray5.map(strange));
console.log("la prima e l'ultima maiuscola lambda",testArray5.map((e) => e[0].toUpperCase() + e.substring(1, e.length - 1) + e[e.length - 1].toUpperCase()))





// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa

function appendLength(element) {

    const newElement = element + element.length;
    return newElement;
}

console.log("aggiungi lunghezza", testArray5.map(appendLength));
console.log("aggiungi lunghezza lambda", testArray5.map((e) => e + e.length));





/// filtrare tutti gli elementi di testArray4 in modo che rimangano quelli a indice pari
/// aggiungere parametri sia element che index per lavorare su l'index


function filterByIndex(element, index) {
    
    if (index % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("tieni indice pari", testArray4.filter(filterByIndex));
console.log("tieni indice pari lambda", testArray4.filter((e, i) => i % 2 === 0));



/// mappare testArray4 in modo che ad ogni elemento venga sommato (se esiste) il successivo 


const test = [3, 1, 5]
//indice      0, 1, 2


function addNext(element, index, array) {
    
    const nextIndex = index +1;
    if (nextIndex < array.length) {
        const nextElement = array[nextIndex];
        const result = element + nextElement;
    return result;
    } else {
        return element;
    }
} 


console.log("somma", testArray4.map(addNext));
console.log("somma lambda", testArray4.map((e, i, a) => (i + 1 < a.length) ? e + a[i + 1] : e ));
