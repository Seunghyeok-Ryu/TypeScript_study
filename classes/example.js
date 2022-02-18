"use strict";
class Person {
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p1 = new Person(25);
const p2 = new Person();
console.log(p1);
console.log(p1.age);
console.log(p2);
