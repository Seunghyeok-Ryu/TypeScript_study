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