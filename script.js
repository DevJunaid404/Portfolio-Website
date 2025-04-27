// Select the hamburger icon, navigation links, and the contact form
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-right');
const contactForm = document.querySelector('.contact-form');
const messageContainer = document.createElement('div'); // To hold the success message

// Add event listener to toggle the 'show' class on the nav-right element
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Create and style the success message container
messageContainer.style.marginTop = '10px';
messageContainer.style.padding = '10px';
messageContainer.style.fontSize = '1.6rem';
messageContainer.style.color = '#E4CB86';
messageContainer.style.backgroundColor = '#121212';
messageContainer.style.borderRadius = '5px';
messageContainer.style.textAlign = 'center';
messageContainer.style.display = 'none';  // Hide the message initially
contactForm.appendChild(messageContainer);

// Handle form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)

    // Display the message below the submit button
    messageContainer.textContent = 'Thank you for your message! We will get back to you soon.';
    messageContainer.style.display = 'block'; // Show the message

    // Optionally, clear the form fields
    contactForm.reset();

    // Hide the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        messageContainer.style.display = 'none'; // Hide the message
    }, 3000);
});
