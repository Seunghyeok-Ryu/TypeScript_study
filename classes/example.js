"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        //
        console.log('get');
        return this._name + "AAAA";
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p1 = new Person("Mark", 25);
console.log(p1.name); // get을 하는 함수 getter
p1.name = "Anna"; // set
console.log(p1.name); // get을 하는 함수 getter
