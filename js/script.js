// snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.

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