const buttoneElements = document.querySelectorAll('button');
let row = 1;
let letter =1;
const wordElements = document.querySelectorAll('.word-row');

buttoneElements.forEach((eliment) => {
    eliment.addEventListener('click' , function() {
        keypress(eliment.atttributes["data-key".value])
    });
});


function populateWord(key) {
    wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
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

Permissions-Policy: interest-cohort=(false)