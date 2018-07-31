interface Named {
    name: string;
}

class Person22 {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person22();


let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;


// プリミティブ型（値型）→オブジェクト型　ダメ
let xx = (a: number) => 0;
let yx = (b: number, s: string) => 0;

// xx の全てのパラメータがyxと互換性がある
yx = xx; // OK

// stringと互換性のあるパラメータがない
// xx = yx; // Error


