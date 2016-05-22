(function() {
  // returns the tab content for a tab
  var tab = function(li) {
    return $(li.find("a").attr("href"))
  },

  // deactivate the old active tab, mark the li as active
  activate = function(li) {
    tab(li.siblings('.active')
          .removeClass('active')).hide()
    tab(li.addClass('active')).show();
  },

  // activates the tab on click
  tabClick = function(ev) {
    ev.preventDefault();
    activate($(ev.currentTarget))
  }

  // a simple tab plugin
  $.fn.simpleTab = function() {

    this.each(function() {
      var el = $(this);

      el.addClass("tabs").delegate("li", "click",tabClick)
          .children("li:gt(0)")
          .each(function() {
            tab($(this)).hide();
          });

      activate(el.children("li:first"));
    })
  }
})();