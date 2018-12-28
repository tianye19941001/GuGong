 $(document).ready(function(){
	var ty_public = { 
		brower: function(){
			var userAgent = navigator.userAgent; 
		    var isOpera = userAgent.indexOf("Opera") > -1;
		    if (isOpera) {
		        return "Opera"
		    }; 
		    if (userAgent.indexOf("Firefox") > -1) {
		        return "FF";
		    } 
		    if (userAgent.indexOf("Chrome") > -1){
			  return "Chrome";
			 }
		    if (userAgent.indexOf("Safari") > -1) {
		        return "Safari";
		    } 
		    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		    	var IEMethod = userAgent.slice(userAgent.indexOf("MSIE")+5,userAgent.indexOf("MSIE")+6);
		        return IEMethod;
		    }
		},
		stopDefault:function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopBubble:function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		setCookies: function (c_name,value,expiredays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie= c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		},
		getCookies: function(c_name){
			if (document.cookie.length>0){
				c_start=document.cookie.indexOf(c_name + "=")
				if (c_start!=-1){ 
				    c_start=c_start + c_name.length+1 
				    c_end=document.cookie.indexOf(";",c_start)
			    	if (c_end==-1) c_end=document.cookie.length
			   		return unescape(document.cookie.substring(c_start,c_end))
			    } 
			}
			return ""
		}
	}
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
