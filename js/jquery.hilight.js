// Plugin definition.
;(function( $, window, document, undefined ){
	$.fn.hilight = function( options ) {

			var defaults = {
			    wrapperAttrs : {
			        class: "gallery-wrapper"
			    },
			    // ... rest of settings ...
			};	 
	    // Extend our default options with those provided.
	    // Note that the first argument to extend is an empty
	    // object – this is to keep from overriding our "defaults" object.
	    var opts = $.extend( {}, $.fn.hilight.defaults, options );
	 
	    // Our plugin implementation code goes here.
	    
	    // Iterate and reformat each matched element.
	    return this.each(function() {
	 
	        var elem = $( this );
	 
	        // ...
	 
	        var markup = elem.html();
	 
	        // Call our format function.
	        markup = $.fn.hilight.format( markup );
	 
	        elem.html( markup );
	 
	    });	 		
	};
	 
	// Plugin defaults – added as a property on our plugin function.
	$.fn.hilight.defaults = {
	    foreground: "red",
	    background: "yellow"
	};
	
	$.fn.hilight.format = function( txt ) {
	    return "<strong>" + txt + "</strong>";
	};

})( jQuery, window , document );