function sum (a, b) {
    let i = a;
    if (i <= b) {
        const intervalId = setInterval(function () {
            console.log(i++)
        }, 1000);
         setTimeout(function () {
            clearInterval(intervalId);
        }, (1000 * (b - a + 2)));
    }
}
sum(7, 10);