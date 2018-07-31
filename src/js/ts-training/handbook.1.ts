interface StringArray {
    // 連想配列のインターフェース
    // index: string部分はインデックスの型を指定している
    // 後ろの: stringは値の型を指定している
    [index: string]: string;
}

let myArray: StringArray;
myArray = {asia: "japan", europe: "france"};
let myStr: string = myArray["europe"];