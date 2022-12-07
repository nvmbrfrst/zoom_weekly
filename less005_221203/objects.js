let text = "Игнатиус Лойола Доннелли (англ. Ignatius Loyola Donnelly, 3 ноября 1831, Филадельфия — 1 января 1901, Нинингер, Миннесота) — американский политик-популист и писатель. Происходил из семейства ирландского иммигранта, с 1857 года постоянно проживал в Миннесоте. Профессионально занялся политикой в 1859 году, в 1859—1863 годах был вице-губернатором Миннесоты, в 1863—1868 годах — членом Палаты представителей США от Республиканской партии. В 1873 году основал Антимонопольную партию и газету «Антимонополист», в 1874—1878 годах избирался в Сенат штата Миннесота. Вновь выдвигался в Конгресс США в 1878 году, но потерпел поражение. Отойдя от политической деятельности, Доннелли практиковал как юрист и занимался литературой. После зарождения рабочего движения в городах Миннесоты в 1884 году вновь безуспешно баллотировался в Конгресс от Демократической партии, в 1887 году как независимый кандидат был избран в Палату представителей штата. В 1888 года безуспешно баллотировался на пост губернатора штата от коалиции фермеров и профсоюзов. В 1891—1894 годах избирался в Сенат Миннесоты и в 1897—1898 годах в Палату представителей штата. Участник учредительного съезда Популистской партии в 1892 году, в 1896 году выступал против слияния Популистской и Демократической партий. В 1900 году был кандидатом в вице-президенты США, но неудачно, что и явилось причиной его смерти.";
let exc = [",", " ", ".", ":", ";", "(", ")", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "—", "«", "»"];
let hash = {}
//console.log(hash["a"]); // hash.a => 10
//console.log(hash["ю"]);

for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    let flag = true;
    for (let j = 0; j < exc.length; j++) {
        if (char === exc[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        if (!hash[char]) { // Буквы в словаре еще не было
            hash[char] = 1; // Теперь в словаре эта буква определена как первая
        } else { // Буква в словаре уже было
            hash[char]++; // Количество встреченных букв увеличилось на 1
        }
    }
}
console.log(hash);

let cnt = 0;
let char = "";
for (let k in hash) {
    if (hash[k] > cnt) {
        cnt = hash[k];
        char = k;
    }
}
console.log(`Самая частая буква: «${char}» встретилась в тексте ${cnt} раз`);

/*
    q 9.17
*/
let obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
};

hash = {};

for (let k in obj) {
    // console.log(obj[k]);
    if (hash[obj[k]]) {
        hash[obj[k]]++;
    } else {
        hash[obj[k]] = 1;
    }
    // v2
    // let result = hash[obj[k]];
    // hash[obj[k]] = result ? ++result : 1
}
console.log(hash);

/*
    q 9.18
*/
let list = [
    {product: "Apple", price: 250},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
]

/*
    есть число 0 и слово ""
    если price > 0
        число = price
        слово меняется на соответствующее price
*/

let max = 0;
let word = "";
for (let i = 0; i < list.length; i++) {
    // max = Math.max(max, list[i].price);
    if (list[i].price > max) {
        word = list[i].product;
        max = list[i].price;
    }
}
console.log(word);

/*
    q 9.6 - Простые числа
*/
list = [];
let simple = [];
let sum = 0;
let n = 0;
while(n++ < 100) { // 0 < 100 ? 0 => 1
    list.push(n);
}
console.log(list);

for (let i = 0; i < list.length; i++) {
    if (list[i] >= 2) {
        sum += list[i];
        for (let j = i; j < list.length; j++) {
            // если число j делится на число i, но i !== j, то это число не простое
            if (list[i] !== list[j] && list[j] % list[i] === 0) {
                list[j] = null;
            }
            // console.log(list[i], list[j]);
        }
    }
}
console.log(sum);

function makeCounter() {
    let count = 0
    return function() {
        return ++count;
    }
}

const counter = makeCounter(); // function() {return n++// n = 0}
cnt = makeCounter();
console.log(counter());
console.log(counter());
