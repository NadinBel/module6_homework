let arr = [2, 5, 34, 65, 13, 0, 35, 'a', null, "b"];
function countEvenOdd(){
    let even = 0;
    let odd = 0;
    let other = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] % 2 === 0) {
               even ++;
            } else {
                odd ++;
            }
        } else  {
            other ++;
        }
    }
    console.log(`Количество четных чисел - ${even}`);
    console.log(`Количество нечетных чисел - ${odd}`);
    console.log(`Количество других значений - ${other}`);
}
countEvenOdd();