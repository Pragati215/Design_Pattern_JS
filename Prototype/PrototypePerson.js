/*******************************************************************************************************
 * @problem :  write a program to implement Prototype Design Pattern
 * @fileName : PrototypePerson.js
 * @Auther  : Pragati D
 *******************************************************************************/

function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}

// we extend the function's prototype
Person.prototype.writesCode = function() {
    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
}

// creates a Person instance with properties & a method writesCode
var person1 = new Person("Bob", 38, true);
// creates a Person instance with properties & a method writesCode
var person2 = new Person("Alice", 32);

// prints out: This person does write code
person1.writesCode();
// prints out: this person does not write code
person2.writesCode();