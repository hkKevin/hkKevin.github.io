$(document).ready(function () {

  AOS.init(); // Initialize Animation On Scroll

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
    var offset = $("#sidenav").offset();
    // Show or Hide sidenav
    if ( offset.left == 0 ) {  
      // Hide sidenav
      $('#sidenav').css( 
        'transform', 'translateX(100vw)'
      );
      $("#sidenav a").css({ opacity: 0 });
      // Display burger icon
      $('#bar-1').removeClass('transform-bar-1');
      $('#bar-2').removeClass('transform-bar-2');
      $('#bar-3').removeClass('transform-bar-3');
      // Allow scrolling
      $('body').css("overflow", "initial");

    } else {
      // Show sidenav
      $('#sidenav').css(
        'transform', 'translateX(0vw)'
      );
      $("#sidenav a").css({ opacity: 1 });
      // Display Times icon
      $('#bar-1').addClass('transform-bar-1');
      $('#bar-2').addClass('transform-bar-2');
      $('#bar-3').addClass('transform-bar-3');
      // Avoid scrolling
      $('body').css('overflow', 'hidden');
    }
  });


  // SideNav link onClick
  $("#sidenav-home, #sidenav-about-me, #sidenav-projects, #sidenav-contact-me").click(function () {
    // Hide sidenav
    $('#sidenav').css( 
      'transform', 'translateX(100vw)'
    );

    // Make the web scrollable again
    $('body').css("overflow", "initial");

    // Transform back to the burger icon
    $('#bar-1').removeClass('transform-bar-1');
    $('#bar-2').removeClass('transform-bar-2');
    $('#bar-3').removeClass('transform-bar-3');

  });


  // Burger icon on hover
  $("#burger-icon").hover( function() {
    $("#bar-1, #bar-2, #bar-3").toggleClass("burger-bar-hover");
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
        "distance": 350,
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