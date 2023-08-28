
const arr = [2, 5, 34, 65, 7, 0, 'a', null, true];
let even = 0;
let odd = 0;
let other = 0;
for (let i = 0; i < arr.length; i++) {
    if ((typeof(arr[i]) === 'number') && (!isNaN(arr[i]))) {
        if (arr[i] % 2 === 0) {
            even ++;
        } else {
            odd ++;
        }
    } else  {
        other ++;
    }
}
console.log(even);
console.log(odd);
console.log(other)

