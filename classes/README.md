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

# Static Properties & Methods
- Static Methods
```java
class Person2 {
  public static hello2() {
    console.log('안녕하세요')
  }

Person2.hello2();   // class에 직접 호출
}
```
- 출력 값
```
안녕하세요
```

- Static Properties
```java
class Person {
  private static CITY = "Seoul";

  public hello() {
    console.log('안녕하세요', Person.CITY);
  }
  
  public change() {
    Person.CITY = "LA";
  }
}

const p1 = new Person();
p1.hello();   // 안녕하세요 Seoul

const p2 = new Person();
p2.hello();   // 안녕하세요 Seoul
p1.change();    // CITY가 LA로 변환
p2.hello();   // 안녕하세요 LA
```
- 출력 값
```
안녕하세요 Seoul
안녕하세요 Seoul
안녕하세요 LA
```

# Singletons
```java
class ClassName {
  private static instance : ClassName | null = null;
  public static getInstance (): ClassName {
    // ClassName 으로부터 만든 object가 있으면 그걸 return
    // 없으면 만들어서 return
    if(ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance
  }

  private constructor() {

  }
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b);
```
- 출력 값
```
true
```

# 상속(Inheritance)
- 상속 받은 자식 요소에서는 super를 먼저 사용해줘야 함
- 
```java
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
```
- 출력 값
1. 자식(Child) 요소에서 super를 통해 값을 받고 printName 실행
1. 부모(Parent) 요소에서 printName 실행
  - 부모 요소에 있는 프로퍼티(_name, _age)를 받아서 실행
  - Mark Jr. 15  출력
1. c.print 를 통해 부모 요소 print 실행
1. 이름은 Mark Jr. 이고 나이는 15 입니다. 출력 
```
Mark Jr. 15 
이름은 Mark Jr. 이고 나이는 15 입니다.
```

# Abstract Classes
- Abstract로 사용된 class 는 완전하지 않아서 new라는 키워드를 사용할 수 없음
- Abstract로 사용된 class를 상속하면 Abstract가 붙은 함수를 구현하여 완전하게 만들어서 사용(자동 생성 가능)
```java
abstract class AbstractPerson {   
  // class 내부에 abstract를 사용할 경우 calss 앞에 abstract 라고 붙여줘야 함
  protected _name: string = "Mark";

  abstract setname(name:string) : void; // {}   
  // abstract를 사용 할 경우 뒤에 {}를 붙여서 구현하지 않음
}

// new AbstractPerson()

class Person extends AbstractPerson {
  setname(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setname;
```