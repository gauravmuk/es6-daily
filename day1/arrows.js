function getEvens_ES6 (arr) {
    "use strict";

    return arr.map((v, i) => v + i);
}

function getEvens_ES5 (arr) {
    "use strict";

    return arr.map(function (v, i) {
        return v + i;
    });
}

var arr = [];

for (var i = 0; i < 100; i++) {
    arr.push(i);
}

console.log(getEvens_ES5(arr));
console.log(getEvens_ES6(arr));