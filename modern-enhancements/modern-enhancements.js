document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-fade class
  document.querySelectorAll('.scroll-fade').forEach((el) => {
    observer.observe(el);
  });

  // Add parallax effect
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach((el) => {
      const scrolled = window.pageYOffset;
      el.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
  });

  // Add hover effects
  document.querySelectorAll('.hover-scale').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.02)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
  });

  // Add skeleton loading effect
  function createSkeletons() {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    skeleton.style.width = '100%';
    skeleton.style.height = '200px';
    skeleton.style.margin = '1rem 0';
    return skeleton;
  }

  // Add skeletons to loading elements
  document.querySelectorAll('.loading').forEach((el) => {
    el.appendChild(createSkeletons());
  });
});
