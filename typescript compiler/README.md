# compileOnSave
- "compileOnSave" : true,

# extends
- "extends" : "./부모 경로"
- tsconfig.basis(git)더욱 많은 정보

# files, include, exclude
- 셋다 설정이 없으면, 전부다 컴파일
# files 
- 상대 혹은 절대 경로의 리스트 배열
- exclude 보다 쌤
# include,exclude
- glob패턴(마치 .gitignore)
## include
- exclude보다 약함
- *같은걸 사용하면, .ts/ .tsx/ .d.ts만 include(allowJS)
## exclude
- 설정 안하면 4가지(node_modules,bower_components, jspm_packages, <outDir>)를 default로 제외
- <outDir>은 항상 제외(include에 있어도)

# compileOptions-typeRoots, types
## @types
- 아무 설정 없으면 : node_moduels/@type라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면 : 배열 안에 들어있는 경로들 아래서 가져옴
- types를 사용하면 : 배열 안의 모듈 혹은 ./node_modules/@types/안의 모듈 이름에서 찾아옴. [] 빈 배열은 이 시스템을 이용하지 않겠다는 뜻
- typeRoots와 types를 같이 사용하지 않음

# compileOptions-target과 lib
## target
- 빌드의 결과물을 어떤 버전으로 할 것이냐
## lib
- 기본 type definition 라이브러리를 어떤 것으로 사용할 것이냐

# compileOptions - outDir, outFile, rootDir

# compileOPtions - strict
- Enable all strict type checking options
- typeScript에서는 strict는 true로 사용되어야함

## noImplicitAny
- 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생

## suppressImplicitAnyIndexErrors
- nolmplicitAny 사용할 때, 인덱스 객체에 인덱스 signature가 없는 경우 오류가 발생 하는데 이를 예외 처리

## noImplicitThis
- 명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생

## strictNullChecks
- null 및 undefined값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나,any 일 경우에만 할당 가능

## strictFunctionTypes
- 함수 타입에 대한 bivariant 매개변수 검사를 비활성화하는 옵션

## strictPropertyInitialization
- 정의되지 않은 클래스의 속성이 생성자에서 초기화 되었는지 확인(위 옵션을 사용하려면 stritNullChecks를 사용하도록 설정해야함)

## strictBindCallApply
- Function의 내장 함수인 bind/call/apply를 사용할 때, 엄격하게 체크하도록 하는 옵션

## alwaysStrict
- 각 소스 파일에 대해 JS의 strict mode로 코드를 분석하고 '엄격하게 사용'을 해제