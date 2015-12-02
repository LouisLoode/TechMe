$(document).ready(function(){
	$('#countdown').countdown('2015/12/04 16:30:00', function(event) {
		$(this).html(event.strftime('<span class="clock">%H</span>:<span class="clock">%M</span>:<span class="clock">%S</span>'));
	});
}); 