function checkIfNumber(x){
    if(typeof x !== 'number'){
        throw new TypeError(x+' is not number');
    }
}

function checkNumbers(a,b){
    checkIfNumber(a);
    checkIfNumber(b);
}

exports.add = function(a,b){
    checkNumbers(a,b);
    return a+b;
};

exports.sub = function(a,b){
    checkNumbers(a,b);
    return a-b;
};

exports.multiply = function(a,b){
    checkNumbers(a,b);
    return a*b;
};

exports.divide = function(a,b){
    checkNumbers(a,b);
    return a/b;
};