//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block"; // Show "Login as existing user" button
    }

    // Form submission handler
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form reload

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        alert(`Logged in as ${username}`);

        if (rememberCheckbox.checked) {
            // Store credentials in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Remove previously stored credentials
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    // Existing user login button
    existingButton.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
