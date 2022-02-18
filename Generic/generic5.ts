class Person<T, K> {
  private _name: T;
  private _age : K;
  

  constructor(name:T, age:K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Mark",25);
// new Person<string>(25);    error
// new Person<string, number>("Mark","age") error