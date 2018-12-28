 $(document).ready(function(){
	$('.gg-header .back').click(function(){
		window.history.go(-1);
	})

	$('.gg-select > span').click(function(){
		$('.gg-select ul').show()
		return false;
	})

	$('.gg-select li').click(function(){
		var thisText = $(this).text();
		var thisIndex = $('.gg-select li').index($(this));
		$('.gg-select > span').html('<span>'+ thisText +'<i></i></span>')
		
		$('.gg-services > div').hide().eq(thisIndex).show();
	})

	$(document).click(function(){
		$('.gg-select ul').hide()
	})

	$('.gg-school-tab li').click(function(){
		var thisText = $(this).text();
		var thisIndex = $('.gg-school-tab li').index($(this));
		$(this).addClass('active').siblings().removeClass('active');

		$('.gg-school-lists > div').hide().eq(thisIndex).show();
	})

	$('.gg-footer .icon').click(function(){
		$('.gg-hide-menu').show()
	})

	$('.gg-hide-menu .close').click(function(){
		$('.gg-hide-menu').hide()
	})
	$('.gg-open .close').click(function(){
		$('.gg-open').hide()
	})
	

});
