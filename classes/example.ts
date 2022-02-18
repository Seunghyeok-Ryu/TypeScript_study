class Person {
  public readonly name : string = "Mark";
  private readonly country : string;

  public constructor (private _name: string, public age: number) {
    this.country = "Korea"
  }
}

const p1 = new Person("Mark", 25);
console.log(p1.name);   // get을 하는 함수 getter
p1.name = "Anna"      // set을 하는 함수 setter
console.log(p1.name);