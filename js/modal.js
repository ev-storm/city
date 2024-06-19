


$('.modal-over').hide();
$('.modal').hide();

$('.modal__btn').click(function(){
	$('.modal-over').fadeIn();
	$('.modal').show();
	$('.modal').css({
		'transform': 'translateY(0px)',
		'transition': '0.7s',
	})
});

$('.modal-over').click(function(){
	$('.modal-over').fadeOut();
	$('.modal').fadeOut(400);
	$('.modal').css({
		'transform': 'translateY(-200px)',
		'transition': '0.7s',
	})
	
	
});