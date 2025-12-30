// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check saved preference or system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
});

function updateThemeIcon(isDarkMode) {
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !isDarkMode);
    icon.classList.toggle('fa-sun', isDarkMode);
}

// Initialize theme on page load
initTheme();

// ============================================
// NAVIGATION MENU TOGGLE
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLLING & ACTIVE NAV LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to elements
document.querySelectorAll('.experience-item, .skill-category, .edu-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    // Optional: Add a visual scroll progress bar
    // You can uncomment and customize this if desired
    // document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// SMOOTH PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Toggle theme with keyboard shortcut (Alt + T)
    if (e.altKey && e.key === 't') {
        themeToggle.click();
    }
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`✅ Page fully loaded in ${pageLoadTime}ms`);
    });
}

console.log('🚀 Venkatesh Periyathambi | Data & AI Architect Portfolio loaded successfully!');
