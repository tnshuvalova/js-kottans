var i = process.argv.splice(2);
console.log(`The minimum of [${i}] is ${Math.min(...i)}`);