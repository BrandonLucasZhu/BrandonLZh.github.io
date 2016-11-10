$(document).ready(function() {
  $(window).scroll(function() {
    $(".container").each(function() {
      // Find vertical height of element
      var objectBottom = $(this).offset().top; //the objects fixed height
      var windowBottom = $(window).scrollTop(); //height increasing as scroller is scrolling down
      
      //Once element is greater than objects fixed height, then the object will fade out
      if (objectBottom >= windowBottom) { 
        if ($(this).css("opacity")==0) {
            $(this).fadeTo(2000,1);
          }
      } else { //object is solid when in view
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(2000,0);
          }
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});

$(document).on('click', 'a', function(event){
  event.preventDefault();

  $('html,body').animate({
    scrollTop:$( $.attr(this, 'href')).offset().top
  },1800);

});



/*
$('a#resume').click(function(){
  window.scrollBy({
    top: 300,
    left:0, 
    behaviour:'smooth'
  });
});
*/


/*	
$('a#resume').on('click',function(event){

  if (this.hash !== ""){

    event.preventDefault();


  var hash = this.hash; 

  $('html,body').animate({
    scrollTop:$(hash).offset().top
  },800,fuction(){

    window.location.hash = hash;
  });
  }
 };  
*/