function helloBasic<T, U> (message: T, comment : U) : T {
  return message;
}

helloBasic<string, number>('Mark',25);   // type을 직접 지정하는 방식
helloBasic(25, 23);   // 들어간 값에 의해서 type 추정
