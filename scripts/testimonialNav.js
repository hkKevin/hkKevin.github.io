const nav = () => {
  const nav = document.querySelector("#testimonials .js-nav");
  const navLinks = nav.querySelectorAll("#testimonials .nav-link");
  const allNavLink = document.querySelector("#testimonials .nav-link");
  const dcmNavLink = document.querySelector("#testimonials .nav-link.dcm");
  const ecosaNavLink = document.querySelector("#testimonials .nav-link.ecosa");
  const sliderItem = nav.querySelector("#testimonials .nav-slider-item");
  const testimonials = document.querySelectorAll("#testimonials .testimonial");
  const dcmTestimonials = document.querySelectorAll("#testimonials .testimonial.dcm");
  const ecosaTestimonials = document.querySelectorAll("#testimonials .testimonial.ecosa");
  const lastDCMTestimonial = document.querySelectorAll(".testimonial.dcm");

  // Default Setting: 
  // Assign the elements count to HTML's attrubute
  allNavLink.setAttribute("data-count", testimonials.length);
  dcmNavLink.setAttribute("data-count", dcmTestimonials.length);
  ecosaNavLink.setAttribute("data-count", ecosaTestimonials.length);
  sliderItem.style.transform = "translateX(100%)"; // Highlight DCM in the nav
  // Only show DCM's testimonials
  testimonials.forEach((item) => {
    item.style.display = "none";
  })
  dcmTestimonials.forEach((item) => {
    item.style.display = "block";
  })
  // Remove bottom gap when the last DCM Testimonial coma at last
  if(lastDCMTestimonial.length) {
    lastDCMTestimonial[lastDCMTestimonial.length - 1].style.marginBottom = 'unset';
  }
  // Display different text according to screen width
  if (window.matchMedia("(max-width: 575px)").matches) {
    dcmNavLink.innerHTML = 'DCM';
  } else {
    dcmNavLink.innerHTML = 'DCM Inc.';
  }
  // Default Settings End

  // Display different text according to screen width
  window.addEventListener("resize", (evt) => {
    if(evt.target.screen.width > 575) {
      dcmNavLink.innerHTML = 'DCM Inc.'
    } else {
      dcmNavLink.innerHTML = 'DCM'
    }
  });

  // Testimonial Navigation
  nav.addEventListener("click", (evt) => {
    if (!evt.target.classList.contains("nav-link")) {
      return;
    }

    navLinks.forEach((item) => {
      item.classList.remove("active");
      document.getElementById('testimonials').scrollIntoView() // Scroll into the top of the Testimonials section
    });

    if (!evt.target.classList.contains("active")) {
      evt.target.classList.add("active"); // Set the clicked Nav link to active (Change text to white)
    }

    // Move the Highlight slider to the clicked position
    sliderItem.style.transform = `translateX(${evt.target.dataset.transform}%)`;

    testimonials.forEach((item) => {
      item.style.display = "none";
    })

    // Show different content according to the clicked nav
    switch (evt.target.dataset.display) {
      case "all":
        testimonials.forEach((item) => {
          item.style.display = "block";
        })
        if(lastDCMTestimonial.length) {
          lastDCMTestimonial[lastDCMTestimonial.length - 1].style.marginBottom = '12rem';
        }
        break;
      case "dcm":
        dcmTestimonials.forEach((item) => {
          item.style.display = "block";
          if(lastDCMTestimonial.length) {
            lastDCMTestimonial[lastDCMTestimonial.length - 1].style.marginBottom = 'unset';
          }
        })
        break;
      case "ecosa":
        ecosaTestimonials.forEach((item) => {
          item.style.display = "block";
        })
        break;
      default:
        testimonials.forEach((item) => {
          item.style.display = "block";
        })
    }
  });

};

nav();