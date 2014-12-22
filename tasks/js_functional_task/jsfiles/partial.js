var slice = Array.prototype.slice

function logger(namespace) {
    return function(str){
        [].unshift.call(arguments, namespace.toUpperCase());
        console.log.apply(null, arguments);
    };
}

module.exports = logger
