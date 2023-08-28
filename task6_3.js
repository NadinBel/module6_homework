
function sumNum(a) {
    return function (b) {
        return   a + b;
    }
}
console.log(sumNum(4)(5));

// со стрелочной функцией короче

sum = x => y => x + y;

console.log(sum(10)(20));