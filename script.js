// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Prevent form from submitting
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        // If everything is valid, submit the form
        alert("Thank you for your message!");
        // Here you can actually submit the form to the server if needed:
        // this.submit();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Toggle Navbar for Mobile
document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
});
// Show success message after form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Assuming form is valid (you can add validation here)
    const successMessage = document.createElement('div');
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.classList.add('success-message');
    
    document.body.appendChild(successMessage);
    
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 3000); // Hide message after 3 seconds
});
// Accordion for Services Section

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
