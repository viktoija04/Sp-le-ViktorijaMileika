const buttoneElements = document.querySelectorAll('button');

buttoneElements.forEach((eliment) => {
    eliment.addEventListener('click' , 
    keypress(element.atributes["data-key"].value));
});

function keypress(key) {
console.log(key);

}