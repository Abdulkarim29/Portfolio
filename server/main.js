// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '☀️ Light Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '🌙 Dark Mode';
  }
});

// Skill modal functionality
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(skill => {
  skill.addEventListener('click', function(e) {
    e.preventDefault();

    // Get skill name from alt text
    const skillName = this.alt.toUpperCase();
    const description = this.dataset.description;

    // Remove existing modal if present
    const existingModal = document.querySelector('.skill-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'skill-modal-overlay';

    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'skill-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">×</button>
        <h2>${skillName}</h2>
        <p>${description}</p>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close button functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
      overlay.remove();
    });

    // Click outside to close
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });
  });
});