class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (public theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.theName = "a";
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
