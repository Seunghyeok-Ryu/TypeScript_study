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