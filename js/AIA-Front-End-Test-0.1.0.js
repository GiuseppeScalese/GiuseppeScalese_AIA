/* HTML5 design example - v0.1.0 -2015-11-22 */$(document).ready(function(){

  //Click handler - performs the mobile menu toggle
  $("#mobileMenu > span").click(function(){
    $("#desktopNav").toggle();
  });

  //The toggle method adds a style attribute to the navigation element by default. 
  //To fix this we need to remove the "style" attribute using the removeAttr method when we are not in mobile view.
  $(window).resize(function(){
    if(window.innerWidth > 480) {
      $("#desktopNav").removeAttr("style");
    }
  });

});

