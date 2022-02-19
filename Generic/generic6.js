"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
;
new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true);   T는 string과 number로 제약 되있음 error발생
