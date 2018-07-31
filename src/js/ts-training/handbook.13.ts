interface PROP {
    length: any;
}

// ジェネリックス （引数、戻り値の型が定義時点で不明）
function getLength<T extends PROP, U>(x: T): U { // （1）
    return x.length;  // （3）
}

alert(getLength<string, number>("総称型"));  // （2）
window.close();




// 動的型付け
function getLength1(x:any) {
    return x.length;
}

let dadwa: string = "1";
let dd: any = dadwa as any;

// 型チェックの厳格さ
// 通常（動的型付け）　＞　ジェネリックス（定義時は型未定）　＞　any（静的型付け）




// ジェネリックス2
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
myIdentity(1);
// myIdentity("1");// error


// ジェネリックスクラス
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };