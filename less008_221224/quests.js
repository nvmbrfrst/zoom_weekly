/*
    q 3.1
*/

let car  = {
    model: "Audi", 
    color: "white",
    weight: 1850,
    engine: "170 hp"
}
delete car.engine;
console.log(car);

/*
    q 3.5
*/
const employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
// const employee = [["firstName","Ivan"],["hireDate","21.10.2015"],["hireDate","21.10.2015"]]

let str = "hireDate";

employee.sort((a,b) => {
    // console.log(a,b);
    if (b[0] !== str) {
        return 1
    } else if (a[0] !== str) {
        return -1;
    }
})
if (typeof employee[0] === "object") {
    while (employee[employee.length - 1][0] === str) {
        employee.pop();
    }
}
employee.push(["jobName", "IT PROG"])
console.log(employee);

/*
    q 3.6
*/
const array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", {}]
];

const countString = function (a) {
    let cnt = 0;
    for (let val of a) {
        if (typeof val[1] === "string") {
            cnt++;
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${cnt}`)
}
countString(array);

/*
    q 4.4
*/
let props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}

function getValue() {
    let str = "";
    // console.log(Object.keys(this))
    // console.log(Object.values(this))
    for (let k in this) {
        if (typeof this[k] !== "function") {
            str += `${k}: ${this[k]}, `;
        }
    }
    str = str.slice(0, str.length - 2);
    console.log(`Значения свойств объекта props (${str})`);
}

getValue = getValue.call(props);

/*
    q 5.3
*/
let firstName = "Александр", lastName = "Петров";
class Person {
    constructor(a,b) {
        this.firstName = a;
        this.lastName = b;
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName (str) {
        let data = str.split(" ");
        this.firstName = data[0];
        this.lastName = data[1];
    }
}
let user = new Person(firstName, lastName);
// user.fullName(111)
user.fullName = "Иван Иванов";
console.log(user);
console.log(user.fullName);
/*
    q 5.4
*/
let name = "Pizza", phone = "81234567890";

class Delivery {
    constructor(n, p) {
        this.name = n;
        this.phone = p;
        this.validPhone = /^\+/.test(p)
    }
}
let deliveryName = new Delivery(name, phone);

/*
    q 5.5
*/

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions {
    constructor(n) {
        super();
        this.name = n;
    }
}