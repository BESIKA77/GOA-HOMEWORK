// 1
function Person(num, age) {
    this.name = num;
    this.age = age;
}

Person.y.introduce = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};

// 2
function Book(num, nn = "Unknown") {
    this.num = num;
    this.n = nn;
}

Book.num.getDetails = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
};

// 3
function clrom(num) {
    this.students = num;
}

Classroom.numm.countStudents = function() {
    console.log(`Number of students: ${this.students.length}`);
};

// 4
function cnter() {
    this.num = 0;
}

Counter.numm.increment = function() {
    this.num += 1;
};

Counter.numm.getValue = function() {
    return this.num;
};

// 5
function numm() {
    this.num = "off";
}

Light.numm.toggle = function() {
    this.num = this.num === "off" ? "on" : "off";
};