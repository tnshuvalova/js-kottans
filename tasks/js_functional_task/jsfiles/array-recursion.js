function reduce(arr, fn, initial) {
    if(!arr.length) return initial;
    var el = arr.shift();
    fn(initial, el, arr.length-1, arr);
    return reduce(arr,fn,initial);
}

module.exports = reduce

