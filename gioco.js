
// const vocaleScelta = prompt("ciao bimbo, scegli una vocale");

// const isA = vocaleScelta === 'a';
// const isE = vocaleScelta === 'e';
// const isI = vocaleScelta === 'i';
// const isO = vocaleScelta === 'o';
// const isU = vocaleScelta === 'u';

// if (isA) {
//    console.log('a come alce');
// } else if (isE) {
//     console.log('e come elefante');
//  }
//  else if (isI) {
//     console.log('i come istrice');
//  }
//  else if (isO) {
//     console.log('o come orso');
//  }
//  else if (isU) {
//     console.log('u come upupa');
//  }
//  else {
//     console.log('torna a studiare le vocali');
//  }



const vocaleScelta = prompt("ciao bimbo, scegli una vocale");

switch (vocaleScelta) {
    case "a":
        console.log('a come alce');
        break;
    case "e":
        console.log('e come elefante');
        break;
     case "i":
        console.log('i come istrice');
        break;
    case "o":
        console.log('o come orso');
        break;
    case "u":
        console.log('u come upupa');
        break;
    default:
        console.log('torna a studiare le vocali');
        break;
}