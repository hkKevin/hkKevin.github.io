const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation-showed')
      } else {
        entry.target.classList.remove('animation-showed')
      }
    })
  })

  const animatedEl = document.querySelectorAll('#tech-skills .skill, .celpip, .ielts, .testimonial .quote, #projects .card, .email a')
  animatedEl.forEach((el) => observer.observe(el))