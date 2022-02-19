"use strict";
function helloBasic(message, comment) {
    return message;
}
helloBasic('Mark', 25); // type을 직접 지정하는 방식
helloBasic(25, 23); // 들어간 값에 의해서 type 추정
