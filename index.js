$(document).ready(function(){

	$('button').on('click',
		function() {
			var p = $("p");
	    	p.animate({left: '100px'}, "slow");
	    	p.animate({fontSize: '300%'}, "slow");
	    	$("#fireDiv").fadeIn();
		}

	);






});
