const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Remove when out of view
      }
    });
  }, {
    threshold: 0.1 // Adjust sensitivity (0.1 = 10% visible)
  });
  
  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));