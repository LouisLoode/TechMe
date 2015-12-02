$(document).ready(function(){
	
	$("#countdown").countdown("2015/12/03 15:00:00",function(n){
		var totalHours = n.offset.totalDays * 24 + n.offset.hours;
		$(this).html(n.strftime('<span class="clock">'+totalHours+'</span>:<span class="clock">%M</span>:<span class="clock">%S</span>'))
		
	});
		
		
}); 