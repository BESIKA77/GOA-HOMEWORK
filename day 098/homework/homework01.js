function personDetails(firstName, currentAge, profession) {
    this.firstName = firstName;
    this.currentAge = currentAge;
    this.profession = profession;
    this.introduce = function() {
        console.log(`My name is ${this.firstName}, ${this.currentAge} years old, and I am a ${this.profession}.`);
    };
}

const person = new personDetails("Ana", 28, "programmer");
person.introduce();
