// Handle button click to change active button
const buttons = document.querySelectorAll('.bar-btn');

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    this.classList.add('active');
  });
});

function professional_help() {
  window.location.href = 'professinals.html';
}

function helpful_links() {
  window.location.href = 'usefullvideo.html';
}

function mood() {
  window.location.href = 'mood.html';
}

function quiz() {
  window.location.href = 'quiz.html';
}