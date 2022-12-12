/*
    q 3.2
*/
let word = "велосипед"; // 0
// console.log(word.charAt(0).toUpperCase())
console.log(word[0].toUpperCase())

/*
    q 3.4
*/
let value = 5.4;
let v1 = Math.ceil(value); // 6
let v2 = Math.floor(value); // 5
let v3 = Math.round(value); // 5
let sum = Math.sqrt(v1 + v2 + v3);
console.log(Math.floor(sum));

/*
    q 3.7
*/
let name = "Анатолий",
last_name = "Максимов",
age = 32;

let obj = {
    "name": name,
    last_name: last_name,
    age: age
}
// v2
obj = {};
obj.name = name;
obj.last_name = last_name;
obj.age = age;

console.log(obj);

/*
    q 3.9
*/
value = null;
console.log(value === null ? "null": typeof value);

/*
    q 4.1
*/
let speed = 60;
// <= 30 Вы едете слишком медленно
// Вы едете с нормальной скоростью
// Вы едете слишком быстро, сбавьте скорость
if (speed <= 30) {
    console.log("Вы едете слишком медленно");
} else if (speed > 70) {
    console.log("Вы едете слишком быстро, сбавьте скорость");
} else {
    console.log("Вы едете с нормальной скоростью");
}

/*
    q 4.3
*/
let a = 32, b = 32, c = 14;
if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

/*
    q 4.4
*/
let temp = 25, weather = "clear";
let activity = "";

if (temp >= 25 && weather === "clear") {
    activity = "golf";
} else if (temp >= 10 && temp <= 24 && weather === "clear") {
    activity = "bowling";
} else {
    activity = "hiking";
}

// v2
if (weather === "clear") {
    if (temp >= 10 && temp < 25) {
        activity = "bowling";
    } else if (temp >= 25) {
        activity = "golf";
    } else {
        activity = "hiking";
    }
} else {
    activity = "hiking";
}
console.log(activity);

/*
    q 4.5
*/
let word_1 = "машина", word_2 = "стол";
console.log(word_1.length > word_2.length ? word_1 : word_2);

/*
    q 4.8
*/
a = 2, b = 6;
let sign = "*";

switch(sign) { // "*"
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(a / b); break;
    default: console.log("Знак не определен");
}

/*
    q 4.9
*/

switch(sign) { // "*"
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(b === 0 ? "Делить на 0 нельзя!" : a / b); break;
    default: console.log("Знак не определен");
}

/*
    q 5.3
*/
word = "Добор";
a = 0; // start
b = word.length - 1; // end
c = true;
for ( ; a <= b; a++, b--) { // 2 <= 2
    // Д == д
    // о == о
	if (word.charAt(a).toLowerCase() == word.charAt(b).toLowerCase()) {
	    //console.log("Слово является палиндромом!");
	} else {
	    //console.log("Слово не является палиндромом!");
        c = false;
        break;
	}
}

console.log(c ? "Слово является палиндромом!" : "Слово не является палиндромом!")

/*
    q 6.1
*/
let price = 80000;
function priceMessage(p) {
    console.log(`Данный товар стоит ${p} рублей`)
}

priceMessage(price);


/*
    q 6.3
*/
let num = 9;

function square() {
    return num ** 2;
}
console.log(square());

/*
    q 6.5
*/

let data = "привет";

function getNumber(d) {
    let n = parseFloat(d);
    if (isNaN(n)) {
        return 0;
    } else {
        return n;
    }
}
console.log(getNumber(data));

/*
    q 9.1
*/
let list = ["Груша", "Яблоко"];
list.unshift("Яблоко");
list.pop();
list.push("Клубника");
console.log(list);

/*
    q 9.2
*/
// list = ["Груша", "Яблоко"];

let maxWord = "";

for (let i = 0; i < list.length; i++) {
    if (maxWord.length < list[i].length) {
        maxWord = list[i];
    }
}
console.log(maxWord);

/*
     q 9.3
*/
list = [23, 13, 3];
sum = 0;
for (let el of list) {
    sum += el;
}
console.log(sum);

/*
    q 9.4
*/
let list_1 = [12, 3], list_2 = [2, 1]

let arr = [];
for (let el of list_1) {
    arr.push(el ** 2);
}
for (let a of list_2) {
    arr.push(a ** 2);
}

// v2
arr = [...list_1, ...list_2];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr);

result = list_1.push(...list_2);
console.log(list_1);

/*
    q 9.5
*/

list = [12, -4, 5, 32, 2];
sum = 0;
for (let n of list) {
    if (n > 0) {
        sum += n;
    }
}
console.log(sum);

/*
    q 9.8
*/

let rev = [];
for (let i = list.length - 1; i >= 0; i--) {
    rev.push(list[i]);
}

console.log(rev);

/*
     q 9.10
*/

function count(arr) {
    let cnt = 0;
    for (let n of arr) {
        if (n % 2 === 0) {
            cnt++;
        }
    }
    return cnt;
}
console.log(count(list));

/*
    q 9.11
*/

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}
console.log(average(list));

/*
    q 9.12
*/

list = [2, 54, 2, 54, false, 2];
sum = 0;
for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "boolean") {
        break;
    }
    sum += list[i];
}
console.log(sum);

/*
    q 9.14
*/

list = [2, "привет", 23, true, 2, false, 2];
let numbers_list = [];
for (let i = 0; i < list.length; i++) {
    console.log(Number(list[i]));
    if (list[i] === false) {
        break;
    }
    if (typeof list[i] === "number") {
        numbers_list.push(list[i]);
    }
}
console.log(numbers_list);


/*
    Замыкания
*/
function secretPwd(p) {
    let pwd = p;
    return {
        guessPassword: function(guess) {
            return guess === pwd;
        }
    }
}

let game = secretPwd("=)"); // { guess: val === "qwerty123" }
console.log(game.guessPassword("qwerty123"));

/*
    Выберите верные утверждения:
    +1) У каждой функции свое лексическое окружение.
    +2) В лексическом окружении хранятся аргументы функции.
    -3) В лексическом окружении хранятся внешние переменные, использующиеся внутри
    функции.
    ???4) У одной функции всегда будет одно лексическое окружение вне зависимости от
    количества ее вызовов.
*/