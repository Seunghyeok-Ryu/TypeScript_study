// never
// never에는 그 어떤 것도 할당할 수 없다.

function error(message:string): never{
  throw new Error(message);

}

function fail() {
  return error('failed');
}

function infiniteLoop(): never{
  while(true) {  }
}

declare const a:string | number;

if (typeof a !== 'string') {
  a;
}

