$(document).ready(function () {

  // SideNav link onClick
  $("#sidenav-home, #sidenav-about, #sidenav-projects, #sidenav-contact").click(function () {
    // Hide sidenav
    $('#sidenav').animate({opacity: 0}, 400);
    // display none after the sidenav animation is done
    setTimeout(function(){
      $("#sidenav, #sidenav a").css( 
        'display', 'none' 
      );
    }, 400);

    // Make the web scrollable again
    $('body').css("overflow", "initial");

    // Show Menu icon
    $("#burger-icon .menu").css( 
      'display', 'inline-block' 
    );
    // Hide Close icon
    $("#burger-icon .close").css( 
      'display', 'none' 
    );

  });

  
});