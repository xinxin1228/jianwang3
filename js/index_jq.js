$(function(){
	const boxs_one = $("div[id='box01']")
	const img_one = ["./image/nav-1-active-f5ca1742.png.webp","./image/nav-2-active-a27ba5ba.png.webp","./image/nav-3-active-68c5f923.png.webp","./image/nav-4-active-2b4ae8a4.png.webp","./image/nav-5-active-78ade3b6.png.webp"]
	const img_two = ["./image/nav-1-f3910735.png.webp","./image/nav-2-9722f17d.png.webp","image/nav-3-18363013.png.webp","./image/nav-4-811c2ca8.png.webp","./image/nav-5-d09bb4ea.png.webp"]
	const boxs_two = $("img[id='box02']")
	let one = 0
	function styly_one(one){
		$.each(boxs_one,function(index,value){
			$(value).removeClass("hover")
		})
		$.each(boxs_two,function(index,value){
		$(value)[0].src = img_two[index]
		})
		$(boxs_one[one]).addClass('hover')
		$(boxs_two)[one].src = img_one[one]
	}
	styly_one(one)
	$.each(boxs_one,function(index,value){
		$(value).mouseover(function(){
			one = index
			styly_one(one)
		})
	})
	var time_one = setInterval(function(){
		one++
		styly_one(one%boxs_one.length)
	},3000)
	
	
	//第一个视频弹出
	const mark = $("#mark")
	const mv_one = $("#mp4_one")
	const movie = $("#movie")
	const del_one = $(".del_one")
	const mp4 = $("#mp4_one_one")
	function style_two(){
		$(window).scroll(function(){
			scr()
		})
	}
	scr()
	style_two()
	$(mp4).trigger('pause');
	movie.click(function(){
		$(mp4).trigger( "play" );
		show_one()
		// styly_two()
	})
	del_one.click(function(){
		hide_one()
		$(mp4).trigger('pause');
	})
	
	function scr(){
			let ww = $(window).width()
			let wh = $(window).height()
			let st = $(window).scrollTop()
			let sl = $(window).scrollLeft()
			let w = $(window).width()
			let h = $(window).height()
			mark.css({
				top:st,
				left:sl
			})
			mv_one.css({
				top:(wh-h)/2+st,
				left:(ww-w)/2
			})
	}
	function show_one(){
		mark.show()
		del_one.show()
		mv_one.show()
	}
	function hide_one(){
		mark.hide()
		del_one.hide()
		mv_one.hide()
	}
	
	
	
	
	//第二个视频弹出
	const playing = $(".feeds_center")
	const mv = $("#mp4_two")
	const off = $("#off")
	const btn = $("#btn_two")
	const ear = $("#ear")
	btn.css({
		top:(playing.height()-btn.height())/2,
		left:(playing.width()-btn.width())/2
	})
	ear.css({
		top:(playing.height()-ear.height())/2,
		left:(playing.width()-ear.width())/2
	})
	function style(){
		$(window).scroll(function(){
			let ww = $(window).width()
			let wh = $(window).height()
			let w = mv.width()
			let h = mv.height()
			let st = $(window).scrollTop()
			let sl = $(window).scrollLeft()
			mv.css({
				top:st,
				left:sl
			})
			mark.css({
				top:st,
				left:sl
			})
		})
	}
	style()
	$("#mp4_two_two").trigger('pause')
	function show(){
		mark.show()
		off.show()	
		mv.show()
		$("#mp4_two_two").trigger('play')
	}
	function hide(){
		mark.hide()
		off.hide()
		mv.hide()
		$("#mp4_two_two").trigger("pause")
	}
	playing.click(function(){
		show()
	})
	off.click(function(){
		hide()
	})
})