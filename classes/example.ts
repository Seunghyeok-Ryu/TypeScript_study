class Person {
  public constructor (private _name: string, public age: number) {}

  get name() {
      //
      console.log('get');
    return this._name + " AAAA";
  }

  set name(n : string) {
    console.log('set');
    this._name = n;
  }
}

const p1 = new Person("Mark", 25);
console.log(p1.name);   // get을 하는 함수 getter
p1.name = "Anna"      // set을 하는 함수 setter
console.log(p1.name);