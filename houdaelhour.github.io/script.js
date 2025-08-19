// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message! Je vous contacterai bientôt.');
    this.reset();
});

// Animation au défilement
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      const animationType = element.getAttribute('data-animate');
      element.classList.add(animationType);
    }
  });
}

// Initialisation
window.addEventListener('load', () => {
  animateOnScroll();
  
  // Animation spéciale pour le hero
  const heroTitle = document.querySelector('.hero-section h1');
  if (heroTitle) {
    heroTitle.style.animation = 'fadeIn 1s ease-out, slideInUp 0.8s ease-out';
  }
});

window.addEventListener('scroll', animateOnScroll);

// Animation au survol
document.querySelectorAll('.skill-badge').forEach(badge => {
  badge.addEventListener('mouseenter', () => {
    badge.classList.add('animate-bounce');
  });
  badge.addEventListener('mouseleave', () => {
    badge.classList.remove('animate-bounce');
  });
});