// Show Register Form
function showRegister() {
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
}

// Show Login Form
function showLogin() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Open the chat window
function openChatWindow() {
  document.getElementById('chat-window').style.display = 'block';
}

// Close the chat window
function closeChatWindow() {
  document.getElementById('chat-window').style.display = 'none';
}


// Register Form Submission
document.getElementById('register').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const regEmail = document.getElementById('regEmail').value;
  const regPassword = document.getElementById('regPassword').value;
  const registerErrorMessage = document.getElementById('register-error-message');

  // Simple validation
  if (!regEmail || !regPassword) {
    registerErrorMessage.textContent = 'Please fill in both fields.';
    return;
  }

  // Store user data in localStorage (simple simulation)
  localStorage.setItem('userEmail', regEmail);
  localStorage.setItem('userPassword', regPassword);

  registerErrorMessage.textContent = ''; // Clear any error message
  alert('Registration successful! Please login.');
  showLogin(); // Show the login form after registration
});

// Login Form Submission
document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginErrorMessage = document.getElementById('login-error-message');

  // Retrieve stored user data from localStorage
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  // Simple validation and authentication
  if (email === storedEmail && password === storedPassword) {
    loginErrorMessage.textContent = ''; // Clear error message
    // Redirect to home page
    window.location.href = 'home.html';
  } else {
    loginErrorMessage.textContent = 'Invalid email or password.';
  }
});