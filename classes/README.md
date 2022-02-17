# Class
- class 키워드를 이용하여 클래스를 생성 가능
- class 이름은 보통 대문자를 이용
```java
class Person {}
```
- new를 이용하여 class를 통해 object를 생성하면서 값 전달 가능
```java
const p1 = new Person();
```
- constructor를 이용하여 object를 생성하면서 값을 전달 가능
```java
 constructor(name:string){}
```
- this를 이용해서 만들어진 object를 가리킬 수 있다.
```java
constructor(name:string){
  this.name = name;
}
```
- 객체를 property로 사용할 경우 class 내부에 name;을 적용해줘야함
```java
class Person {
  name;
}
```
- 완성 코드
```java
class Person {
  name;

  constructor(name:string){
    this.name = name;
  }
}

const p1 = new Person("Mark");

console.log(p1);
```
- JS로 컴파일되면 es5경우 function으로 변경