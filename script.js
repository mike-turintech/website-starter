// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const ctaButton = document.querySelector('.cta-button');
const contactForm = document.querySelector('.contact-form');

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// CTA button scroll to contact
ctaButton.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = contactSection.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (in real app, this would send to server)
    showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Message display helper
function showMessage(text, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    
    // Add styles for the message
    message.style.padding = '1rem';
    message.style.marginTop = '1rem';
    message.style.borderRadius = '5px';
    message.style.textAlign = 'center';
    
    if (type === 'success') {
        message.style.background = '#10b981';
        message.style.color = 'white';
    } else if (type === 'error') {
        message.style.background = '#ef4444';
        message.style.color = 'white';
    }
    
    contactForm.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add scroll-based animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add some interactive feedback
document.querySelectorAll('button, .nav-menu a').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});