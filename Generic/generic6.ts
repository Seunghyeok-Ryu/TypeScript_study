class PersonExtends <T extends string | number> {
  // <T extends string | number>를 통해 제약을 걸어줌
  private _name : T;

  constructor(name:T) {
    this._name = name;
  }
};

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true);   T는 string과 number로 제약 되있음 error발생
