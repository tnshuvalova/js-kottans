module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, cur){
        return acc.concat(fn(cur));
    }, []);
};
