import { Calculator, test } from "./handbook.20";
let c = new Calculator(2);
test(c, "1+2*33/11="); // prints 9

// exportしていない
// test2(c, "1+2*33/11="); // error
