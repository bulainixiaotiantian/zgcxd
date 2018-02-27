$(function(){

			htmlFont();
			//调整html字体尺寸-------------------------------------------
			function htmlFont(){
				$("html").css("font-size",$(window).width()/750*100+"px");
				$(window).resize(function(){
					$("html").css("font-size",$(window).width()/750*100+"px");
				});
			};

			$(".aside_icon").click(function(){//点击头部右侧图标显示个人中心框
				$(".aside").toggle()
			})
	
})
