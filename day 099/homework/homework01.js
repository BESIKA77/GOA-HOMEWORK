const a = {
    name: "andria",
    age: 14,
    grade: "8",
    i: true,
    
    idk: function() {
        return `name: ${this.name}, age: ${this.age}, grade: ${this.grade}, random: ${this.i}`;
    }
};
a.grade = "8";
console.log(student.idk()); 