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




// function divide(array, divider = 3) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const risultato = array[i] / divider;
//         newArray.push(risultato)
//     }
//     return newArray;
// }
// console.log(divide(testArray1, 3)) /// un clone con tutti i valori diviso 3



function divide(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const risultato = array[i] / divider;
        newArray.push(risultato)
    }
    return newArray;
}
console.log(divide(testArray1)) /// un clone con tutti i valori diviso 2



function filterByMax(array, max = 10) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i < max) newArray.push(i);          
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




function reverse(array) {
    const newArray = [];
    for (const i of array) {
        newArray.unshift(i);
    }
     return newArray;   
    }

console.log(reverse(testArray2))




function flatArray(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++){			//array.length mi da la lunghezza dell'array
        for(let j = 0; j < array[0].length; j++){	//array[0].lenght mi da la lunghezza di un elemento dell'array.
            newArray.push(array[i][j]);
        }
    }
    return newArray;
}

console.log(flatArray(testArray3)) /// [1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88];