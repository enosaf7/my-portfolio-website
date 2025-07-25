// Typing Animation
const texts = ["Data Analyst", "Web Developer", "Statistical Analyst", "Data Visualization Expert"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typed-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Theme Switcher
const themeSwitch = document.getElementById("theme-switch");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
        const isDark = !document.body.classList.contains("dark-theme");
        setTheme(isDark);
    });
    // Set theme from localStorage
    const userTheme = localStorage.getItem("theme");
    if (userTheme === "dark") setTheme(true);
    else setTheme(false);
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    type();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                navLinks.style.display = 'flex';
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navLinks.style.display = 'none';
                menuOpen = false;
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            try {
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: new FormData(this),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.reset();
                    alert('Thank you for your message! I will get back to you soon.');
                } else {
                    const data = await response.json();
                    throw new Error(data.error || 'Form submission failed');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form. Please try again.');
                console.error(error);
            }
        });
    }
});

// Section fade-in animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
