class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet());