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
    
    const newArray = array;

    for (let i = 0; i < array.length; i++) {
        newArray[i].charAt(0).toUpperCase();
        
    }
    return newArray
}

testArray2 = firstUpperCase(testArray2);


console.log(testArray2) /// ['Rosso', 'Verde', 'Giallo', 'Arancione', 'Magenta', 'Blu']



function superSumAll(array) {
    
}

console.log(superSumAll(testArray3)) /// somma di tutti




function divide(array, divider) {
    
}

console.log(divide(testArray1, 3)) /// un clone con tutti i valori diviso 3

console.log(divide(testArray1)) /// un clone con tutti i valori diviso 2



function filterByMax(array, max) {
    
}

console.log(filterByMax(testArray1, 10)) /// un clone con tutti i valori minori 




function reverse(array) {
    
}


console.log(reverse(testArray1)) /// mi da l'array con i valori invertiti
console.log(reverse(testArray2))




function flatArray(array) {
    
}

console.log(flatArray(testArray3)) /// [1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88];