
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


  const btn = document.querySelector('.button-primary-hover'); 
  //console.log(btn)
  btn.addEventListener('mousemove', function(e) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
  const buttons = document.querySelectorAll('.button-secondary'); 

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
  });
  const btnOne = document.querySelector('.advance-booking-btn');  
  btnOne.addEventListener('mousemove', function(e) {
    const rect = btnOne.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    btnOne.style.setProperty('--x', x + 'px');
    btnOne.style.setProperty('--y', y + 'px');
  });

  const socialButtons = document.querySelectorAll('.social-icon'); 

  socialButtons.forEach((btn) => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
  });