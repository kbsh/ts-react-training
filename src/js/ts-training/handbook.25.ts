function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

// デコレータのコンストラクタは変更されない
//   Greeter のコンストラクタが呼ばれた後に hello = "override" が実行されるため、結果として hello プロパティは "override" になる
console.log(new Greeter("world")); // Object { property: "property", hello: "override", newProperty: "new property" }
