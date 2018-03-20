$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(600);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 600 ) {			
			$('nav ul').removeAttr('style');
		 } 
	});//end resize
});//end ready