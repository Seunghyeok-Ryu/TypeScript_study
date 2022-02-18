function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들 ...

function hello(message: any): any {
  return message
}

console.log(hello('Mark').length);
console.log(hello(25));

function helloGeneric<T> (message: T): T {
  return message;
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(25));
console.log(helloGeneric(true));