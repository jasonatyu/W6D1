const curriedSum = function(numArgs) {
    const numbers = [];
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce((a, b) => a + b);
        } else {
            return _curriedSum;
        }
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this; 
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.apply(this, args);
        } else {
            return _curry;
        }
    }
}