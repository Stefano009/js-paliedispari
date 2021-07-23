// Palidroma
// Chiedere all’utente di inserire una parola
var checkWord = document.getElementById('checkWord');
var userWord = [];
var wordArray = [];
var suppArray = [];
checkWord.addEventListener('click',
    function(){
        userWord = document.getElementById('userWord').value;
        document.getElementById('wordChecked').innerHTML = '<h3>' + palindromeChecker(userWord) + '</h3>';


    }
)



function palindromeChecker(wordArray) {
        wordArray = userWord.split('');
        j = wordArray.length - 1;
        console.log(j);
        for (i = 0; i < wordArray.length; i++) {
            suppArray[j] = wordArray[i];
            j--;
        }
        wordArray = wordArray.join('');
        suppArray = suppArray.join('');
        console.log(suppArray);
        console.log(wordArray);
        if (wordArray == suppArray) {
            wordArray = [];
            suppArray = [];
            return ('la parola è palindroma');

        } else {
            wordArray = [];
            suppArray = [];
            return ('la parola non è palindroma');
        }
    }    
// Creare una funzione per capire se la parola inserita è palindroma
