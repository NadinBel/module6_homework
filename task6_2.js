function simplyNumber(number) {
    if (number === 2 || number === 3) {
        console.log(`Число ${number} простое`);
    } else if (number > 3 && number <= 1000 || number === 2) {
        for (i = 2; i <= Math.sqrt(number); i++) {
            if (number % i !== 0) {
                console.log(`Число ${number} простое`);
            } else {
                console.log(`Число ${number} составное`);
            }
        }
    } else {
        console.log(`Число введено неверно`)
    }
}
simplyNumber(2);

