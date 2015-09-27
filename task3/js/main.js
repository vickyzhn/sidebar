requirejs.config({
	paths: {
		jquery: "jquery-1.11.2"
	}
});
requirejs(['jquery'],function($){
	$('#toTop').on('click',move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	function move(){
		$('html,body').animate({
			scrollTop: 0
		},800);
	}
	function fly(){
		$('html,body').scrollTop(0);
	}
	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#toTop').fadeIn();
		}else {
			$('#toTop').fadeOut();
		}
	}

});