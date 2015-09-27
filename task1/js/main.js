requirejs.config({
	paths:{
		jquery: 'jquery-1.11.2'
	}
});
requirejs(['jquery'],function($){
	$('#toTop').on('click',fly);//此处可选move或fly，看需求决定
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());

	//以滑动型滚动到顶部
	function move(){
		$('html,body').animate({
			scrollTop: 0
		},800);
	}
	//快速跳转到顶部
	function fly(){
		$('html,body').scrollTop(0);
	}

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#toTop').fadeIn();
		}else {
			$('#toTop').fadeOut();
		}

	}
});