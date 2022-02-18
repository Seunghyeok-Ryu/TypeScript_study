class Parent {
  constructor(protected _name:string, private _age:number) {

  }
  public print() : void {
    console.log(`이름은 ${this._name} 이고 나이는 ${this._age} 입니다.`);
  }
  protected printName(): void {
    console.log(this._name, this._age);   // Mark Jr.  15 출력
  }
}

// const p = new Parent("Mark", 25);
// p.print();

class Child extends Parent {

  public gender = 'male';

  constructor(age: number) {
    super('Mark Jr.', age)    // 상속 받은 경우 super를 먼저 사용해야함
    // 부모 요소의 constructor 와 같은 형태(name, age)
    this.printName();   // 부모 요소의 printName 실행 
  }
}

const c = new Child(15);

c.print();    // 부모 요소 print 출력