console.log('Local and session storage in javaScript');


let vagArray = ['Tamato', 'Capsicam', 'Lau'];
// add a key value inside localstorage
localStorage.setItem('Name', 'Neamoth');
localStorage.setItem('Name2', 'Neamoth21');
localStorage.setItem('Vagetable', JSON.stringify(vagArray));
// localStorage.clear(); //for clearing the entire local storage
//Clear a particuler key
// localStorage.removeItem('Name2');
// Retrieve an item for localStorage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Vagetable')); // to access we have to use JSON.parse function.
console.log(name);

/*
JSON.stringify take obj and make it string and 
JSON.parse take string and make it obj
*/


// Session Storage

sessionStorage.setItem('Name', 'Neamoth');
sessionStorage.setItem('Name2', 'Neamoth21');
sessionStorage.setItem('Vagetable', JSON.stringify(vagArray));