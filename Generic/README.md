# Generic 과 Any 의 차이점
- any
  - 모든걸 받아서 모든 것으로 주는 것
  - 들어오는 input에 따라서 달라지는 typing을 할 수 없음
```java
function hello(message: any): any {
  return message
}

console.log(hello('Mark').length);  // type이 any로 설정
console.log(hello(25)/*.length*/);
// number에는 .length를 사용할 수 없지만 type이 any로 설정되 있어서 .length를 사용해도 error가 발생하지 않음
```

- Generic
  - <T> (x:T) : T {}를 통해 구현
  - Type으로 된 logic(연산)이 함수 내에서 가능하게 됨
```java
function helloGeneric<T> (message: T): T {
  return message;
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(25));
console.log(helloGeneric(true));
```

# Generic Basic
- 지정한 변수의 개수 만큼 지정해줘야함
- T, U 두개를 변수로 지정했다면 <string, number> 두개 지정 / <string> 하나만 지정한다면 error 발생
```java
function helloBasic<T, U> (message: T, comment : U) : T {
  return message;
}

helloBasic<string, number>('Mark',25);   // type을 직접 지정하는 방식
helloBasic(25, 23);   // 들어간 값에 의해서 type 추정
```

# Generic Array & Tuple
- Array
```java
function helloArray<T> (message: T[]): T{
  return message[0];
}

helloArray(['hello', 'world']);   // Type : string으로 추론
helloArray(['hello',25]);     // Type : string | number로 추론
```
- Tuple
```java
function helloTuple<T, K> (message : [T, K]) : T {
  return message[0];
}

helloTuple(["hello", 'world']);   // type : string으로 추론
helloTuple(['hello', 25]);    // Type : string | number로 추론 message[0]번째 배열은 string으로 정확하게 추론(Array와 차이점)
```

# Generics Function
- type alias 방법
```java
type HelloFunctionGeneric1 = <T> (message: T) => T;
const HelloFunction1: HelloFunctionGeneric1 = <T> (message: T) : T => {
  return message;
};
```
- interface 방법
```java
interface HelloFunctionGeneric2 {
  <T>(message: T): T
}

const helloFunction2:HelloFunctionGeneric2 = <T>(message:T): T => {
  return message;
};
```

# Generic Class
- 컴파일 타임에 미리 error를 체크할 수 있음
```java
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
```

# Generics with extends
- <T extends string | number | boolean>형식을 통해 사용
```java
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
```

# keyof & type lookup system

```java
interface IPerson {
  name: string;
  age: number;
}
const person: IPerson = {
  name : 'Mark',
  age: 25,
};

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number

function getProp<T, K extends keyof T> (obj: T, key: K): T[K] {
  // T는 person을 통해 IPerson으로 추론됨
  // K extends keyof T(T는 "name" | "age" union type이 아닌 "name" or "age"로 지정됨)
  // T[K] => IPerson["age"] 인 number type로 지정
  return obj[key];
}

getProp(person, 'age')
// function getProp<IPerson, "age">(obj: IPerson, key: "age"): number
console.log(person)

function setProp<T, K extends keyof T>(
  // T는 IPerson으로 추론
  // K extends keyof T(T는 "name" | "age" union type이 아닌 "name" or "age"로 지정됨) => "name"
  // T[K] => IPerson("name")인 string type로 지정
  obj : T, 
  key : K, 
  value : T[K]
  ) : void {
  obj[key] = value;
}

setProp(person, "name", "Max")
// function setProp<IPerson, "name">(obj: IPerson, key: "name", value: string): void
console.log(person)
```
- 출력 값
```
{ name: 'Mark', age: 25 }
{ name: 'Max', age: 25 }
```