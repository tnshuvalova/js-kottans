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
  if(o==null||typeof tmp != 'object')
    return o;
  else{
    for(var p in o){
      if(typeof o[p] == 'object') tmp[p] = deepCopy(o[p]);
      else tmp[p] = o[p];
    }
  }
  return tmp;
};

function deepCopy2(o){
  return JSON.parse(JSON.stringify(o));
}

var b = deepCopy(a);
a.p=2;
console.log(b.p);

