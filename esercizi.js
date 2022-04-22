// esercizio 1
// fare un ciclo che parta da 0 e arrivi fino a 100
// ad ogni giro stampare il valore di i
// e stampare FIZZ se i è divisibile per 3, e BUZZ se i è divisibile per 5
// e FIZZBUZZ se i è divisibile sia per 3 che per 5


for (let i = 0; i < 101; i++) {
    console.log("i è uguale a " + i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 === 0){
        console.log("FIZZ");
    } else if (i % 5 === 0){
        console.log("BUZZ");
    }
}


for (let i = 0; i < 101; i++) {
    
    const isDivisibilePerTre = i % 3 === 0;
    const isDivisibilePerCinque = i % 5 === 0;

    if (isDivisibilePerTre && isDivisibilePerCinque) {
        console.log(i, "FIZZBUZZ");
    }else if (isDivisibilePerTre) {
        console.log(i, 'FIZZ');
    }else if (isDivisibilePerCinque) {
        console.log(i, 'BUZZ');

    }
}

// esercizio 2
// creare un programa che stampi a console questa scacchiera:
// # # # #
//  # # # # 
// # # # # 
//  # # # # 
// # # # # 
//  # # # # 
// # # # # 
//  # # # #

// for (let i = 0, s = "# # # #"; i < 8; i++) {
//     if (i % 2 === 0) {
//     console.log(" " + s);
//     } else console.log(s);
// }

// console.log("# # # #\n # # # #\n# # # # #\n # # #\n # # # #\n# # # # ");
// console.log(
// `# # # #
//  # # # #
// # # # # 
//  # # # #
// # # # #
//  # # # #`);




// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log("# # # #")
//     } else{
//         console.log(" # # # #")
//     }
// }
    


// con la griglia righe e colonne

// for (let r = 0; r < 8; r++) {
//     let stringaDiRiga = "";
//     for (let c = 0; c < 8; c++) {

//         const isRigaPari = r % 2 === 0;
//         const isColonnaPari = c % 2 === 0;

//         if (isRigaPari && isColonnaPari) {
//             stringaDiRiga = stringaDiRiga + "#";
//         } else if (!isRigaPari && !isColonnaPari){
//             stringaDiRiga = stringaDiRiga + "#";
//         } else {
//             stringaDiRiga = stringaDiRiga + " ";
//         }
//     }
//     console.log(stringaDiRiga);
// }



// ancora piu furbo

// for (let r = 0; r < 8; r++) {
//     let stringaDiRiga = "";

// for (let c = 0; c < 8; c++) {

//     const sommaDiRigaEColonna = r + c;
//     const isSommaPari = sommaDiRigaEColonna % 2 === 0;
//     if (isSommaPari) {
//         stringaDiRiga = stringaDiRiga + '#';
//     } else {
//         stringaDiRiga = stringaDiRiga + ' ';
//     }
// }

// console.log(stringaDiRiga);
// }



// ancora piu semplificato

// for (let r = 0; r < 8; r++) {
//     let stringaDiRiga = "";

// for (let c = 0; c < 8; c++) {

//     if (r % 2 === c % 2) {
//         stringaDiRiga = stringaDiRiga + '#';
//     } else {
//         stringaDiRiga = stringaDiRiga + ' ';
//     }
// }

// console.log(stringaDiRiga);
// }



// esercizio 3
// creare un programa che stampi a console questa configurazione:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0, s = "#"; i < 8; i++) {
    console.log(s)
    s = s + "#"
}


// esercizio 4
// creare un programa che stampi a console questa configurazione:
//     #
//    ###
//   #####
//  #######
// #########

let s = "#";
let t = "    ";
for (let i = 0, j = 3; i < 5; i++, j--) {
    console.log(t + s)
    s = s + "##"
    t = t.substring(0, j);
}


//scrivere un ciclo for che scriva a console i numeri da 10 a 50

//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128

//scrivere un ciclo for che scriva a console i numeri da 100 a 0

//scrivere un ciclo for che sommi i numeri da 0 a 100

//ripetere gli stessi esercizi con il ciclo while e do...while

//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'
//nella finestra di dialogo 

// esercizio 5
// ciclo for i numeri da 10 a 50

// for (let i = 10; i < 51; i++) {
//     console.log(i);
// }

//esercizio 6
// da 8 a 128 numeri pari 

// for (let i = 8; i < 129; i+=2) {
//     console.log(i);
// }

//esercizio 7

// for (let i = 100; i > -1; i--) {
//     console.log(i);
// }

//esercizio 8

// let risultato = 0;

// for (let i = 0; i < 101; i++) {
//     console.log("risultato prima della somma " + risultato);
//     console.log("i " + i);
//     risultato = risultato + i;
//     console.log("risultato dopo la somma " + risultato);
    
// }
// console.log("il risultato finale è " + risultato)

//esercizio 9

// let counter = 10

// while (counter < 51) {
//     console.log(counter);
//     counter++;

// }

// let counter1 = 10;

// do{
//     console.log(counter1)
//     counter1++;
// } while (counter1 <=50)


//esercizio 10

// let counter1 = 8;
// do {
//     console.log(counter1)
//     counter1= counter1 + 2;
// } while (counter1 < 129);


// let counter = 101;

// while (counter > 0) {
//     counter--;
//     console.log(counter);
// }

// oppure

// let counter = 100;
// while (counter > -1) {
//     console.log(counter);
//     counter--;
// }

// let counter2 = 101;
// do {
//     counter2 = counter2 - 1;
//     console.log(counter2);
// } while (counter2 > 0);


// let counter3 = 100;
// do {
//     console.log(counter3);
//     counter3 = counter3 - 1;
// } while (counter3 > -1);


// let result = 0;
// let counter = 1;

// while (counter <=100) {
//     // result += counter;
//     result = result + counter;
//     counter++;
// }
// console.log(result);


// let result1 = 0;
// let counter1 = 1; 

// do {
//     result1 += counter1;
//     counter1++;
// } while (counter1 <=100);

// console.log(result1);




while (prompt ('scrivi "esci" per uscire dal ciclo')!=='esci'){}


// let exit = prompt('inserire "esci":');
// while (true) {
//     if (exit === "esci") {
//         break;
//     }
// }


// while (true) {
//     let exit = prompt('inserire "esci":');
//     if (exit === "esci") {
//         break;
//     }
// }

