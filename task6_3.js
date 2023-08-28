
function sumNum(a) {
    return function (b) {
        return   a + b;
    }
}
console.log(sumNum(4)(5));

