class Person {
  name: string ="Mark";
  age!: number;

  constructor(age?:number) {
    if(age === undefined) {
      this.age = 20;
    }else {
      this.age = age;
    }
  }
}

const p1 = new Person(25);
const p2 = new Person();
console.log(p1);
console.log(p1.age);
console.log(p2)