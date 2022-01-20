console.log('Oops practice');

// creating with object literal

let car = {
    name: 'Toyota',
    model: 'XX12Y',
    numPlate: 'DH-2548',
    slogan: function () {
        return `This ${name} car is too Fast
        I hope you will enjoy the speed`
    }
}


// Creating with constructor

function MyCar(name, model, numPlate, speed, slogan) {
    this.name = name;
    this.model = model;
    this.speed = speed;
    this.numPlate = numPlate;
    this.slogan = function () {
        return `This ${this.name} Car is too fast`
    }
}
// Creating an object
let neamoth = new MyCar();
// given the value for the object 1
neamoth.name = 'Farari';
neamoth.model = 'Farrari 488 pista'
neamoth.speed = '398 mph';
neamoth.numPlate = 'SG 458';
// given the value for the object 2
let samira = new MyCar('BMW', 'BMW next Gen', 'DH 0001', '400mph');