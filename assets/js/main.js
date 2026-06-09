// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Catering Form Handling
const cateringForm = document.getElementById('cateringForm');
if (cateringForm) {
    cateringForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit(this, 'Catering Inquiry');
    });
}

// Wholesale Form Handling
const wholesaleForm = document.getElementById('wholesaleForm');
if (wholesaleForm) {
    wholesaleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit(this, 'Wholesale Inquiry');
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit(this, 'General Contact');
    });
}

// Generic form submission handler
function handleFormSubmit(form, formType) {
    // Get all form values
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Validate all fields are filled
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Please fill in all required fields');
        return;
    }

    // Validate email if present
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(emailInput => {
        if (emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    alert(`Thank you for your ${formType}! We will get back to you within 24 hours.`);
    
    // Reset form
    form.reset();
}

// Scroll animations - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and event cards
const cardsToObserve = document.querySelectorAll('.product-card, .event-card, .catering-card, .service-card, .wholesale-card');
cardsToObserve.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active nav link indicator based on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Log page load
console.log('Chef Zel Website Loaded');
console.log('Exploring Food, Music, Culture & Creativity');