/*
    Объект - существительное
*/

// const ppl = {
//     глаза: 2,
//     руки: 2,
//     хвост: false,
//     имя: "Вася",
//     профессия: "дальнобойщик",
//     день_рождения: "2000-12-24"
// }

const js = {
    /*
        this - указание на себя (Я, мой)
    */
    title: "JavaScript. Полное руководство. 7-е издание",
    author: "Д. Флэнаган",
    genre: "it fantasy",
    "pages count": 720,
    year: 2021,
    description: "Много букв...",
    reviews: [
        {user: "Max", text: "Good book! I love it!"},
        {user: "Stacy", text: "Не знала об этой книге, но увидела и поняла, что это судьба..."},
        {user: "Tony", text: "Ничего не понятно, но очень интересно =)"},
        {user: "Bayt", text: "Очень вкусная книга! Отлично помогает резаться зубам"}
    ],
    getInfo: function() {
        return `Книга «${this.title}» в жанрре ${this.genre} была написана автором "${this.author}" в ${this.year} году`;
    },
    getReview: function(n) {
        const person = this.reviews[n];
        if (!person) {
            return "Такого отзыва не существует";
        }
        return `Пользователь ${person.user} написал: «${person.text}»`;
    },
    show: function() {
        let str = `${this.getInfo()}\nОтзывы о книге:`;
        for (let i = 0 ; i < this.reviews.length; i++) {
            str += `\n\t${this.getReview(i)}`
        }
        return str;
    }
}

/*
    Парадигмы программирования:
        Полиморфизм - код нужно переиспользовать многократно (функции)
        Наследование - не надо заново создавать то что уже есть, можно переиспользовать имеющуюся конструкцию и дополнить ее
        Инкапсуляция - код не должен выполнять то, что он не должен выполнять (тихий код) - внутри функций нет вывода в консоль
*/

// console.log(book.title);
// console.log(book.reviews[book.reviews.length - 1].text);
// console.log(book["pages count"]);
// console.log(js.getInfo());
// console.log(js.getReview(7));
// console.log(js.getReview(2));
// console.log(js.show());

const getData = function() {
    let str = `${this.getInfo()}\nОтзывы о книге:`;
    for (let i = 0 ; i < this.reviews.length; i++) {
        str += `\n\t${this.getReview(i)}`
    }
    return str;
}

/*
    apply
    call
    bind
*/

// let foo = getData.bind(js);
// console.log(getData.call(js));

// let A = {
//     x: 2,
//     y: 6
// }
// let B = {
//     x: 5,
//     y: 0
// }
// let C = {
//     x: 2,
//     y: 0
// }

class Point { // класс - заготовка будующего объекта 
    constructor(cX = 0, cY = 0) {
        this.x = cX; // обращение к будущему объекту (не моё, а его)
        this.y = cY;
    }
    getInfo() {
        return `Точка с координатами (${this.x}, ${this.y})`;
    }
}

let A = new Point(); // создание экземпляра класса (объект на основе класса)
let B = new Point(5, 2);
let C = new Point(0, 8);

const getNumber = (max, min) => Math.round(Math.random() * (max - min) + min);
let stars = [];
let starsCnt = getNumber(50, 100);

while(starsCnt--) {
    stars.push(new Point(getNumber(30, -30), getNumber(30, -30)));
}
for (let val of stars) {
    console.log(val.getInfo());
}
// console.log(stars);

/*
    Наследование???
    Animal
        Количество лап
        наличие хвоста
        возможность плавать
        Питание
    Meateats
        Питается мясом
        Острые зубы
        наличие хвоста = true
    Dog
        Лучший друг человека
        Хвостик нужен чтоб вилять
        Есть имя
        Живет на диване
    Korgi
        Окрас
        Длина лап
        Длина шерсти
        Отношение к детям
*/

class Point3D extends Point { // класс Point3D наследуется от класа Point
    constructor(cX, cY, cZ) {
        super(cX, cY); // Point() - вызов родительского конструктора
        this._z = cZ;
    }
    get z() {
        return this._z;
    }
    set z(val) {
        this._z = val;
    }
    get3DInfo() {
        return `Трехмерная точка с координатами (${this.x}, ${this.y}, ${this.z})`;
    }
}

let D = new Point3D(1,2,3);
console.log(D.getInfo());
console.log(D.get3DInfo());