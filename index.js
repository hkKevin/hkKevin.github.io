$(document).ready(function () {

  AOS.init(); // Initialize Animation On Scroll

  var clipboard = new ClipboardJS('.copy'); // Initialize ClipboardJS
  clipboard.on('success', function(e) {
    $('#copy-hint').attr('aria-label', 'Copied'); // Hint changed from 'Copy to Clipboard' to 'Copied.'
    setTimeout(aaafunc, 500);
    e.clearSelection();
  });

  aaafunc = () => {
    $('#copy-hint').attr('aria-label', 'Copy');
  }

  // Burger icon onClick
  $('#burger-icon').click(function () {

    // Scrolling is prohibited when sidenav is displayed
    if ($('body').css('overflow') != 'hidden') {
      $('body').css('overflow', 'hidden');
    } else if ($('body').css('overflow') != 'initial') {
      $('body').css("overflow", "initial");
    }

    // Animation for burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');


    // Show or Hide sidenav
    var toggleWidth = "";
    if ( $("#sidenav").width() != 0 ) {
      toggleWidth = "0px"
      $("#sidenav a").css({ opacity: 0 });
    } else {
      toggleWidth = "100%"
      $("#sidenav a").css({ opacity: 1 });
    }
    
    $('#sidenav').animate({ width: toggleWidth }, 100);

  });


  // SideNav link onClick
  $("#sidenav-home, #sidenav-about-me, #sidenav-my-projects, #sidenav-contact-me").click(function () {
    // Hide sidenav
    $('#sidenav').animate({ width: 0 }, 100);

    // Make the app scrollable again
    $('body').css({ "overflow": "initial" });

    // Transform back to the burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');

  });

  // Burger icon on hover
  $("#burger-icon").hover( function() {
    $("#bar-1, #bar-2, #bar-3").toggleClass("burger-bar-hover");
  });
  
});

// $(window).on('load', function() {
//   AOS.refresh();
// });
