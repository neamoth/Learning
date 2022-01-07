console.log('We are in loops');

for(let i = 1; i<=10; i++){
    // console.log(i)
}
let j = 1 ;
while(j<=10){
    // console.log(j+'='+j);
    j++;
}

let studentInfo = {
    name : 'Neamoth Ullah',
    age : 34,
    subject: 'CSE',
    level: "Dangerious Programmer",
    os : "urabaru"
}

for(let key in studentInfo){
    console.log(`The ${key} is ${studentInfo[key]}`);
}