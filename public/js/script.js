
// for responsive navbar
const toggleButton = document.getElementById("toggleButton");
console.log(toggleButton)
const section = document.getElementById("responsive-navbar");
const listItems = document.querySelectorAll(".responsive-navbar li");

// Set initial state
let isMenuOpen = false;

toggleButton.addEventListener("click", () => {
  if (!isMenuOpen) {
    // Open the menu
    section.style.cssText = "display: block !important;";
    setTimeout(() => {
      section.style.opacity = 1;
    }, 10);
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }, index * 300);
    });
    toggleButton.textContent = "✕";
  } else {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.display = "none";
      listItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(10px)';
      });
    }, 500);
    toggleButton.textContent = "☰";
  }

  isMenuOpen = !isMenuOpen; 
});
// function so that responsive doesnot show on big screens
function hide() {
    if (window.innerWidth > 767) {
      isMenuOpen = false;  
      section.style.display = "none"; 
      toggleButton.textContent = "☰";
    }
  }
  window.addEventListener('resize', hide);

  if (window.innerWidth > 767) {
    hide(); 
  }

// Reusable function to handle mousemove
function addMouseMoveEffect(buttons) {
  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
  });
}

// Applying the reusable function to different button groups
const primaryButton = document.querySelectorAll('.button-primary-hover');
const secondaryButtons = document.querySelectorAll('.button-secondary');
const advanceBookingButton = document.querySelectorAll('.advance-booking-btn');
const socialButtons = document.querySelectorAll('.social-icon');
const socialButtonsBlue = document.querySelectorAll('.social-icon-blue');

// Add effects to each group
addMouseMoveEffect(primaryButton);
addMouseMoveEffect(secondaryButtons);
addMouseMoveEffect(advanceBookingButton);
addMouseMoveEffect(socialButtons);
addMouseMoveEffect(socialButtonsBlue)