// main.js - AI Risk & Reliability Platform (Sprint 1)

// smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// upload dataset button click
function uploadDataset() {
    // TODO: connect this to actual upload route in Sprint 2
    alert("Upload Dataset feature will be available in the next sprint.");
}

// learn more button - scrolls to features section
function learnMore() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// placeholder for future risk score function
function getRiskScore() {
    // will be implemented after backend logic is ready
    console.log("Risk score calculation not implemented yet");
}

// placeholder for future bias detection function
function detectBias() {
    // will be implemented in later sprint
    console.log("Bias detection not implemented yet");
}

// simple navbar shadow on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        nav.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
    }
});