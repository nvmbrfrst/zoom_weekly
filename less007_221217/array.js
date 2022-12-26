/*
    q 2.3
*/
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let numbers = layout.match(/\d+/g) || [];
numbers = numbers.map(el => {
    if (el % 2 === 0) {
        return el ** 2
    } else {
        return +el;
    }
})
// console.log(numbers.map(function(el) {
//     return +el;
// }));
console.log(numbers);

/*
    forEach => пройтись по всем элементам массива (не изменяет текущий массив, не возвращает новый массив)
    map() => пройтись по всем элементам массива и изменить их. Возвращает новый массив с таким же количеством данных, как и было
*/

// v2
// layout = "<p>Привет друзья!</p>";

let nums = [];
let n = "";
for (let i = 0; i < layout.length; i++) {
    // console.log(i, "=>", n);
    let char = layout[i];
    if (!isNaN(+char) && char !== " ") {
        n += char; // "1" + "0" = "10"
    } else if (n) {
        nums.push(n % 2 === 0 ? n**2 : +n);
        n = "";
    }
}
if (n) {
    nums.push(n % 2 === 0 ? n**2 : +n);
} 
console.log(nums);

/*
    q 2.5
*/
let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

// let start = values.findIndex(el => typeof el === "boolean");
// let end = values.findLastIndex(el => typeof el === "boolean");
// let result = values.slice(start, end+1);
// console.log(result);

// v2

function setStart(arr) {
    if (typeof arr[0] === "boolean") {
        return arr;
    } else {
        arr.shift(); // удалить первый элемент
        return setStart(arr); // повторить действие
    }
}
function setEnd(arr) {
    if (typeof arr[arr.length - 1] === "boolean") {
        return arr;
    } else {
        arr.pop(); // удалить последний элемент
        return setEnd(arr); // повторить действие
    }
}

values = setStart(values);
values = setEnd(values);
console.log(values);

/*
    q 2.7
*/

values = [143,5476,43,5476];
let index = values.findIndex(el => (el + "").length === 4);
console.log(index !== -1 ? index : "Искомый элемент не был найден");

// v2
index = undefined;
for (let i = 0; i <= values.length; i++) {
    let length = (values[i] + "").length; // 456+"" => "456".length => 3
    if (!index && index !== 0 && length === 4) {
        index = i;
    } 
}
console.log(index || index === 0 ? index : "Искомый элемент не был найден");

/*
    q 2.13
*/

let tickets = "Bus: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
// tickets = "Train: . Airplane: ."
let obj = {};
let arr = tickets.split(".")
arr = arr.filter(el => {
    if (el) {
        return el;
    }
});
// console.log("filter", arr);
arr = arr.map(el => {
    return el.split(": ");
});
// console.log("map", arr);
arr.forEach(el => {
    el[0] = el[0].trim();
    obj[el[0].toLowerCase()] = el[1].split(", ");
});
console.log(obj);