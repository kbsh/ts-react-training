class Greeter {
    constructor(readonly greeting: string){}
    greet() {
        return "Hello, " + this.greeting;
    }
}

let aaa: Greeter;
aaa = new Greeter("world");
console.log(aaa.greet());