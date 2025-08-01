class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let p1 = new person("adam", 25);
let p2 = new Person("eve", 30);