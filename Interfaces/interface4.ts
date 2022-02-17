interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 25,
  hello: function(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const p42: Person4 = {
  name: 'Mark',
  age: 25,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};


// arrow function 에서는 this 사용 불가
// const p43: Person4 = {
//   name: 'Mark',
//   age: 25,
//   hello(): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };

p41.hello();
p42.hello();