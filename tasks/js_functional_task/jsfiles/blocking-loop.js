function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;
  setTimeout(function(){
    operation();
    return repeat(operation, --num);
  }, 1000);
}

module.exports = repeat
