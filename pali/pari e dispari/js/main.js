// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sumNumber = document.getElementById('sumNumber');
var deleted = document.getElementById('delete');
var pari = document.getElementById('pari');
var dispari = document.getElementById('dispari');
var cpuNumber = 0;
var wordArray = [];
var suppArray = [];

pari.addEventListener('click',
    function(){
        let userNumber = parseInt(document.getElementById('userNumber').value);
        console.log(userNumber);
        if (userNumber > 0 && userNumber <=5)
            console.log('bella possiamo procedere')
        else
        {
            console.log('number not valid, please retry');
            document.getElementById('number').innerHTML = '<h2>' + 'il numero ' + userNumber + ' non è compreso fra 1 e 5' + '</h2>';
            return
        }
        // Sommiamo i due numeri
        userNumber += rndNumbers(cpuNumber);
        console.log(userNumber);
        if (oddEven(userNumber) == 'pari')
            document.getElementById('number').innerHTML = '<h3>'+ userNumber + ' l\'utente ha vinto' + '</h3>';
        else
            document.getElementById('number').innerHTML = '<h3>' + userNumber + ' l\'utente ha perso' + '</h3>';
    }
)
dispari.addEventListener('click',
    function(){
        let userNumber = parseInt(document.getElementById('userNumber').value);
        console.log(userNumber);
        if (userNumber > 0 && userNumber <=5)
            console.log('bella possiamo procedere')
        else
        {
            console.log('number not valid, please retry');
            document.getElementById('number').innerHTML = '<h2>' + 'il numero ' + userNumber + ' non è compreso fra 1 e 5' + '</h2>';
            return
        }
        // Sommiamo i due numeri
        userNumber += rndNumbers(cpuNumber);
        console.log(userNumber);
        if (oddEven(userNumber) == 'dispari')
            document.getElementById('number').innerHTML = '<h3>' + userNumber + ' l\'utente ha vinto' + '</h3>';
        else
            document.getElementById('number').innerHTML = '<h3>' + userNumber + ' l\'utente ha perso' + '</h3>';
    }
)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rndNumbers(cpuNumber) {
    return Math.floor(Math.random() * 5) + 1;
}
// console.log(rndNumbers(cpuNumber));


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddEven(userNumber) {
    if (userNumber % 2 == 0)
        return "pari";
    else 
        return 'dispari';
}
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
