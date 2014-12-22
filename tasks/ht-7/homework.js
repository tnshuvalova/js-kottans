function my_$(selector){  
  var res = this;
  res = document.querySelectorAll(selector);
  res.width = function(value){
    if(!value){
      var w_res = [];
      for (var i = res.length - 1; i >= 0; i--) {
        w_res.push(window.getComputedStyle(res[i]).width); 
      }
      return w_res;
    }
    else{
      for (var k = res.length - 1; k >= 0; k--) {
        res[k].style.width = value;
      }
      return res;
    }
  };
  res.height = function(value){
    if(!value){
      var h_res = [];
      for (var i = res.length - 1; i >= 0; i--) {
        h_res.push(window.getComputedStyle(res[i]).height); 
      }
      return h_res;
    }
    else{
      for (var k = res.length - 1; k >= 0; k--) {
        res[k].style.height = value;
      }
      return res;
    }
  };
  res.css = function(style){
    function setStyle(){
      for(var prop in new_style){
        for (var i = res.length - 1; i >= 0; i--) {
          res[i].style[prop] = new_style[prop]; 
        }
      }
    }
    var new_style = {},
      timeout;
    if(typeof style === 'object'){
      new_style = style;
      timeout = arguments[1];
    }
    else{
      new_style[arguments[0]] = arguments[1];
      timeout = arguments[2];
    }

    if(timeout){
      setTimeout(setStyle, timeout);
    }
    else{
      setStyle();
    }

    return res;
  };
  return res;
}