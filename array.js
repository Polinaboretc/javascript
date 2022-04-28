// const arrayOfNumbers = [1, 5, 3, 8, 6];


// arrayOfNumbers.push(9);

// arrayOfNumbers.unshift(37);

// const element = arrayOfNumbers.pop()

// console.log(element);

// const element2 = arrayOfNumbers.shift()

// console.log(element2);

// console.log(arrayOfNumbers);



// const elementInPosition2 = arrayOfNumbers[2];

// console.log(elementInPosition2);

// console.log(arrayOfNumbers [0]);

// arrayOfNumbers[4] = 666;

// console.log(arrayOfNumbers);



// ciclare l'array

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     const element = arrayOfNumbers[i];
//     console.log("l'elemento dell'array a indice " + i + " è " + element);
// }

// // zucchero sintassico

// for (const element of arrayOfNumbers) {
//     console.log("forof", element);    
// }



// trovare il numero maggiore dell'array


// const arrayOfNumbers = [1, 5, 3, 8, 6];

// function max(array) {
    
//     let selectedElement = 0;
    
//     for (const element of array) {
        
//         if (selectedElement < element) {
//             selectedElement = element;
//         }

//     }
//     return selectedElement;
// }

// console.log(max(arrayOfNumbers));



// per i numeri negativi


// const arrayOfNumbers = [-1, -5, -3, -8, -6];

// function max(array) {
    
//     let selectedElement = array[0];

//     // let selectedElement = -Infinity;

//     for (const element of array) {
        
//         if (selectedElement < element) {
//             selectedElement = element;
//         }
//     }
//     return selectedElement;
// }

// console.log(max(arrayOfNumbers));



// const arrayOfNumbers = [1, 5, 3, 8, 6];




// function cloneAndAddOneToArray(array) {

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const elementPlusOne = element + 1;
//         newArray.push(elementPlusOne);
//     }
//     return newArray;
// }
// console.log(cloneAndAddOneToArray(arrayOfNumbers));




// function findEvenNumbers(array) {

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0) {
//         newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log(findEvenNumbers(arrayOfNumbers));




// function sumAll(array) {
    
//     let risultato = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         risultato = risultato + element;
//     }
//     return risultato;
// }
// console.log(sumAll(arrayOfNumbers));




// const arrayOfStrings = ['pippo', 'pluto', 'paperino'];

// console.log(arrayOfStrings);

// function ArrayToUppercase(array) {

//     const newArray = [];

//     for (const element of array) {
//         const uppercaseString = element.toUpperCase()
//         newArray.push(uppercaseString);
//     }
//     return newArray;
// }
// console.log(ArrayToUppercase(arrayOfStrings));



// array dentro array - doppio ciclo for

// const arrayOfArray = [[2, 6, 4], 
//                       [8, 5, 1], 
//                       [9, 3, 6]];

// for (let i = 0; i < arrayOfArray.length; i++) {
//     const riga = arrayOfArray[i];
//     for (let j = 0; j < riga.length; j++) {
//         const cella = riga[j];
//         console.log(cella);
//     }
// }

// console.log(arrayOfArray)

// function cloneAndAddOneBidimensional(array) {

//     const newArray = [];
    
//     for (const riga of array) {
        
//         const newRiga = [];


//         for (const cella of riga) {
            
//             const cellaPlusOne = cella + 1;
//             newRiga.push(cellaPlusOne);
//         }

//         newArray.push(newRiga)
//     }

//     return newArray;
// }

// console.log(cloneAndAddOneBidimensional(arrayOfArray));








/////// filtering



const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];


function keepEven(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        const isElementEven = element % 2 === 0;
        
        if (isElementEven) {
            newArray.push(element);
            
        }
    }
    return newArray;
}
console.log(keepEven(testArray))



function keepGreaterThan10(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        const isGreaterThan10 = element > 10;

        if (isGreaterThan10) {
            newArray.push(element);
        }
    }
    return newArray
}
console.log(keepGreaterThan10(testArray))




// funzione di filtraggio

function filter(array, filterFunction) {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        const isElementToAdd = filterFunction(element);

        if(isElementToAdd) {
            newArray.push(element);
        }
    }
    return newArray;
}



function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
    // return number % 2 === 0;
}


function isGreaterThan10(number) {
    return number > 10;
}


function isSmallerThan10(number) {
    return number < 10;
}

console.log('my filter isEven', filter(testArray, isEven));
console.log('my filter isGreaterThan10', filter(testArray, isGreaterThan10));
console.log('my filter isSmallerThan10', filter(testArray, isSmallerThan10));
// lambda
console.log('my filter isOdd', filter(testArray, (number) => number % 2 === 1))


// oppure senza scrivere la funzione filter
console.log('javascript filter isEven', testArray.filter(isEven));
console.log('javascript filter isGreaterThan10', testArray.filter(isGreaterThan10));
console.log('javascript filter isSmallerThan10', testArray.filter(isSmallerThan10));
console.log('javascript filter isOdd', testArray.filter((number) => number % 2 === 1));






/// mapping


function addOneToAllElements(array) {
    
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];

        const newElement = element + 1;

    newArray.push(newElement)
    }
    return newArray;
}



function divideAllElements(array) {
    
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];

        const newElement = element / 2;

    newArray.push(newElement)
    }
    return newArray;
}


console.log('add One', addOneToAllElements(testArray))
console.log('divide All Elements', divideAllElements(testArray))




function map(array, mappingFunction) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];

        const newElement = mappingFunction(element);

    newArray.push(newElement)
    }
    return newArray;
}


function addOne(element) {
    return element + 1;
}



function divide(element) {
    return element / 2;
}

console.log('my map add one', map(testArray, addOne));
console.log('my map divide', map(testArray, divide));
console.log('my map square', map(testArray, (element) => element * element))


console.log('javascript map', testArray.map(addOne));
console.log('javascript divide', testArray.map(divide));
console.log('javascript square', testArray.map((element) => element * element));








const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34];

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

const testArray6 = [true, "pippo", 204, "verde", 3000, 100, false];



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
console.log("somma", testArray4.map((e, i, a) => (i + 1 < a.length) ? e + a[i + 1] : e ));





//// reducing


function sumAll(array) {

    let result = 0;
    // let result = array[0];


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        result = result + element;
    }
    return result;
}

function multiplyAll(array) {

let result = 1;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        result = result * element;
    }
    return result;
}



console.log('somma tutti', sumAll(testArray4));
console.log('multiplyAll', multiplyAll(testArray4));




const test7 = [3, 1, 5];


function reducerSumAll(previos , current) {
    
    const result = previos + current;
    return result;
}

console.log('somma tutti reduce', test7.reduce(reducerSumAll, 0));  // 0 è il valore di partenza per la somma
console.log('somma tutti reduce lambda', test7.reduce((p, c) => p + c, 0));

function reducerMultiplyAll(previos, current) {
    const result = previos * current;
    return result;
}

console.log('moltiplica tutti reduce', test7.reduce(reducerMultiplyAll, 1));  
console.log('moltiplica tutti reduce lambda', test7.reduce((p, c) => p * c, 1));





function filterHigherThan2(element) {
    if (element < 2) {
        return true;
    } else {
        return false;
    }
}

console.log('filtra con reduce', test.filter(filterHigherThan2));





function reducerSumAllEvenIndex(previos, current, index) {
    if (index % 2 === 0) {
        const result = previos + current;
        return result;
        } else {
            return previos;
        }
}


console.log('somma indice pari', test.reduce(reducerSumAllEvenIndex, 0));