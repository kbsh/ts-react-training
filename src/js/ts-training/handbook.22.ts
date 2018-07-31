namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// いくつかの例を試す
let strings = ["Hello", "98052", "101"];
// validatorを使用
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["Letters only"] = new Validation.LettersOnlyValidator();

// exportしていないからエラー
// validators["ZIP code"] = new Validation.ZipCodeValidator();

// 各文字列が各検証をパスしたかを表示
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}
