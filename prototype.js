const dog = {
    paws: 4,
    breed: "SRD",
    color: "Preto"
}

const newDog = Object.create(dor, {eyes: {value: "Brown"}});

console.log(newDog.paws);
console.log(newDog.breed);
console.log(newDog.color);
console.log(newDog.eyes);

console.log(Object.getPrototypeOf(newDog));

console.log(Object.getPrototypeOf(newDog) == dog);
console.log(Object.getPrototypeOf(dog) == newDog);