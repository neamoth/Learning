console.log('Exercise Name: Editable div using javaScript');

// creating the div
let divElem = document.createElement('div');

// creating the text for the div

let val = localStorage.getItem('text');
let text;
if(val == null){
text = document.createTextNode('This is my element. Click it for edit');
} else{
    text = document.createTextNode(val);
}
// setting attributes id, class, style
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid black; width:100px; margin: 25px; padding: 34px;');
divElem.appendChild(text);

// Grabing the container and first div
let container = document.querySelector('.container');
let first = document.getElementById('first');
// adding the element before element with id first
container.insertBefore(divElem, first);

// setting it as editable

divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {

        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    // listen for the blur event for textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', elem.innerHTML);
    })
})