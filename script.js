const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((Element) => {
    Element.addEventListener('click',
    keypress(Element.attributes["data-key"].value));
});

function keypress(key) {
    console.assert(key);
}