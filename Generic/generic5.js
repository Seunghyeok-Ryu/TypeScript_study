"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("Mark", 25);
// new Person<string>(25);    error
// new Person<string, number>("Mark","age") error
