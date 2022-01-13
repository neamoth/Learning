console.log('this is events console');
// using click and mouseover
document.getElementById('heading').addEventListener('click', function(e){
console.log('You have clicked the heading');
// location.href = 'facebook.com';
    let variable;
variable = e.target;
variable = e.target.className;
variable = Array.from(e.target.classList);

variable = e.target.id;
variable = e.offsetX;
variable = e.offsetY;

// form the length of the browser
variable = e.clientX;
variable = e.clientY;

console.log(variable);

});