// /// oggetto 


const corso1 = {
    nome: 'programmatore front-end',
    ore: 300,
    terminato: false,
}

const corso2 = {
    nome: 'programmatore back-end',
    ore: 300,
    terminato: true,
}


const corso3 = {
    nome: 'programmatore back-end',
    ore: 300,
    terminato: false,
}


// const voti1 = [8, 5, 10, 9]



// const studente1 = {
//     nome: 'Mirco',
//     cognome: 'Faro',
//     eta: 28,
//     sposato: false,
//     corso: corso1,
//     voti: voti1
// }

// // array
// // const studente2 = ['Paolo', 'Fopiano', 24, false]


// console.log(studente1);  /// ottengo il valore associato al nome
// console.log(studente1.nome + ' ' + studente1.cognome);



// // const automobile1 = {
// //     modello: 'Golf',
// //     produttore: 'Volkswagen',
// //     anno: 2004,
// //     cilindrata: 2000,
// //     automatica: false,
// // }



// const voti2 = [4, 3, 8, 9]



// const studente2 = {
//     nome: 'Paolo',
//     cognome: 'Foppiano',
//     eta: 24,
//     sposato: false,
//     corso: corso1,
//     voti: voti2
// }

// console.log(studente2);



// const studenti = [studente1, studente2]
// console.log(studente1.corso.terminato);



// for (let i = 0; i < studenti.length; i++) {
//     const studente = studenti[i];
//     console.log(studente.nome + ' ' + studente.cognome);
// }



/// modellare studente con delle caratteristiche
/// variabile genere maschio femmina - fare il ciclo



const studente1 = {

    nome: 'Polina',
    cognome: 'Boretc',
    genere: 'femmina',
    eta: 27,
    citta: 'Chelyabinsk',
    sposato: false,
    corso: corso1,

}

const studente2 = { 
    nome: 'Christopher', 
    cognome: 'Limone', 
    genere : 'maschio', 
    eta: 27, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente3 = { 
    nome: 'Cinzia', 
    cognome: 'Ariotti', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente4 = { 
    nome: 'Giovanni', 
    cognome: 'Cambiaso', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente5 = { 
    nome: 'Mattia', 
    cognome: 'Dalla Mutta', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente6 = { 
    nome: 'Mirco', 
    cognome: 'Faro', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente7 = { 
    nome: 'Paolo', 
    cognome: 'Foppiano', 
    genere : 'maschio', 
    eta: 25, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente8 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
}

const studente9 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso3
} 


const studente10 = { 
    nome: 'Artem', 
    cognome: 'San Giorgio', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso2
} 

const studente11 = { 
    nome: 'Jessica', 
    cognome: 'Vitanzaq', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
} 

const studenti = [studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10, studente11]
console.log(studenti)


for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i]; 
    console.log('nome: ' + studente.nome); 
    console.log('cognome: ' + studente.cognome);
    console.log('genere: ' + studente.genere);
    console.log('eta: ' + studente.eta);
}


function filterBySex(studente) {

    const studentiM = []; 
    const studentiF = [];

    for (let i = 0; i < array.length; i++) {
        const studente = array[i]; 
        if ([studente.genere] = 'maschio') {
            studentiM.push(studente);
        } else {
            studentiF.push(studente);
        }
        
    }
}




