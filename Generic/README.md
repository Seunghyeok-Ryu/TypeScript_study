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