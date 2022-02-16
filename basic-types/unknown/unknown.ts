// unknown
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 확정해줘야함

declare const maybe: unknown;


if(maybe === true){
  const aBoolean:boolean = maybe;
}

if (typeof maybe === 'string'){
  const aString:string = maybe;
}