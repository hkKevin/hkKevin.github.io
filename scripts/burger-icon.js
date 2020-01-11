$(document).ready(function () {

  // Burger icon clicked
  $('#burger-icon').click(function () {
    // Show or Hide sidenav
    if ( $('#sidenav').css('display') == 'flex' ) {
      // Hide sidenav
      $('#sidenav').animate({opacity: 0}, 400);
      // display none after the sidenav animation is done
      setTimeout(function(){
        $("#sidenav, #sidenav a").css( 
          'display', 'none' 
        );
      }, 400);

      // Show Menu icon
      $("#burger-icon .menu").css( 
        'display', 'inline-block' 
      );
      // Hide Close icon
      $("#burger-icon .close").css( 
        'display', 'none' 
      );
      // Allow scrolling
      $('body').css("overflow", "initial");

    } else {
      // Show sidenav
      $('#sidenav').animate({opacity: 1}, 400);
      $("#sidenav a").css( 
        'display', 'block' 
      );
      $("#sidenav").css( 
        'display', 'flex' 
      );

      // Hide Menu icon
      $("#burger-icon .menu").css( 
        'display', 'none' 
      );
      // Show Close icon
      $("#burger-icon .close").css( 
        'display', 'inline-block' 
      );
      // Avoid scrolling
      $('body').css('overflow', 'hidden');
    }
  });
  
});