var Car = /** @class */ (function () {
    function Car(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        this.currentYear = new Date().getFullYear();
        return this.currentYear - this.year;
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
