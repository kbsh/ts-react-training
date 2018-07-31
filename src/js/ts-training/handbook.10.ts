// オプション引数
let hand10 = (x:number, y?:number):number =>  {
    if (y)
        return x + y
    else
        return x
};

hand10(1,2)
hand10(1)

// デフォルト引数
let hand10_2 = (x:number, y:number = 2):number =>  {
    return x + y
};

hand10_2(1,2)
hand10_2(1)

// デフォルト引数の順番が最後じゃない場合
function buildName(firstName: string = "Will", lastName: string) {
// オプション引数はできない
//function buildName(firstName?: string, lastName: string) {
        return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"


// 可変長引数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
let employeeName2 = buildName2("Joseph");// 省略も可能
