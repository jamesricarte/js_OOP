console.log("Hello World!");
console.log("Boom Panes!");
console.log(" ");

//Basic class declaration
class Animal {
    speak() {
        console.log(`the ${this.name} makes a sound.`);
    }
}

const dog = new Animal();
dog.name = "doggu";
dog.speak();

class Person {
    name;
    age;

    setData(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getData() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person();
person1.setData("James", 21);
console.log(person1.getData());
console.log(" ");

//Using Getter and Setter Methods
class Person2 {
    _name;
    _age;

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value >= 0) {
            this._age = value;
        } else {
            this._age = "Age must be positive.";
        }
    }
}

const person2 = new Person2();
person2.name = "James";
person2.age = -1
console.log(person2.name);
console.log(person2.age);
console.log(" ");

//Define a class with a constructor

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person3 = new Person3("James", 21);
person3.greet();

//Inheritance

class Student extends Person3 {
    constructor(name, age, year) {
        super(name, age);
        this.year = year;
    }

    greet() {
        console.log(`Hello, I am ${this.name}, a ${this.year}rd year student`);
    }
}

const student1 = new Student("James", 21, 3);
student1.greet();
console.log(" ");

//Encapsulation

class BankAccount {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;     
    }

    getBalance() {
        return `Balance: ${this.#balance}`;
    }

    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
        }
    }
}

const account = new BankAccount("James", 2000);
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
console.log(" ");

//Polymorphism

class Animal2 {
    sound() {
        console.log("This animal makes a sound");
    }
}

class Dog extends Animal2 {
    sound() {
        console.log("The dog barks");
    }
}

class Cat extends Animal2 {
    sound() {
        console.log("The cat meows");
    }
}

const dog2 = new Dog();
const cat = new Cat();

dog2.sound();
cat.sound();
console.log(" ");

//Access modifiers
//Public

class Person4 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person4 = new Person4("James");
console.log(person4.name);
person4.greet();
console.log(" ");

//Private
class BankAccount2 {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;     
    }

    getBalance() {
        return `Balance: ${this.#balance}`;
    }

    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
        }
    }
}

const account2 = new BankAccount2("James", 2000);
console.log(account2.getBalance());
account2.deposit(500);
console.log(account2.getBalance());
console.log(" ");

//Protected
class Employee {
    _salary;

    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    getSalary() {
        return this._salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    totalComponensation() {
        return `Salary + bonus: ${this._salary + this.bonus}`;
    }
}

const manager = new Manager("James", 15000, 2000);
console.log(manager.totalComponensation());
console.log(" ");

// Combining Access Modifiers
class Vehicle {
    _speed;
    #fuel;

    constructor(make, fuel) {
        this.make = make;
        this.#fuel = fuel;
        this._speed = 0;
    }

    drive() {
        if (this.#fuel > 0) {
            this._speed += 10;
            this.#fuel -= 1;
            console.log(`Driving at ${this._speed} km/h. Fuel left: ${this.#fuel}`);
        } else {
            console.log(`Refused. Current fuel: ${this.#fuel}`);
        }
    }

    refuel(amount) {
        this.#fuel += amount;
        console.log(`Refueled. Current fuel: ${this.#fuel}`);
    }
}

class SportsCar extends Vehicle {
    boost() {
        if(this._speed > 0) {
            this._speed += 20;
            console.log(`Boosted to ${this._speed} km/h!`);
        } else {
            console.log("Start driving before boosting!");
        }
    }
}

const sportsCar = new SportsCar("Ferrari", 10);
sportsCar.drive();
sportsCar.boost();
console.log(" ");

//Using static keyword
class Example {
    static message = "This is static";
}

const obj = new Example();
console.log(Example.message);
console.log(obj.message);
console.log(" ");

//static outside the class
class Config {}
Config.appName = "Myapp";
console.log(Config.appName);
console.log(" ");

//equality operator
console.log(5 === 5);
console.log(0 === false);
console.log(" ");

//Object literals
const car = {
    brand: "Toyota",
    drive() {
        console.log("Driving...");
    }
}
car.drive();
console.log(" ");

//Accessing Nested Objects
const person =  {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
}

//Two Way to access
console.log(person.address.city);
console.log(person.address["zip"]);
console.log(person["address"].street);

//Handling Undefined Nested Properties (Using optional chaining)
const company = {
    name: "Tech Corp",
    employees: [
        {
            name: "Alice",
            roles: "Developer",
            skills: [
                {
                    programming: ["Javascript", "Phython", "C++"],
                    tools: ["VS code", "Git", "Jira"]
                }
            ]
        }
    ]
}

console.log(company.employees[1]?.skills?.programming);