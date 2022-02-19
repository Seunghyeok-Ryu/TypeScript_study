"use strict";
const person = {
    name: 'Mark',
    age: 25,
};
// type Keys = keyof IPerson;
// const keys: Keys = 'name';
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'age');
console.log(person);
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "Max");
console.log(person);
