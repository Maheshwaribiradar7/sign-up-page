document.addEventListener("DOMContentLoaded", function() {

    // Handle form submission
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#first").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.getElementById('confirmpassword').value;

        // Perform form validation
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (password === confirmPassword) {
            // passwords match, proceed with registration/login
        } else {
            // passwords do not match, display an error message
            alert('Passwords do not match');
        }
    });

    // Handle the close button for the success message
    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", function() {
        const successMessage = document.querySelector(".success");
        successMessage.style.display = "none"; // Hide the success message when close button is clicked
    });
});