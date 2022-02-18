class Person {
  public name: string ="Mark";
  private age!: number;

  public constructor(age?:number) {
    if(age === undefined) {
      this.age = 20;
    }else {
      this.age = age;
    }
  }

  public async init(){

  }
}

const p1 = new Person(25);
console.log(p1);