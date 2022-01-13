console.log('creating, removing and Replacing in DOM');

let element = document.createElement('li');
// crating text with text nodes
let text = document.createTextNode('This is a text nodes');
element.appendChild(text);

element.className = 'child';
element.id = 'childul';
element.setAttribute('title' , 'mytitle')
// Creating text manually
element.innerHTML = '<b>This is a manual text</b>';
// element.innerText = '<b>This is a manual text</b>';
let ul = document.querySelector('ul.dreams');
ul.appendChild(element);
// console.log(element);
console.log(ul);

let element2 = document.createElement('h3');
element2.id = 'elem2';
element2.className = 'elem2';

let tNode = document.createTextNode('This is a tNode Heading');
element2.appendChild(tNode);
element.replaceWith(element2);
// replacing child element
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('ful'));

myul.removeChild(document.getElementById('rul'))

// we can remove, check Attributes