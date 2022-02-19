"use strict";
function helloArray(message) {
    return message[0];
}
helloArray(['hello', 'world']); // Type : string으로 추론
helloArray(['hello', 25]); // Type : string | number로 추론
function helloTuple(message) {
    return message[0];
}
helloTuple(["hello", 'world']); // type : string으로 추론
helloTuple(['hello', 25]); // Type : string | number로 추론 message[0]번째 배열은 string으로 정확하게 추론(Array와 차이점)
