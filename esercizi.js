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

for (let i = 0, s = "# # # #"; i < 8; i++) {
    if (i % 2 === 0) {
    console.log(" " + s);
    } else console.log(s);
}

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

// esercizio 5
// ciclo for i numeri da 10 a 50

for (let i = 10; i < 51; i++) {
    console.log(i);
}

//esercizio 6
// da 8 a 128 numeri pari 

for (let i = 8; i < 130; i+=2) {
    console.log(i);
}

//esercizio 7