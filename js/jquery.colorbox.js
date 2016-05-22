function hex(num){
  var hexStr = num.toString(16);
  return hexStr.length === 1 ? "0" + hexStr: hexStr;
}
$.fn.color = function(options){
  options = $.extend({}, $.fn.color.defaults, options);
  var color = "#" +
      hex(options.red) + hex(options.green) +
      hex(options.blue);

  return this.each(function(){
    $(this).css("color", color);
  });
};
$.fn.color.defaults = {
   red: 128, green: 128, blue: 128
}
// $.fn.color.defaults.blue = 0;

var _color = $.fn.color;
$.fn.color = $.extend(function(options){
  if(options === 'random'){
    options = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
  }
  return _color.call(this, options);
}, $.fn.color);

$.widget('demo.colorbox',{
  options: {
    red: 128,
    green: 128,
    blue: 128
  },
  _create: function(){
    var color = "#"+hex(this.options.red)+hex(this.options.green)+hex(this.options.blue);
    this.element.css('backgroundColor', color);
    $('<button>', { text: 'change'}).appendTo(this.element);
    this._bind(this.button, click: function(){
      this.random();
    });
  },
  _setOption: function(key, value){
    // $.Widget.prototype._setOptions.call(this, key, value);
    this._super('_setOptions', key, value);
    this._render();
  },
  _render: function(){
    // var color = "#"+hex(this.options.red)+hex(this.options.green)+hex(this.options.blue);
    var color = this.hex();
    this.element.css('backgroundColor', color);
  },
  _destroy: function(){
    this.button.remove();
  },
  hex: function(){
    return "#"+hex(this.options.red)+hex(this.options.green)+hex(this.options.blue);
  },
  random: function(){
    var colors ={
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
    if( false == this._trigger('random', null, colors))
      return;
    this.option(colors);
  }
});

$('#elem').color({ red: 255, green: 0, blue: 255 });
$('#elem2').colorbox({red: 255});
$('#elem2').colorbox('random');
$('#elem2').data('colorbox')._render();

var c = new $.demeo.colorbox({ blue: 255}, '#elem');
setInterval(function(){
  c.random();
}, 300);
// or
// setInterval(function(){
//   $('#elem').colorbox('random');
// }, 300);

// <div id="elem2" class="elem"></div>
// <div id='elem' class='elem'>
//   direct child
//   <p>hi <span>there</span></p>
//   <p>goodbye</p>
// </div>