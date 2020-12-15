$(document).ready(function() 
{$('.burger').click(function(event) {
		$('.burger, .header_menu').toggleClass('active');	
		$('body').toggleClass('lock');
	})
});