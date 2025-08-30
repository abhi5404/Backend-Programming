class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        console.log(`Student ID: ${this.studentId}`);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
        console.log(`Subject: ${this.subject}`);
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

// Example usage:
let student = new Student("Alice", 20, "S12345");
student.talk();
student.study();
let teacher = new Teacher("Mr. Smith", 40, "Mathematics");
teacher.talk();
teacher.teach();


