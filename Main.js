console.log("Hello world");

const findTarget = (arr, target) => arr.includes(target);

function findTarget1(arr, target) {
    return arr.includes(target)
}

const returnSortedA = (A, B) => A.sort(function(a, b){return a-b});

function returnSortedA1(A, B) {
    return A.sort(function(a, b){return a-b});
}

let A = [40, 100, 300, 5, 25, 10];
let B = [5,3,7,8,1,10];

console.log(returnSortedA(A,B));

const findMax = A => A.reduce((a,b) => a > b ? a : b);

console.log(findMax(A));

function funcMax(a, b) {
    return a > b ? a : b;
}

const reversedString = str => str.split("").reduce((reversed, char) => char + reversed, "");

console.log(reversedString("selamoc"));
