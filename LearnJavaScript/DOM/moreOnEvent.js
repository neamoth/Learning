console.log('More on Events')

let btn = document.getElementById('btn');
btn.addEventListener('click' ,func1);

function func1(e){
    console.log('Thank you Neamoth Bhai', e);
    // e.preventDefault();//this is for preventing the submiting action

}


// There are more events dblclick, mousedown, mouseenter, mouseleave, mousemove


// Creating mousemove BackGround color changer
let container = document.querySelector('.container').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY}, ${e.clientY})`;
    console.log('You have triggered event mouse move')
})