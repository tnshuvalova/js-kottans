/*
Напишите конструктор my_$, который принимает аргументом DOM селектор.
 
Реализуйте методы width, height которые соответсвенно изменяют ширишу и высоту всех селекторов, 
которые мы определили ранее.
 
Пример:
var $div = $('div') 
console.log( $div ) //показать все div на странице.
 
var $red = $('.red') 
console.log( $red ) //показать все DOM элементы с классом .red, которые присутсвуют на странице
 
$red.width('100px') //изменяет текущую высоту до 100px всех DOM элементов с классом .red
*/
$(document).ready(function(){

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

// for(var i = 0, l = style.length; i < l; i++){
//     var prop = style[i];
//     var val = style.getPropertyValue(prop);
//     returns[prop] = val;
// }

// alert(document.querySelectorAll('div')[0].style.width);
describe('Task#1 - my_$', function () {

  beforeEach(function () {
  });

  it('should be defined', function(){
    expect(my_$).toBeDefined();
    
  })
  describe('should fetch dom elements by selectors', function(){
    it('for tagname', function(){
      expect(my_$('rt').length).toBe(2)
      console.log(typeof my_$('rt'), my_$('rt').constructor)
    })
    it('for id', function(){
      expect(my_$('#my-id').length).toBe(1)
    })
    it('for class', function(){
      expect(my_$('.my-class').length).toBe(2)
    })
    it('for descendant selectors', function(){
      expect(my_$('body rt').length).toBe(2)
    })
  })
  describe('my_$#width', function(){
    it('should be defined', function(){
      expect(my_$('#my-id').width).toBeDefined()
    })
    it('should return width value(s) if called without arguments', function(){
      expect(my_$('#my-id').width()).toEqual(['0px'])
      expect(my_$('.my-class').width()).toEqual(['0px', '0px'])
    })
    it('should set width value if called with numeric value', function(){
      expect(my_$('#my-id').width('10px').width()).toEqual(['10px'])
      expect(my_$('.my-class').width('10px').width()).toEqual(['10px', '10px'])
    })
  })
  describe('my_$#height', function(){
    it('should be defined', function(){
      expect(my_$('#my-id').height).toBeDefined()
    })
    it('should return height value(s) if called without arguments', function(){
      expect(my_$('#my-id').height()).toEqual(['0px'])
      expect(my_$('.my-class').height()).toEqual(['0px', '0px'])
    })
    it('should set height value if called with numeric value', function(){
      expect(my_$('#my-id').height('10px').height()).toEqual(['10px'])
      expect(my_$('.my-class').height('10px').height()).toEqual(['10px', '10px'])
    })
  })
})

/*
 Написать реализацию CSS геттеро-сеттера в jQuery которая может принимать на вход ключ значение или объект
 со значениями. Для стилизации текущего селектора: цвет, dimensions и других параметров( стоит
 огранничиться 5 параметрами, так как их слишком много ). Сделать возможным, чтобы эти методы были
 chainable. 
 Бонусные очки: добавить возможность, передавать второй /третий аргумент как время, чтобы стили
 применились через какое-то время. 
*/
describe('Task#2 - my_$css', function() {
  beforeEach(function() {
    my_$('#my-id').width('0px');
  });

  it('should be defined', function() {
    expect(my_$).toBeDefined();
  });

  describe('my_$#css', function() {
    it('should set width value if called using css single setter', function() {
      expect(my_$('#my-id').css('width', '20px').width()).toEqual(['20px']);
      expect(my_$('#my-id').css({
        'width': '30px',
        'height': '100px'
      }).width()).toEqual(['30px']);
    });
    it('should set width value if called using css multiple setter', function() {
      expect(my_$('#my-id').css('width', '20px').css('width', '10px').width()).toEqual(['10px']);
      expect(my_$('#my-id').css('width', '10px').css({
        'width': '20px',
        'height': '10px'
      }).width()).toEqual(['20px']);
    });

    it('should set width value with 1 sec timeout using css single setter', function() {
      jasmine.Clock.useMock();
      expect(my_$('#my-id').css('width', '500px', 1000).width()).toEqual(['0px']);
      jasmine.Clock.tick(1000);
      expect(my_$('#my-id').width()).toEqual(['500px']);
    });

    it('should set width value with 1 sec timeout using css multiple setter', function() {
      jasmine.Clock.useMock();
      expect(my_$('#my-id').css({
        'width': '200px'
      }, 1000).width()).toEqual(['0px']);
      jasmine.Clock.tick(1000);
      expect(my_$('#my-id').width()).toEqual(['200px']);
    });
  });
});

});