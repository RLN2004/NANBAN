document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.getElementById('calendar');
  const moodPopup = document.getElementById('mood-popup');
  const moodForm = document.getElementById('mood-form');
  const cancelBtn = document.getElementById('cancel');
  let selectedDate = null;

  // Function to generate calendar (current month)
  function generateCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get first and last day of the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Clear the previous calendar
    calendar.innerHTML = '';

    // Add empty boxes for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement('div');
      calendar.appendChild(emptyDiv);
    }

    // Add days with clickable mood option
    for (let day = 1; day <= lastDate; day++) {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      dayDiv.dataset.date = `${year}-${month + 1}-${day}`;
      dayDiv.classList.add('day-box');

      // Check if there's a saved mood for this date
      const savedMood = localStorage.getItem(dayDiv.dataset.date);
      if (savedMood) {
        dayDiv.classList.add(`mood-${savedMood}`);
      }

      // On clicking the day, open mood popup
      dayDiv.addEventListener('click', () => {
        selectedDate = dayDiv.dataset.date;
        moodPopup.style.display = 'block';
      });

      calendar.appendChild(dayDiv);
    }
  }

  // Save the selected mood to the selected date
  moodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedMood = document.querySelector('input[name="mood"]:checked').value;

    // Save the mood in localStorage
    localStorage.setItem(selectedDate, selectedMood);

    // Update the calendar color for the selected date
    const dayDiv = document.querySelector(`[data-date="${selectedDate}"]`);
    dayDiv.className = ''; // Reset class
    dayDiv.classList.add(`mood-${selectedMood}`);

    // Close the popup
    moodPopup.style.display = 'none';
  });

  // Cancel the popup
  cancelBtn.addEventListener('click', () => {
    moodPopup.style.display = 'none';
  });

  // Generate calendar when page loads
  generateCalendar();
});