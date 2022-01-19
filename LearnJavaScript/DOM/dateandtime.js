console.log('Date and time learning');
// setting time menually using the set method
let date = new Date();
date.setDate(16);
date.setMonth(11);
date.setFullYear(1997);
date.setHours(07);
date.setMinutes(12);
date.setSeconds(13);
console.log(`My set Date is
` + date);
// setting the date and time another method
let setDateAnotherWay = new Date(`11-11-1990, 12:14:26`);
console.log(`Another way to set date:
`+setDateAnotherWay);
// Accessing the information about any time or date
let a;
a = date.getYear();
console.log(`This is the Year of date via getting method:
method: Year= `+a);
