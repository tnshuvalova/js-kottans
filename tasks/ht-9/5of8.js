module.exports = function average(...args) {
    return args.reduce((s,v)=>s+v)/args.length;
};
