"use strict";
function f1(value) {
    console.log(value);
}
f1(100);
f1("hello");
f1([1, 2, 3, 4]);
function getData(value) {
    return value;
}
console.log(getData(100));
console.log(getData("hello"));
