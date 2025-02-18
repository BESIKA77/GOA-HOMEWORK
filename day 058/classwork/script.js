const Me = {
    name: "andria", 
    age: 14,
    surname: "ალავიდზე", 
    birthday: "21 september", 
    favHoliday: "christmas"
};


console.log(Me.name);
console.log(Me.age);
console.log(Me.surname);
console.log(Me.birthday);
console.log(Me.favHoliday); 


Me.age = 13.0;
Me.surname = "Alavidze";

console.log(Me);

Me.group = "34"; 


delete Me.favHoliday;


console.log(Me);
