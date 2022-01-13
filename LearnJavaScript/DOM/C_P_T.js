console.log("Children, Parents & Traversing in DOM")

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType); //This is for comment Type

/*
node Type:
    1. Element
    2. Attribute
    3.Text Node
    8. Comment
    9.Document
    10. DocType
*/
console.log(cont.childNodes);
console.log(cont.children);

let container = document.querySelector('div.container');
console.log(container.children[2].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);
console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);
console.log(container.nextElementSibling.nextElementSibling);
