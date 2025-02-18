function Person (firstName, lastName, age, country, isWorking) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.isWorking = isWorking;
}

const person1 = new Person("ანდრია 14 წლის")
const person2 = new Person("ანდრია 14 წლის")
const person3 = new Person("ანდრია 14 წლის")
const person4 = new Person("ანდრია 14 წლის")

//კონსტრუქტორი არის ფუნქცია, რომელიც ქმნის ახალ ობიექტებს




function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log("Hi, I am" + this.name + "and I am" + this.age  +"years old." );
      };

}

const person = new Person("Mariami", 16);
person1.introduce();