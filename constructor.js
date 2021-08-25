class Car {
    constructor(doors, wheels, color) {
        this.doors = doors;
        this.wheels = wheels;
        this.color = color;
    }
}

const audi = new Car(2, 4, "Vermelho");
const jac = new Car(4, 4, "Preto");

console.log(audi);
console.log(jac);