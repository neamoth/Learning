console.log("Link finding")


let str = 'text';

let links= document.links;
let href;
Array.from(links).forEach(function(element){
href = element.href;
// console.log(href)
if(href.includes(str)){
    console.log(href);
}
})
console.log(links);