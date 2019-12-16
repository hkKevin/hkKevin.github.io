$(document).ready(function () {

  var clipboard = new ClipboardJS('.copy-icon'); // Initialize ClipboardJS
  clipboard.on('success', function(e) {
    $('#copy-hint').attr('aria-label', 'Copied'); // Hint changed from 'Copy to Clipboard' to 'Copied.'
    setTimeout(showCopy, 500);
    e.clearSelection();
  });

  showCopy = () => {
    $('#copy-hint').attr('aria-label', 'Copy');
  }


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


  // Particles animation
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#637089"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#637089",
        "opacity": 1,
        "width": 0.3
      },
      "move": {
        "enable": true,
        "speed": 0.3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1202.559045649142
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 10
        }
      }
    },
    "retina_detect": true
  });
  
});