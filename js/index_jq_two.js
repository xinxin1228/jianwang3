$(function(){
	const nav_one = $("div[id='nav_one']")
	let index_one = 0
	const img_one = $("#mv_one")
	const mv_one = ['https://static.jx3.xoyo.com/video/20191126/gfsj_zy.mp4','https://static.jx3.xoyo.com/video/20191126/gfsj_xj.mp4','https://static.jx3.xoyo.com/video/20191126/gfsj_gy.mp4',"https://static.jx3.xoyo.com/video/20191126/gfsj_sl.mp4","https://static.jx3.xoyo.com/video/20191126/gfsj_hh.mp4",'https://static.jx3.xoyo.com/video/20191126/gfsj_sc.mp4']
	function style_one(index_one){
		$(nav_one[0]).css({
			'background-position-x':0
		})
		$(nav_one[1]).css({
			'background-position-x':-58
		})
		$(nav_one[2]).css({
			'background-position-x':-114
		})
		$(nav_one[3]).css({
			'background-position-x':-170
		})
		$(nav_one[4]).css({
			'background-position-x':-226
		})
		$(nav_one[5]).css({
			'background-position-x':-281
		})
		// if(index_one === 1)
		// {
		// 	$(nav_one[index_one]).css({
		// 		'background-position-x': -427,
		// 		'margin-top': -20,
		// 		'background-position-y':20
		// 	})
		// }else{	
		// $(nav_one[index_one]).css({
		// 	'background-position-x': -369-`${(index_one)*56}`
		// })
		// }
		switch(index_one){
			case 0:
			$(nav_one[0]).css({
					'margin-top': -20,
					'background-position-x': -369,
					'background-position-y':20
			 	})
				break;
				case 1:
				$(nav_one[1]).css({
						'margin-top': -20,
						'background-position-x': -427,
						'background-position-y':20
				 	})
					break;
				case 2:
				$(nav_one[2]).css({
						'margin-top': -20,
						'background-position-x': -483,
						'background-position-y':20
				 	})
					break;
				case 3:
				$(nav_one[3]).css({
						'margin-top': -20,
						'background-position-x': -539,
						'background-position-y':20
				 	})
					break;
				case 4:
				$(nav_one[4]).css({
						'margin-top': -20,
						'background-position-x': -595,
						'background-position-y':20
				 	})
					break;
				case 5:
				$(nav_one[5]).css({
						'margin-top': -20,
						'background-position-x': -650,
						'background-position-y':20
				 	})
					break;
				
		}
		img_one[0].src = mv_one[index_one]
	}
	style_one(index_one)
	$.each(nav_one,function(index,value){
		$(value).click(function(){
			index_one = index
			style_one(index_one)
		})
	})
	setInterval(function(){
		index_one++
		style_one(index_one%nav_one.length)
	},5000)
	
	const sect_nav_navs = $(".sect_nav_navs")
	const img_two = $("#img_two")
	const imgArr = ['https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-a7d1a5e6.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-6e4be05c.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-cc34011d.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-f3ca2a29.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-83cd0228.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-b1e24c87.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-8345b6ff.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-fe3cec13.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-00cd2c00.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-defe1f22.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-37cb497b.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-2f4e6512.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-b9d502ff.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-8325c000.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-58389c43.png.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/bg-ddf49a1a.png.webp']
	let two = 0
	function style_two(two){
		$.each(sect_nav_navs,function(index,value){
			if(index === 0)
			{
				$(value).css({
					'background-position-y': 0,
					'width': 85,
					'height': 30,
					'margin-top': 10,
					'background-position-y': 0
				})
			}else{
				$(value).css({
					'background-position-x': `${-88*two-1}`,
					'background-position-y': 0
				})
			}
		})
		if(two === 0)
		{
			$(sect_nav_navs[two]).css({
				'width': 85,
				'height': 41,
				'margin-top': -2,
				'background-position-y': 40
			})
		}else{
			$(sect_nav_navs[two]).css({
				'background-position-y': 40
			})
		}
		img_two.fadeOut(500)
		img_two[0].src = imgArr[two]
		img_two.fadeIn(500)
	}
	style_two(two)
	$.each(sect_nav_navs,function(index,value){
		$(value).mouseover(function(){
			two = index 
			style_two(two)
		})
	})
	let timer = setInterval(function(){
		two++
		style_two(two%sect_nav_navs.length)
	},6000)
	
	
	//多样玩法
	const img_three = $("#img03")
	const imgArr_three = ['https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts0-63f3a4b6.jpg.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts1-cfbdbc61.jpg.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts2-4b79fe02.jpg.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts3-f1788d89.jpg.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts4-cc84f71f.jpg.webp','https://jx3.xoyo.com/zt/2020/05/08/fenliuye-pc/assets/img/ts5-1bd00a1f.jpg.webp']
	const plays = $("li[id='playsImg']")
	let three = 0
	function style_three(three){
		$(plays[0]).css({
			'background-position-x': -278
		})
		$(plays[1]).css({
			'background-position-x': 0
		})
		$(plays[2]).css({
			'background-position-x': -60
		})
		$(plays[3]).css({
			'background-position-x': -113
		})
		$(plays[4]).css({
			'background-position-x': -170
		})
		$(plays[5]).css({
			'background-position-x': -225
		})
		switch(three)
		{
			case 0:
			$(plays[0]).css({
				'background-position-x': -649,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
			case 1:
			$(plays[1]).css({
				'background-position-x': -369,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
			case 2:
			$(plays[2]).css({
				'background-position-x': -428,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
			case 3:
			$(plays[3]).css({
				'background-position-x': -482,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
			case 4:
			$(plays[4]).css({
				'background-position-x': -538,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
			case 5:
			$(plays[5]).css({
				'background-position-x': -594,
				'margin-top': -20,
				'background-position-y':20
			})
			break;
		}
		img_three.hide()
		img_three[0].src = imgArr_three[three]
		img_three.fadeIn(300)
	}
	style_three(three)
	$.each(plays,function(index,value){
		$(value).click(function(){
		three = index
		style_three(three)	
		})
	})
	setInterval(function(){
		three++
		style_three(three%plays.length)
	},3000)
})