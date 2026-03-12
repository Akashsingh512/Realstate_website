// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
const leadForm = document.getElementById('leadForm');
const feedback = document.getElementById('formFeedback');

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate API call
    leadForm.style.opacity = '0.5';
    setTimeout(() => {
        leadForm.classList.add('hidden');
        feedback.classList.remove('hidden');
        console.log("Lead captured: ", {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        });
    }, 1000);
});