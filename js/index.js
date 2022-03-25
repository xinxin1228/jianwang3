window.onload = ()=>{
	const submits = document.querySelectorAll("#submit")
	const shows = document.querySelectorAll("#show")
	let index = 0
	function style(index){
			submits[0].className = 'title_left'
			submits[1].className = 'title_right'
			submits[index].className +=' click'
			shows[0].style.display = 'none'
			shows[1].style.display = 'none'
			shows[index].style.display = 'block'
	}
	style(index)
	for(i in submits)
	{
		submits[i].index = i
		submits[i].onclick = function(){
			index = this.index
			style(index)
		}
	}
	
	const imgAr = ["./image/zxjl1-1efe3f7c.png.webp","./image/zxjl2-e9700494.png.webp"]
	const img_one = document.querySelector("#img01")
	const li_one = document.querySelectorAll("#li01")
	let s = 0
	function style_01(s){
		for(i in li_one)
		{
			li_one[i].className = ''
		}
		li_one[s].className = 'active'
		img_one.src = imgAr[s]
	}
	style_01(s)
	for(i in li_one)
	{
		li_one[i].index = i
		li_one[i].onclick = function(){
			s = this.index
			style_01(s)
		}
	}
	setInterval(function(){
		s++;
		style_01(s%li_one.length)
	},2000)
	
	const li_two = document.querySelectorAll("#li_two")
	const img_two = document.querySelector("#img02")
	const imgArr = ["./image/xzjp1-2c7c98dc.png.webp","./image/xzjp2-3c4c4d66.png.webp","./image/xzjp3-0af60cf2.png.webp","./image/xzjp4-ffba5428.png.webp"]
	let two = 0
	function style_02(two){
		for(i in li_two)
		{
			li_two[i].className = ''
		}
		li_two[two].className = 'active'
		img_two.src = imgArr[two]
	}
	style_02(two)
	for(i in li_two)
	{
		li_two[i].index = i
		li_two[i].onclick = function(){
			two = this.index
			style_02(two)
		}
	}
	setInterval(function(){
		two++;
		style_02(two%li_two.length)
	},2000)
	
	
	const movie = document.querySelector("#movie")
	const btn = document.querySelector("#btn")
	btn.style.left = (movie.offsetWidth - btn.offsetWidth)/2+'px'	
	
	btn.style.top = (movie.offsetHeight - btn.offsetHeight)/2+'px'

}