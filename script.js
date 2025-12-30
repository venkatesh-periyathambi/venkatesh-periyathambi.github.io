// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle button click handler
themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update the theme toggle button icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) {
                span.style.transform = 'rotate(45deg) translate(10px, 10px)';
            } else if (index === 1) {
                span.style.opacity = '0';
            } else {
                span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
            }
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelectorAll('span').forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

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

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe experience items for animation
document.querySelectorAll('.experience-item, .edu-item, .skill-category').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(item);
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('section[id]');

const scrollSpy = () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.style.color = 'var(--color-primary)';
            }
        }
    });
};

window.addEventListener('scroll', scrollSpy);

// ============================================
// PERFORMANCE OPTIMIZATION: LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
    
    // Toggle theme on Alt+T
    if (e.altKey && e.key === 't') {
        themeToggle.click();
    }
});

// ============================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ============================================

function createScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add styles for the button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: white;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px var(--color-shadow);
            transition: all 0.3s ease;
            z-index: 999;
        }

        .scroll-to-top:hover {
            background-color: var(--color-primary-light);
            transform: translateY(-2px);
        }

        @media (max-width: 480px) {
            .scroll-to-top {
                bottom: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize scroll to top button
createScrollToTopButton();

// ============================================
// PRINT PAGE OPTIMIZATION
// ============================================

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

window.addEventListener('afterprint', () => {
    const theme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', theme);
});

// ============================================
// ANALYTICS TRACKING (Optional)
// ============================================

// Uncomment and configure for Google Analytics or similar
/*
if (window.gtag) {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', () => {
            gtag('event', 'external_link', {
                'event_category': 'external',
                'event_label': link.href,
                'transport_type': 'beacon'
            });
        });
    });
}
*/

// ============================================
// INITIALIZATION
// ============================================

console.log('Portfolio website loaded successfully! 🚀');
