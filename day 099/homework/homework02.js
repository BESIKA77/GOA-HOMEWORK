function Car(b, m, yrs) {
    this.b = b;
    this.m = m;
    this.yrs = yrs;
    this.random = function() {
        return `car b: ${this.b}, mdl: ${this.m}, outyrs ${this.yrs}`;
    };
}
const car1 = new Car("jema", "torola", 202123132);
const car2 = new Car("la", "idk", 203232);
const car3 = new Car("a", "car911", 202332);
console.log(car1.random());
console.log(car2.random());
console.log(car3.random());