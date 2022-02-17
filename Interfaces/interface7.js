"use strict";
// helloPerson 함수는 interface HelloPerson과 상호작용
// 뒤에 function에  name,age를 받았는데 함수내에 age가 없음으로 error 발생
const helloPerson = function (name) {
    console.log(`안녕하세요 ${name} 입니다.`);
};
helloPerson("Mark", 25);
