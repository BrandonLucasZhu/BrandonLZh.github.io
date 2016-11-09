$(window).on("load",function() {
  $(window).scroll(function() {
    $(".container").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top ;
      var windowBottom = $(window).scrollTop();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom >= windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
            $(this).fadeTo(2000,1);
          }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(2000,0);
          }
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});
	