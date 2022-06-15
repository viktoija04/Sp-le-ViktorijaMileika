const buttoneElements = document.querySelectorAll('button');
let row = 1;
let letter =1;
const wordForTheDay ='Shout';
const wordElements = document.querySelectorAll('.word-row');

buttoneElements.forEach((eliment) => {
    eliment.addEventListener('click' , function() {
        keypress(eliment.atttributes["data-key".value])
    });
});

function populateWord(key) {
    if (letter < 6) {
    wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
    letter += 1;
    }
}

function checkWord() {
    const letterElements = wordElements[row - 1].querySelectorAll('.word');

    letterElements.forEach((element) => {
        const wordForTheDay ='Shout';
        const indexOfLetterInWordOfTheDay = wordForTheDay.toLowerCase().indexOf(element.innerText.toLowerCase());

        if (indexOfLetterInWordOfTheDay === index) {
            element.classList.add('word-green');
        } else if(indexOfLetterInWordOfTheDay > 0) {
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey');
        }
    });
}

function enterWord() {
    if (letter < 6) {
    alert ('not enough letters');
    } else {
        checkWord();
    }
}

function keypress(key) {
if (key,toLowerCase() === 'enter') {
   // enterWord();
} else if (key,toLowerCase() === 'del') {
   // deleteLetter();
} else {
   populateWord(key);
}

}

