class Car {

    model:string;
    make:string;
    year:number;
    currentYear:number;
    constructor(model: string, make: string, year: number) {
        this.model = model;
        this.make = make;
        this.year = year;
    }

    getCarAge(): number {
        this.currentYear = new Date().getFullYear()
        return this.currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);


console.log(car.getCarAge());