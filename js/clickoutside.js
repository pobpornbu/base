$.fn.clickoutside = function(callback) {
    var outside = 1, self = $(this);
    self.cb = callback;
    this.click(function() {
        outside = 0;
    });
    $(document).click(function() {
        outside && self.cb();
        outside = 1;
    });
    return $(this);
};

// if (this.$selected.hasClass("active") && !this.$select.is(e.target) && !this.$select.has(e.target).length){
    // if(this.$selected.hasClass("active")) {
    // }
// }
