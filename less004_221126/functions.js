let x = 5;
y = 5 ** 2; // f(x) = x ** 2;

function parabola(n) {
    // let n
    console.log(n, n ** 2);
}

for (let x = -10; x <= 10; x++) {
    // parabola(x);
}

/*
    q 6.2
*/

/*

    Парадигмы ОО программирования
    - наследование
    - полиморфизм - переиспользование кода
    - инкапсуляция - код ничего не делает кроме того, для чего был создан
*/


let num_1 = 3, num_2 = 6;

function mult(a, b) {
    let result = a * b;
    // console.log("Произведение", result);
    return result;
}

let m = mult(num_1, num_2);
// console.log(`${num_1}*${num_2}=${m}`);
console.log(m);

// let max = Math.max(100, 2, 45, 78, 690, 2834, 35, 456);

/*
    q 6.1
*/

let price = 3000;

function priceMessage(p) {
    // return "Данный товар стоит " + p + " рублей";
    return `Данный товар стоит ${p} рублей`;
}

console.log(priceMessage(price));

/*
    q 6.4
*/

let num = 2;
function getSquares(n, cnt = 3) {
    let result = n;
    let str = "";
    while(cnt) {
        result = result ** 2;
        if (cnt !== 1) {
            str += result + " ";
        } else {
            str += result;
        }
        cnt--;
    }
    return str;
}

console.log(getSquares(num, 4)); // 4 16


/*
    q 6.6
*/

let value = 4, total = 80;

function getPercent(n, per) {
    /*
        per = x
        n = 100
        => per * 100 = n * x
        => x = per * 100 / n
    */
    return (per * 100) / n;
}

console.log(getPercent(total, value));
