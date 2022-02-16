# 작성자와 사용자의 관점

## nolmplicitAny 옵션
- 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론중 `any`라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도

## strictNullChecks 옵션
- 모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거해줌.


## nolmplicitReturns 옵션
- 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생

# 작성자와 사용자의 관점

## nolmplicitAny 옵션
- 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론중 `any`라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도

## strictNullChecks 옵션
- 모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거해줌.

## nolmplicitReturns 옵션
- 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생


# Structual type system vs Nominal type system
## Structual type system
- 구조가 같으면, 같은 타입(type script O)
## Nominal type system
- 구조가 같아도 이름이 다르면, 다른 타입(type script X)

# 타입 호완성(Type Compatibility)
- a:nuber[] 는 b:object에 할당 가능 하지만 b에 a할당 불가

- a:[number,number]는 b:number[]에 할당 가능 하지만
b는 a에 할당 불가

- a:number는 b:any에 할당 가능 b도 a에 할당 가능

- a:never as never는 b:number에 할당 가능하지만 b는 a에 할당 불가

# 공변
- 같거나 서브 타입인 경우, 할당이 가능

## primitive type
- a:string, b:string|number a는 b에 할당 가능

- a:{x:string;y:number},b:{x:string|number y:number} a는 b에 할당 가능
  - array와 object도 마찬가지


## 반병
- 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당 가능

# 타입 별칭(별명) (Type Alias)
- Interface랑 비슷해 보이지만 다름
- primitive, Union Type, Tupel, Function 등에 사용
- 기타 직접 작성해야하는 타입을 다른 이름을 지정 가능
- 만들어진 타입의 refer로 사용하는 것이지 새로운 타입을 만드는 것이 아님

## Aliasing Primitive
- type MyStringType = string;
  - let a: MyStringType(string type)

## Aliasing Union type
- type StringOrNumber = string | number;
  - let a:StringOrNumber

## Aliasing Tuple
- type PersonTuple = [string,number]
  - let a:PersonTuple

## Aliasing Function
- type EatType = (food:string) => void;