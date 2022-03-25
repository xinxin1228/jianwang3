$(function(){
	const navs = $("li[id='lower']")
	const nav = $("nav[id='nav']")
	var st = $(window).scrollTop()
	nav.hide()
	scroll()
	show()
	style()
	function scroll(){
		$(window).scroll(function(){
			st = $(window).scrollTop()
		show()
		style()
		})
	}
	function show(){
	 st = $(window).scrollTop()
		if(st>=160)
		{
			nav.show(400)
		}else{
			nav.hide(400)
		}
	}
	$.each(navs,function(index,value){
		$(value).click(function(){
			style()
			switch(index){
				case 0:
					$('html,body').animate({
					scrollTop:$("header").offset().top
					},600)
					break;
				case 1:
					$('html,body').animate({
					scrollTop:$(".animate").offset().top
						},600)
					break;
				case 2:
					$('html,body').animate({
					scrollTop:$(".news").offset().top+61
						},600)
					break;
				case 3:
					$('html,body').animate({
					scrollTop:$(".movies_title").offset().top+61
						},600)
					break;
				case 4:
					$('html,body').animate({
					scrollTop:$(".sect").offset().top+61
						},600)
					break;
				case 5:
					$('html,body').animate({
					scrollTop:$(".plays_title").offset().top+61
						},600)
					break;
				case 6:
					$('html,body').animate({
					scrollTop:$(".feeds").offset().top+61
						},600)
					break;
				case 7:
					$('html,body').animate({
					scrollTop:$(".end").offset().top+61
						},600)
					break;
			}
		})
	})
	function style(){
		$(navs[0]).css({
			'background-position-y': -64,
			'background-position-x':0
		})
		$(navs[1]).css({
			'background-position-y': -153,
			'background-position-x':0
		})
		$(navs[2]).css({
			'background-position-y': -247,
			'background-position-x':0
		})
		$(navs[3]).css({
			'background-position-y': -340,
			'background-position-x':0
		})
		$(navs[4]).css({
			'background-position-y': -430,
			'background-position-x':0
		})
		$(navs[5]).css({
			'background-position-y': -523,
			'background-position-x':0
		})
		$(navs[6]).css({
			'background-position-y': -617,
			'background-position-x':0
		})
		$(navs[7]).css({
			'background-position-y': -707,
			'background-position-x':0
		})
		
		if(st>=0&&st<$(".animate").offset().top){
			$(navs[0]).css({
				'background-position-y': -64,
				'background-position-x':79
			})
		}else if(st>=$(".animate").offset().top&&st<$(".news").offset().top+60){
			$(navs[1]).css({
				'background-position-y': -153,
				'background-position-x':79
			})
		}else if(st>=$(".news").offset().top+60&&st<$(".movies_title").offset().top+60){
			$(navs[2]).css({
				'background-position-y': -247,
			'background-position-x':79
			})	
		}else if(st>=$(".movies_title").offset().top+60&&st<$(".sect").offset().top+60){
			$(navs[3]).css({
				'background-position-y': -340,
				'background-position-x':79
			})	
		}else if(st>=$(".sect").offset().top+60&&st<$(".plays_title").offset().top+60){
			$(navs[4]).css({
				'background-position-y': -430,
				'background-position-x':79
			})	
		}else if(st>=$(".plays_title").offset().top+60&&st<$(".feeds").offset().top+60){
			$(navs[5]).css({
				'background-position-y': -523,
				'background-position-x':79
			})	
		}else if(st>=$(".feeds").offset().top+60&&st<$(".end").offset().top+60){
			$(navs[6]).css({
				'background-position-y': -617,
				'background-position-x':79
			})	
		}else if(st>=$(".end").offset().top+60){
			$(navs[7]).css({
				'background-position-y': -707,
				'background-position-x':79
			})	
		}
	}
})