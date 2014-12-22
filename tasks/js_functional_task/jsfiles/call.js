function duckCount() {
    return [].slice.call(arguments).
        filter(function(eld){return eld.hasOwnProperty('quack');}).
        reduce(function(ac,el){ac = ac+1||1; return ac;},0);
}

module.exports = duckCount