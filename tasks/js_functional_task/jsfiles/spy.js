function Spy(target, method) {
    this.count = 0;
    var tmpf = target[method];
    var redeF = function(){
        count++;
        return tmpf.apply(this, arguments);
    };
    target[method] = redeF;
    return this;
}

module.exports = Spy
