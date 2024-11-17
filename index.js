document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic (e.g., API call)

    // Redirect to the next page after successful login
    window.location.href = 'home.html'; // Change to your desired page
});