/*
    q 9.3
*/

let arr = [];
function getRandom(n) {
    return Math.floor(Math.random() * n);
}
let length = 10000;

while(length--) {
    arr.push(getRandom(100));
}

console.log(arr);

let sum = 0;
console.time("for");
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(arr[i], sum);
}
console.log("Сумма for:", sum);
console.timeEnd("for");

console.time("for in"); // работает медленнее всех с 100000;
sum = 0;
for (let k in arr) {
    sum += arr[k];
}
console.log("Сумма for in:", sum);
console.timeEnd("for in");

console.time("for of"); // c 500000 стал чуть медленнее forEach и for
sum = 0;
for (let val of arr) {
    sum += val;
}
console.log("Сумма for of:", sum);
console.timeEnd("for of");

console.time("forEach");
sum = 0;
arr.forEach(function(el) {
    sum += el;
});
console.log("Сумма forEach:", sum);
console.timeEnd("forEach");

/*
    for - быстрее всех на огромных количествах
    for in - не используется для цикла, потому что не создан для работы с большим количеством данных (он нужен для перебора свойств объектов)
    for of - отлично подходит для работы с массивами, но дает небольшую задержу при работе с огромным количеством данных (>500000)
*/

/*
    q 9.7
*/
let list = [2, 45, 3, 23, 6];
let max = -Infinity; // 0
let min = Infinity;  // 100
for (let el of list) { // 3
    max = Math.max(max, el); // 45
    min = Math.min(min, el); // 2 
}
console.log(max * min);

// v2
console.log(Math.max(...list) * Math.min(...list)); // ... - spread 1,2,3,4,5

/*
    q 9.9
*/
let sentence = "Завтра будет лучше чем вчера";
let words = [];
let word = "";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        words.push(word);
        word = "";
    } else {
        word += sentence[i];
    }
}
words.push(word);
console.log(words);

/*
    q 9.13
*/

list = [];
for (let i = 10; i <= 20; i++) {
    list.push(i);
}
console.log(list);

/*
    q 9.15
*/
list = ["Лёша", "default", "полке", "клопа", "нашёл"];
let cnt = 0;
for (let val of list) {
    if (val.toLowerCase() !== "default") {
        cnt++;
    }
}
console.log(cnt);

/*
    q 9.16
*/
list = ["Завтра", "будет", "лучше", "чем", "вчера"];
let str = "";
for (let el of list) {
    str += el[0];
}
console.log(str);