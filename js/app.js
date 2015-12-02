$(document).ready(function(){
	var timerId =
	  countdown(
	    new Date(),
	    function(ts) {
	      document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
	    },
	    countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

	// later on this timer may be stopped
	window.clearInterval(timerId);
	
	$('#countdown').countdown('2015/12/03 16:30:00', function(event) {
		$(this).html(event.strftime('<span class="clock">%H</span>:<span class="clock">%M</span>:<span class="clock">%S</span>'));
	});
});