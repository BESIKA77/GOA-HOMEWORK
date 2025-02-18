let car = {
    brand: "Bmw",
    model: "M4",
    year: 2019,
    color: "Blue",
    weight: "1000kg",
    description: function() {
        return `ამ მანქანის ბრენდია ${this.brand}, მოდელია ${this.model}, და გამოიცა ${this.year}-ში. მისი ფერი არის ${this.color}, ხოლო წონა ${this.weight}.`;
    }
};

console.log(car.description());