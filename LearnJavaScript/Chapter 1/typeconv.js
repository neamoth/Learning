// Type conversion and type coercion

let myVar;
myVar = String(32);

console.log(typeof myVar);

let i = 34;
console.log(i.toString()+" "+typeof i.toString())

let str = Number('3453');
let str1 = Number(true);

console.log(str+" "+typeof str);
console.log(str1+" "+typeof str1);

html = 'neamoth is a good boy';
console.log(html.charAt(3));
console.log(html.includes('is'));
console.log(html.substring(1,9));
console.log(html.split(' '));
console.log(html.replace('neamoth', 'some'));
let name = 'Neamoth';
let fruit1 = 'Mango';
let fruit2 = 'Orange'
let myHtml = `Hello ${name}
            <h1>This is heading</h1>
        <p>You like ${fruit1} and ${fruit2}</p>
            `;
document.body.innerHTML = myHtml;