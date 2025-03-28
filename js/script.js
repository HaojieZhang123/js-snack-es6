// snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.
console.log('snack 1');

// creazione array di oggetti bikes
const bikes = [
    {
        name: 'bici 1',
        weight: 10
    },
    {
        name: 'bici 2',
        weight: 20
    },
    {
        name: 'bici 3',
        weight: 5
    }
]

// ricerca bici con peso minore
let bikeMin = bikes [0];

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].weight < bikeMin.weight) {
        bikeMin = bikes[i];
    }
}

// Stampo risultato in console
console.log(`La bici con peso minore è ${bikeMin.name}: ${bikeMin.weight} kg`);

console.log('---------------------------------------------------------------');

console.log('snack 2');
// snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creazione array di oggetti squadre
const teams = [
    {
        name: 'Atalanta',
        points: 0,
        foul: 0
    },
    {
        name: 'Bologna',
        points: 0,
        foul: 0
    },
    {
        name: 'Cagliari',
        points: 0,
        foul: 0
    },
    {
        name: 'Como',
        points: 0,
        foul: 0
    },
    {
        name: 'Empoli',
        points: 0,
        foul: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        foul: 0
    },
    {
        name: 'Genoa',
        points: 0,
        foul: 0
    },
    {
        name: 'Hellas Verona',
        points: 0,
        foul: 0
    },
    {
        name: 'Inter',
        points: 0,
        foul: 0
    },
    {
        name: 'Juventus',
        points: 0,
        foul: 0
    },
    {
        name: 'Lazio',
        points: 0,
        foul: 0
    }
]
