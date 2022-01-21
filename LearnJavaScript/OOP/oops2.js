console.log('ES 6 Syntax and inheritance');
// creating object template using ES 6 Syntax
// Chapter 1
class Person {
    // making a constructor for the object
    constructor(name, fathersName, mothersName, gender, age, birthPlace, phoneNumber) {
        this.name = name;
        this.fathersName = fathersName;
        this.mothersName = mothersName;
        this.gender = gender;
        this.age = age;
        this.birthPlace = birthPlace;
        this.phoneNumber = phoneNumber;
    }
    // Creating function
    isMaleOrFemale() {
        if (this.gender == 'male') {
            return 'son';
        } else {
            return 'daughter';
        }
    }

    status() {
        return `${this.name} is the ${this.isMaleOrFemale()} of ${this.fathersName} & ${this.mothersName}`
    }

    // Using static type function
    static add (a,b){
        return a+b;
    }

}
// Chapter 2
// Inherite form the person 
class Occupation extends Person {
    constructor(name, fathersName, mothersName, gender, age, birthPlace, phoneNumber, profession, company, salary) {
        super(name, fathersName, mothersName, gender, age, birthPlace, phoneNumber);
        this.profession = profession;
        this.company = company;
        this.salary = salary;
    }
    jobStatus() {
        return `${this.name} is working as a ${this.profession} in ${this.company}.`;
    }
}

neamoth = new Occupation('Neamoth', 'Abdus Salam', 'Nasrin Akter', 'male', 25, 'Chittagong', '01789400417', 'Software Engineer', 'UpWork', 50000);
samira = new Person('Samira', 'Abdus Salam', 'Nasrin Akter', 'female', 8, 'Chandina', 'No number');
shafayat = new Person('Shafayat Ullah Bhuiyan', 'Nurul Haque Bhuiyan', 'Shahinur Sultana', 'male', 18, 'Cumilla', '01980846407');
// static method
// console.log(Person.add(34,43));
/*
    Chapter 1: Creating object template using ES 6
    Chapter 2: Inheritance
*/