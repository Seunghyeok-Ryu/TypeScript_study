# 작성자와 사용자의 관점

## nolmplicitAny 옵션
- 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론중 `any`라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도

## strictNullChecks 옵션
- 모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거해줌.

## nolmplicitReturns 옵션
- 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생