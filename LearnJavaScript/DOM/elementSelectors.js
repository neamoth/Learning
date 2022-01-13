console.log("Element Selectors");
/*
There is two types of element selectors

     1.single
     2.multiple
*/

// single element selectors 
let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
// console.log(element);

let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
// console.log(sel);

// multiple element selector


let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// elems = document.getElementsByTagName('p');
// elems = document.getElementsByTagName('h1')
;
Array.from(elems).forEach(element => {
    // console.log(element);
    // element.style.color = 'blue';
})
elems = document.getElementsByTagName('a');
console.log(elems)