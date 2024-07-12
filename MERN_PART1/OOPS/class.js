class Vehicle {
    constructor(brand, model, engine) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }

    getDetails() {
        return `${this.brand} ${this.model} have ${this.engine} engine`;
    }
}

let v1 = new Vehicle("Bugatti", "Chiron", "V8");
console.log(v1.getDetails());