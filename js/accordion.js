(function ( window, document) {
  'use strict';

  var Accordion = (function() {

    var Accordion = function(element, options) {
      // create reference
      this.buttons   = document.querySelector(element).querySelectorAll('.acc-button');
      this.contents  = document.querySelector(element).querySelectorAll('.acc-content');

      var defaults = {
        closeAll: false
      };
      // Create options by extending defaults with the passed in arugments
      if (arguments[1] && typeof arguments[1] === "object") {
        this.options = extend(defaults, arguments[1]);
      }else{
        this.options = defaults;
      }

      if(this.options.closeAll === true) this.close();

      this.init();
    };

    // Public Methods
    Accordion.prototype = {
      init: function(){
        var self = this;

        [].forEach.call(self.buttons, function(button){

          button.addEventListener('click', function(e){
            if(e.target.nextElementSibling.classList.contains('acc-is-active') === true){
              self.close(e);
            }else{
              self.open(e);
            }
          });

        });
      },

      close: function (e){
        var self = this;
        // e.target.nextElementSibling.classList.remove('acc-is-active');
        [].forEach.call(this.contents, function(content){
          content.classList.remove('acc-is-active');
        });
      },

      open: function (e){
        var self = this;
        [].forEach.call(this.contents, function(content){
          content.classList.remove('acc-is-active');
        });
        e.target.nextElementSibling.classList.add('acc-is-active');
      }
    };

    function extend(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    return Accordion;

  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Accordion;
  else
    window.Accordion = Accordion;

})( window, document );