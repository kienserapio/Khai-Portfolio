// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const contactForm = document.getElementById('contactForm');
const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.remove('fa-moon');
    themeToggle.querySelector('i').classList.add('fa-sun');
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Portfolio Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Portfolio Modal
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        const title = item.querySelector('.portfolio-title').textContent;
        const categoryText = item.querySelector('.portfolio-category').textContent;
        
        modalTitle.textContent = title;
        modalCategory.textContent = categoryText;
        
        // Set appropriate content based on category
        if (category === 'video') {
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.querySelector('source').src = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-waves-9882-large.mp4';
            modalVideo.load();
        } else {
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImage.src = item.querySelector('.portfolio-image').src;
        }
        
        // Set description based on category
        if (category === 'graphic') {
            modalDescription.textContent = 'This graphic design project showcases innovative branding solutions with a focus on typography, color theory, and visual hierarchy. The design process involved extensive research, mood boarding, and iterative prototyping to achieve the final result.';
        } else if (category === 'video') {
            modalDescription.textContent = 'This video production involved comprehensive pre-production planning, professional cinematography, and advanced post-production techniques. The project demonstrates expertise in storytelling, motion graphics, and color grading.';
        } else {
            modalDescription.textContent = 'This photography project features professional lighting techniques, composition mastery, and post-processing expertise. The work demonstrates attention to detail and artistic vision in capturing compelling visual narratives.';
        }
        
        // set link from data attribute (falls back to '#')
        const itemLink = item.dataset.link || '#';
        const itemLinkTarget = item.dataset.linkTarget || '_self';
        modalLink.href = itemLink;
        modalLink.target = itemLinkTarget;
        if (itemLinkTarget === '_blank') {
            modalLink.rel = 'noopener noreferrer';
        } else {
            modalLink.removeAttribute('rel');
        }

        portfolioModal.classList.add('open');
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    portfolioModal.classList.remove('open');
    if (modalVideo.style.display === 'block') {
        modalVideo.pause();
    }
});

// Close modal when clicking outside
portfolioModal.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
        portfolioModal.classList.remove('open');
        if (modalVideo.style.display === 'block') {
            modalVideo.pause();
        }
    }
});

// EmailJS send via form submit (replace existing sendEmail and contactForm submit handler)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Map keys to the variable names used in your EmailJS template.
    // Update the keys below to match the template placeholders (e.g. from_name, from_email, message, etc.)
    const params = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_5rajl59', 'template_9b3baz8', params)
        .then(() => {
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset();
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            alert('There was an error sending your message. Please try again later.');
        });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('.section, .portfolio-item, .about-content, .contact-info').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
