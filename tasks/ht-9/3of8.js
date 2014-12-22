var inputs = process.argv.slice(2);
// console.log(inputs);
var result = inputs.map(x=>x.slice(0,1))
                    .reduce((s,x)=>s+x);
console.log(`[${inputs}] becomes \"${result}"`);                    