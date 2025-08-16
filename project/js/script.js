// JavaScript for form submission and validation
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the email input value
    const email = document.getElementById("email").value;

    // Validate the email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("message").textContent = "Please enter a valid email address.";
        return;
    }

    // Simulate a successful password reset request
    document.getElementById("message").textContent = "A password reset link has been sent to your email.";
    document.getElementById("message").style.color = "green";
    document.getElementById("email").value = ""; // Clear the email field
});



