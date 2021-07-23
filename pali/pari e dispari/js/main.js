// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sumNumber = document.getElementById('sumNumber');
var deleted = document.getElementById('delete');
var cpuNumber = 0;
var wordArray = [];
var suppArray = [];
var oddEven;
var reset;
var flag = false;

sumNumber.addEventListener('click',
    function(){
        let userNumber = parseInt(document.getElementById('userNumber').value);
        console.log(userNumber);
        if (userNumber > 0 && userNumber <=5)
            console.log('bella possiamo procedere')
        else
        {
            console.log('number not valid, please retry');
            document.getElementById('number').innerHTML = '<h2>' + 'il numero ' + userNumber + ' non è compreso fra 1 e 5' + '</h2>';
        }
        // Sommiamo i due numeri
        userNumber += rndNumbers(cpuNumber);
        console.log(userNumber);
        document.getElementById('number').innerHTML = '<h3>' + oddEven(userNumber) + '</h3>';
    }
)
deleted.addEventListener('click',
    function() {
        document.getElementById('number').innerHTML = '';

    }
)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rndNumbers(cpuNumber) {
    var cpuSumNumber = Math.floor(Math.random() * 5) + 1;
    console.log(cpuSumNumber);
    return cpuSumNumber;
    
}
// console.log(rndNumbers(cpuNumber));


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddEven(userNumber) {
    if (userNumber % 2 == 0)
        oddEven = "pari";
    else 
        oddEven = 'dispari';

    return oddEven;
}



// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.