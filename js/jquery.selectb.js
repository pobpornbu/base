(function( $, window, document, undefined ) {
  // returns the tab content for a tab
  var selected = function(){
    return $(this.next('.select__selected'));
  },

  lists = function(){
    return $(this.next('.select__options'));
  },

  listText = function(ul) {
    return $(ul.find("li").attr("rel"));
  },

  // deactive the old active tab, mark the li as active
  toggle = function(selected) {
    // wrapper(selected.hasClass('active').removeClass('active').next('.select__options')).hide();
    selected.toggleClass('active').next('.select__options').toggle();
  },

  // actives the tab on click
  selectClick = function(ev) {
    ev.preventDefault();
    toggle($(ev.currentTarget))
  };

  // a simple tab plugin
  $.fn.simpleSelect = function() {

      this.each(function() {

        var el = $(this),
            numberOfOptions = el.children('option').length,
            $selectWrap = el.wrap('<div class="select__wrap"></div>');

        el.hide();

        el.after('<div class="select__selected"></div>');

        if( this.options.theme ){
            $selectWrap.addClass( this.options.theme );
        }

        var $styledSelect = el.next('div.select__selected'),
            $list = $('<ul />', {'class': 'select__options'}).insertAfter($styledSelect),
            $listItems = $list.children('li').addClass('select__option');

        $styledSelect.text(el.children('option').eq(0).text());


        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: el.children('option').eq(i).text(),
                rel: el.children('option').eq(i).val(),
                class: el.children('option').eq(i).attr('class')
            }).appendTo($list);
        }

        el.on("click", selected, selectClick);
        // el.addClass("tabs").delegate("li", "click",tabClick)
        //     .children("li:gt(0)")
        //     .each(function() {
        //       tab($(this)).hide();
        //     });

        toggle(el);
      })
  }

})( jQuery, window, document );