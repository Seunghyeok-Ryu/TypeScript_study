// Tuple
// 길이가 정해져있고 앞뒤의 type이 정확해야함(서로 다를 수 있음)

let x: [string,number];

x = ['hello',25];

// x = [10, 'Mark'];    Error
// x[2];    배열의 길이가 알맞지 않음

const person: [string, number] = ['Mark', 25];

const [first, second] = person;
