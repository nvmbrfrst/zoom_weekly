// Node.js https://nodejs.org/en/

/*
    q 1.3
*/

let firstDiv = "<div><p>Первый заголовок</p>Второй заголовок</p></div>";
let start1 = firstDiv.indexOf("<p>");
let start2 = firstDiv.lastIndexOf("<p>");
let end1 = firstDiv.indexOf("</p>");
let end2 = firstDiv.lastIndexOf("</p>");
// console.log(start1, start2);
let startFlag = start1 >= 0 && start1 !== start2 && start2 >= 0;
let endFlag = end1 >= 0 && end1 !== end2 && end2 >= 0;
console.log(startFlag && endFlag);

/*
    q 1.4
*/
let road = "15 km";
// let length = parseFloat(road);
let length = +road.split(" ")[0]; // ["15", "km"]
console.log(length);
console.log(+(length * 0.62).toFixed(1));

/*
    q 1.5
*/
let words = "Солнечная панель";

// v1
words = words.trim();
length = words.split(" ").length;
console.log(length > 1 ? "В строке больше одного слова" : "В строке одно слово");

// v2
let cnt = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
        cnt++;
    }
}
console.log(cnt > 0 ? "В строке больше одного слова" : "В строке одно слово");

/*
    q 1.9
*/

let emails = "example@ex.ru primer@primer.com email@com.ru";
emails = "lubeuquefrezi-6350@mail.com crevivunuffeu-4516@mail.com"
// v1
console.log(emails.split(" "))

//v2
let reg = /[a-z0-9-]+@[a-z]+\.[a-z]{2,3}/gi; // i - ignoring case, g - global
let result = emails.match(reg);
console.log(result || [""]);

/*
    q 1.10
*/

let tickets = ["BM-12234567:RU", "SD-122345674573:RU", "VG-590234543245:EN", "FF-1267:RU"];

let test1 = /[a-z-]\d{8}\D/i;
let test2 = /[a-z-]\d{12}\D/i

for (let ticket of tickets) {
    console.log(ticket);
    /*
        str.search(reg) - index
        str.match(reg) - array

        reg.test(str) - true/false
        reg.exec(str) - array
    */
    if (test1.test(ticket)) {
        console.log("Выбран билет на концерт");
    } else if (test2.test(ticket)) {
        console.log("Выбран билет в театр");
    } else {
        console.log("Билет не определен");
    }
}