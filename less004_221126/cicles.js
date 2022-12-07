let n = 5;
while(n > 0) {
    // console.log("n больше 0", n);
    n = n - 1;
}

console.log("Цикл завершен");

/*
    Малышу 0 лет
    С рождением ребенка родителю купили упаковку из 500 свечек.
    Каждый день рождения из упаковки забирали столько свечек, сколько лет исполнилось ребенку.
    На сколько лет хватит упаковки свечек?
*/

let age = 0, candles = 500;
/*
    1 => 499
    2 => 497
    3 => 494
    4 => 490
    5 => 485
    ...
*/
while(candles >= age) {
    age++;
    candles -= age; // candles = candles - age;
    // console.log(age, candles);
}

/* 
    for(v1;v2;v3)
    v1 - работает в цамом начале цикла (объявление переменных / изменение значения переменной)
    v2 - true/false (условие)
    v3 - действие, которое выполняется каждый раз после выполнения блока с кодом

*/
for(n = 5; n > 0; n = n - 1) {
    console.log("n больше 0", n);
}
// v1 => v2 => {} => v3 => v2 => {} => v3

console.log("Цикл завершен");

/*
    q 5.1
*/

let start = 0, end = 50;
let result = 0;

while (start <= end) {
    if (start % 5 === 0) {
        result = result + start;
    }
    start++;
}
console.log(result);

/*
    q 5.2
*/

let word = "Булочка";
let reverse = "";
//console.log(word.length); // длина строки
//console.log(word[0]); // Первая буква
//console.log(word[word.length - 1]); // Последняя буква

for (let index = 0; index < word.length; index++) {
    // console.log(index);
    console.log(word[index]);
}

for (let index = word.length - 1; index >= 0; index--) {
    // console.log(index);
    reverse += word[index];
    console.log(reverse);
}

/*
    q 5.3
*/

word = "Доход";
reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i].toLowerCase();
}

console.log(word, reverse);
// if (word.toLowerCase() === reverse) {
//     console.log("Слово является палиндромом!")
// } else {
//     console.log("Слово не является палиндромом!");
// }

console.log(word.toLowerCase() === reverse ? "Слово является палиндромом!" : "Слово не является палиндромом!");

/*
    v2
*/

// Молоко => м ? о
// Довод
word = "Чебурек"
let char = Math.floor(word.length / 2);
let isPalindrom = true;
console.log(char);

for (let i = 0; i < char; i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) { // word.length - 4
        isPalindrom = false;
        break;
    }
}

console.log(isPalindrom ? "Слово является палиндромом!" : "Слово не является палиндромом!")