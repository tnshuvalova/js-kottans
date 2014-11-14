var a = {
  'p': 1,
  'r': {
    's': 't'
  },
  'u': {
    'f': {
      'z': 'x'
    }
  }
};

function deepCopy(o) {
  var tmp = {};
  if(o!==null||typeof tmp != 'object')
    return o;
  else{
    for(var p in o){
      tmp[p] = deepCopy(o[p]);
    }
  }
  return tmp;
};

var b = deepCopy(a);
console.log(b);
