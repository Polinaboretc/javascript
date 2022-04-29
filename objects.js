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
    nome: 'programmatore full stack',
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
    corso: {
        nome: 'Web design',
        ore: 250,
        }

}

const studente2 = { 
    nome: 'Christopher', 
    cognome: 'Limone', 
    genere: 'maschio', 
    eta: 27, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2,
} 

const studente3 = { 
    nome: 'Cinzia', 
    cognome: 'Ariotti', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente4 = { 
    nome: 'Giovanni', 
    cognome: 'Cambiaso', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente5 = { 
    nome: 'Mattia', 
    cognome: 'Dalla Mutta', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente6 = { 
    nome: 'Mirco', 
    cognome: 'Faro', 
    genere: 'maschio', 
    eta: 29, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente7 = { 
    nome: 'Paolo', 
    cognome: 'Foppiano', 
    genere: 'maschio', 
    eta: 25, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente8 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
}


const studente9 = { 
    nome: 'Artem', 
    cognome: 'San Giorgio', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso2
} 

const studente10 = { 
    nome: 'Jessica', 
    cognome: 'Vitanza', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
} 

const studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10]

function printSingleStudent(student) {
    console.log(student.nome + ' ' + student.cognome); 
    console.log('Età: ' + student.eta);
    console.log('corso: ' + student.corso.nome);    
    console.log('----------------------');   
}



// for (let i = 0; i < studenti.length; i++) {
//     const studente = studenti[i]; 
//     console.log('nome: ' + studente.nome); 
//     console.log('cognome: ' + studente.cognome);
//     console.log('genere: ' + studente.genere);
//     console.log('eta: ' + studente.eta);
//     console.log('città: ' + studente.citta);
//     console.log('sposato: ' + studente.sposato);
//     console.log('corso: ' + studente.corso.nome);    
//     console.log('----------------------'); 

// }



//// scheda con tutti gli studenti

function printStudents(studentArray) {
    for (let i = 0; i < studentArray.length; i++) {
        const studente = studentArray[i]; 
        console.log('nome: ' + studente.nome); 
        console.log('cognome: ' + studente.cognome);
        console.log('genere: ' + studente.genere);
        console.log('eta: ' + studente.eta);
        console.log('città: ' + studente.citta);
        console.log('sposato: ' + studente.sposato);
        console.log('corso: ' + studente.corso.nome);    
        console.log('----------------------'); 
    
    }
}


/// solo femmine

function isFemale(student) {
//     if (student.genere === 'femmina') {
//         return true;
//     } else {
//         return false;
//     }
return student.genere === 'femmina';
}

function printFemaleStudents(studentArray) {

    // const femaleStudents = [];

    // for (let i = 0; i < studentArray.length; i++) {
    //     const student = studentArray[i];

    //     if (student.genere === 'femmina') {
    //         femaleStudents.push(student)
    //     }
        
    // }


// const femaleStudents = studentArray.filter(isFemale);

const femaleStudents = studentArray.filter((s) => s.genere === 'femmina');

printStudents(femaleStudents);





    // for (let i = 0; i < studenti.length; i++) {
    //     const studente = studenti[i]; 
    //     if (studente.genere === 'femmina') {
    //     console.log('nome: ' + studente.nome); 
    //     console.log('cognome: ' + studente.cognome);
    //     console.log('genere: ' + studente.genere);
    //     console.log('eta: ' + studente.eta);
    //     console.log('città: ' + studente.citta);
    //     console.log('sposato: ' + studente.sposato);
    //     console.log('corso: ' + studente.corso.nome);    
    //     console.log('----------------------');   
    //     }
    // }
}


// printFemaleStudents(studenti);



/// solo maschi

// function printMaleStudents() {
//     for (let i = 0; i < studenti.length; i++) {
//         const studente = studenti[i]; 
//         if (studente.genere === 'maschio') {
//         console.log('nome: ' + studente.nome); 
//         console.log('cognome: ' + studente.cognome);
//         console.log('genere: ' + studente.genere);
//         console.log('eta: ' + studente.eta);
//         console.log('città: ' + studente.citta);
//         console.log('sposato: ' + studente.sposato);
//         console.log('corso: ' + studente.corso.nome);    
//         console.log('----------------------');   
//         }
//     }
// }
// printMaleStudents();




/// funzione che trova lo studente piu vecchio

function printOldestStudent(studentArray) {
    
    let oldest = studentArray[0];

    for (let i = 1; i < studentArray.length; i++) {
        const student = studentArray[i];
        if (student.eta > oldest.eta) {
            oldest = student;
        }
    }

    
    const oldest2 = studentArray.reduce((p,c) => p.eta < c.eta ? c : p);

    function reduceOldest(previous, current){
        if (previous.eta < current.eta) {
            return current;
        } else{
        return previous;
        }
    }    


    printSingleStudent(oldest)
    // console.log(oldest.nome + ' ' + oldest.cognome); 
    // console.log('Età: ' + oldest.eta);
    // console.log('corso: ' + oldest.corso.nome);    
    // console.log('----------------------');   
}

printOldestStudent(studenti);


function compareStudentsByCognome(student1, student2) {

    return student1.cognome.localeCompare(student2.cognome);

}

function compareStudentsByAge(student1, student2) {
    return student1.eta - student2.eta;
}


function compareStudentsByAgeAndCognome(student1, student2) {
    const ordine = student1.eta - student2.eta;
    if (ordine === 0) {
        return student1.cognome.localeCompare(student2.cognome);
    } else {
        return ordine;
    }
}


studenti.sort(compareStudentsByAge)
// printStudents(studenti);

console.log(studenti);