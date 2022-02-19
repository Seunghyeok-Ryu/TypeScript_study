interface IPerson {
  name: string;
  age: number;
}
const person: IPerson = {
  name : 'Mark',
  age: 25,
};

// type Keys = keyof IPerson;

// const keys: Keys = 'name';

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, 'age')
console.log(person)
function setProp<T, K extends keyof T>(
  obj : T, 
  key : K, 
  value : T[K]
  ) : void {
  obj[key] = value;
}

setProp(person, "name", "Max")
console.log(person)
