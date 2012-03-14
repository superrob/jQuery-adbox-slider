// AdSlider
// Copyright RobseRob.dk - 2012

(function($) {	
$.adSlider = {
	adBoxWidth: 0,
	currentObject: 0,
	objectCount: 0,
	interval_id: 0,
	time: 7500,
	start: function() {
		this.objectCount = $(".adBoxSlide").length;
		this.adBoxWidth = $(".adBox").width();
		
		$(".adBoxSlide:gt(0)").css("left", this.adBoxWidth);
		$(".adBoxSlide").show();
		$.adSlider.interval_id = setInterval("$.adSlider.slide()", $.adSlider.time)
		$(window).focus(function() {
    		if (!$.adSlider.interval_id) $.adSlider.interval_id = setInterval("$.adSlider.slide()", $.adSlider.time); 
		});
		
		$(window).blur(function() {
			clearInterval($.adSlider.interval_id);
			$.adSlider.interval_id = 0;
		});
	},
	slide: function () {
		if (this.objectCount > 1) {
			var newTarget;
			if (this.objectCount - 1 == this.currentObject) {
				newTarget = 0;
			} else {
				newTarget = this.currentObject + 1;
			}
			$(".adBoxSlide:eq("+this.currentObject+")").animate({"left": -this.adBoxWidth}, 1500, function() {$(this).css("left", $.adSlider.adBoxWidth)});
			$(".adBoxSlide:eq("+newTarget+")").animate({"left": 0}, 1500);
			this.currentObject = newTarget;
		}
	}
}
})(jQuery);