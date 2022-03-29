"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("\nresult: ".concat(result, "\n"));
    }
    else {
        console.log("\n\nInvalid Input\n\n");
        main();
    }
}
var calculate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '*':
            return firstNum * secondNum;
        case '-':
            return firstNum - secondNum;
        case '/':
            return firstNum / secondNum;
    }
};
var isNumber = function (str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
};
var isOperator = function (operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: return false;
    }
};
main();
