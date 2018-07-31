function add(x: number, y: number): number {
    return x + y;
}

// 無名関数
let myAdd = function(x: number, y: number): number { return x + y; };

// => numberは戻り値の型
let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

// 片側のみ型指定した場合、型が推測される(contextual typing)
let myAdd3: (x: number, y: number) => number =
    function(x, y) { return x + y; };

// error
//let myAdd5 = function(x, y) { return x + y; };


// es6アロー 無名関数
let myAdd4 = (x: number, y: number): number =>  {return x + y};
let myAdd5: (x: number, y: number) => number = (x, y) =>  {return x + y};

myAdd(2,2);
myAdd2(1,2);
