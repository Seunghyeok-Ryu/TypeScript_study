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

# constructor & initialize
- 생성자 함수가 없으면, 디폴트 생성자가 불린다
- 생성자가 하나라도 있으면 디폴트 생성자는 사라진다
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 함
```java
class Person {
  name: string ="Mark";
}
```
- constructor 를 이용한 값 할당 방법
```java
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
```
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !을 붙여서 위험을 표현
```java
class Person {
  age!: number;
}
```
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다
- 생성자에는 async를 설정할 수 없다

# 접근 제어자(Access Modifiers)
- 접근 제어자에는 public, private, protected가 있다
- 설정하지 않으면 public 이다(기본값)
- 클래스 내부의 모든 곳(생성자,프로퍼티,메서드) 설정 가능
```java
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
```
- private 으로 설정하면 클래스 외부에서 접근할 수 없음
- JS에서 private 지원하지 않아 오랫동안 프로퍼티나 메서드 이름앞에 _를 붙여 표현됨

# Initializtion in constructor parameters
- public 을 통해 class 내부 식 간단화
```java
class Person {
  name : string;
  age : number
  constructor (name: string, age:number) {
    this.name = name;
    this.age = age;
  }
}
```
```java
class Person {
  public constructor (public name: string, public age: number) {}
}
```

# Getter & Setter
- get을 하는 함수 getter
- set을 하는 함수 setter
```java
class Person {
  public constructor (private _name: string, public age: number) {}

  get name() {
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
```
- 출력 값  
```bash
get  
Mark AAAA   
set  
Anna AAAA    
```

# readonly properties
- 초기 값 설정(2가지 방법, 직접/constructor) 후 값 변경 불가
```java
class Person {
  public readonly name : string = "Mark";   // 직접 값 할당
  private readonly country : string;
    // constructor를 이용한 값 할당
  public constructor (private _name: string, public age: number) {
    this.country = "Korea"
  }
}
```

# Index Signatures in Class
- 프로퍼티가 고정된 것이 아닌 동적인 경우 사용함
```java
// class => object
// {mark : 'male', jade : 'male'};
// {chloe : 'female', alex : 'male, anna : 'female'};

class Students {
  [index :string] : 'male' | 'female';
  // 어떠한 프로퍼티가 들어와도 'male' 또는  'female' 을 값으로 가져야 함

  jason : 'male' = 'male';
  // 'male' 이 아닌 다른 값('hello','man','girl')을 가질 수 없음
}
const a = new Students ();
a.mark = 'male';
a.jade = 'male';

console.log(a);

const b = new Students ();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b);
```
- 출력 값
```bash
Students { jason: 'male', mark: 'male', jade: 'male' }
Students {
  jason: 'male',
  chloe: 'female',
  alex: 'male',
  anna: 'female'
}
```