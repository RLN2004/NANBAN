// Show Register Form
function showRegister() {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  
  if (registerForm && loginForm) {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}

// Show Login Form
function showLogin() {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  
  if (registerForm && loginForm) {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
}

// Open the chat window
function openChatWindow() {
  const chatWindow = document.getElementById('chat-window');
  
  if (chatWindow) {
    chatWindow.style.display = 'block';
  }
}

// Close the chat window
function closeChatWindow() {
  const chatWindow = document.getElementById('chat-window');
  
  if (chatWindow) {
    chatWindow.style.display = 'none';
  }
}

// Register Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      const regName = document.getElementById('regName').value;
      const regMobile = document.getElementById('regMobile').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;
      const regAge = document.getElementById('regAge').value;
      const regGender = document.getElementById('regGender').value;
      const registerErrorMessage = document.getElementById('register-error-message');

      // Simple validation
      if (!regName || !regMobile || !regEmail || !regPassword || !regAge || !regGender) {
        if (registerErrorMessage) {
          registerErrorMessage.textContent = 'Please fill in all fields.';
        }
        return;
      }

      // Store user data in localStorage (simple simulation)
      localStorage.setItem('userName', regName);
      localStorage.setItem('userMobile', regMobile);
      localStorage.setItem('userEmail', regEmail);
      localStorage.setItem('userPassword', regPassword);
      localStorage.setItem('userAge', regAge);
      localStorage.setItem('userGender', regGender);

      if (registerErrorMessage) {
        registerErrorMessage.textContent = ''; // Clear any error message
      }
      alert('Registration successful! Please login.');
      showLogin(); // Show the login form after registration
    });
  }

  // Login Form Submission
  const loginForm = document.getElementById('login');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const loginErrorMessage = document.getElementById('login-error-message');

      // Retrieve stored user data from localStorage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      // Simple validation and authentication
      if (email === storedEmail && password === storedPassword) {
        if (loginErrorMessage) {
          loginErrorMessage.textContent = ''; // Clear error message
        }
        // Redirect to home page
        window.location.href = 'home.html';
      } else {
        if (loginErrorMessage) {
          loginErrorMessage.textContent = 'Invalid email or password.';
        }
      }
    });
  }
});

// Load profile data on profile page
document.addEventListener('DOMContentLoaded', function () {
    // Load profile data on page load
    const profileName = document.getElementById('profileName');
    const profileMobile = document.getElementById('profileMobile');
    const profileEmail = document.getElementById('profileEmail');
    const profileAge = document.getElementById('profileAge');
    const profileGender = document.getElementById('profileGender');

    // Retrieve stored user data from localStorage
    profileName.value = localStorage.getItem('userName');
    profileMobile.value = localStorage.getItem('userMobile');
    profileEmail.value = localStorage.getItem('userEmail');
    profileAge.value = localStorage.getItem('userAge');
    profileGender.value = localStorage.getItem('userGender');
});


// Logout function
function logout() {
  window.location.href = 'index.html'; // Redirect to login page
}

// Save Profile Data
function saveProfile() {
    const profileName = document.getElementById('profileName').value;
    const profileMobile = document.getElementById('profileMobile').value;
    
    const profileAge = document.getElementById('profileAge').value;
    const profileGender = document.getElementById('profileGender').value;

    // Store updated user data in localStorage
    localStorage.setItem('userName', profileName);
    localStorage.setItem('userMobile', profileMobile);
    
    localStorage.setItem('userAge', profileAge);
    localStorage.setItem('userGender', profileGender);

    alert("PROFILE UPDATED SUCCESFULLY..!");

}

// Cancel Edit
function cancelEdit() {
    // Reload the profile data to revert changes
    document.getElementById('profileName').value = localStorage.getItem('userName');
    document.getElementById('profileMobile').value = localStorage.getItem('userMobile');
    document.getElementById('profileEmail').value = localStorage.getItem('userEmail');
    document.getElementById('profileAge').value = localStorage.getItem('userAge');
    document.getElementById('profileGender').value = localStorage.getItem('userGender');
}
