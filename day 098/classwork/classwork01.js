function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    
    this.introduce = function() {
        return `ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერი არის ${this.phoneNumber}, ჩემი ემაილი არის ${this.email}.`;
    };
}

let user1 = new User('Andria', 'Alavidze', '595 54  ** **', 'andria.alavidze1@gmail.com', '36456513', '36456513');
let user2 = new User('Beso', 'Gelxauri', '599 32 ** **', 'besogelxauri1@gmail.com', '986784', '986784');
let user3 = new User('Andria', 'Kobaxidze', '597 43 ** **', 'andriakobaxidze1@gmail.com', '3742534434', '3742534434');

console.log(user1.introduce());
console.log(user2.introduce());
console.log(user3.introduce());