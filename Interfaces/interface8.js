"use strict";
// readonly 사용시 바뀔 수 없음(불변의 내용에 사용)
const p81 = {
    name: "Mark",
    age: 25,
    gender: "male",
};
// p81.gender = "female";   readonly를 사용했기에 바뀔 수 없음 Error발생
