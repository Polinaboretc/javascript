const numeroInStringa = prompt ('inserisci il numero');

const numero = parseFloat(numeroInStringa);

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerCinque = numero % 5 === 0;

if (isDivisibilePerTre && isDivisibilePerCinque) {
    console.log("FIZZBUZZ");
} else if (isDivisibilePerCinque){
    console.log("FIZZ");
} else if (isDivisibilePerCinque){
    console.log("FIZZ");
}

let result = '';

if (isDivisibilePerTre) {
    result = result + 'FIZZ';
}

if (isDivisibilePerCinque) {
    result = result + 'BUZZ';
}
console.log(result);



let es = 5
// es = es +8;
es += 8;


let i = 0;
i = i +1;
i += 1;
i++;

i--;