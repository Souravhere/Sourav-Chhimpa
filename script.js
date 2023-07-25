// for header
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }

  const headerText = document.querySelector('.typewriter');
const words = ["Chhimpa", "Coder", "Designer", "Learner"];
let currentWordIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < words[currentWordIndex].length) {
    const character = words[currentWordIndex][charIndex];
    const color = getRandomColor();
    const span = document.createElement('span');
    span.textContent = character;
    span.style.color = color;
    headerText.appendChild(span);

    charIndex++;
    setTimeout(typeWriter, 300);
  } else {
    setTimeout(function() {
      removeWord();
    }, 1500);
  }
}

function removeWord() {
  const spans = headerText.querySelectorAll('span');
  if (spans.length > 0) {
    const lastSpan = spans[spans.length - 1];
    lastSpan.remove();
    setTimeout(removeWord, 50);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    charIndex = 0;
    setTimeout(typeWriter, 1000);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

typeWriter();

//for contact buttons 
// Function to check if the current time is between 5 PM and 7 PM
function isCallTime() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 17 && hour < 19; // 5 PM to 7 PM (17:00 to 18:59)
}

// Function to open a new window with a given URL
function openNewWindow(url) {
  window.open(url, '_blank');
}

// Event listener for the Call button
document.querySelector('.call-button').addEventListener('click', function () {
  if (isCallTime()) {
    window.location.href = 'tel:6367477611';
  } else {
    // Show the offline call image or display a custom message
    const offlineImage = 'image/icons8-backend-development-96.png'; // Replace with the path to your offline call image
    alert('Currently, it is not call time (5 PM to 7 PM). Please call during this time.');
    // If you want to show an offline image instead of an alert, you can do the following:
    // document.querySelector('.call-button img').src = offlineImage;
  }
});

// Event listener for the Email button
document.querySelector('.email-button').addEventListener('click', function () {
  const today = new Date();
  const upcomingDate = new Date(today);
  upcomingDate.setDate(today.getDate() + 3); // Add 3 days to the current date

  const formattedUpcomingDate = upcomingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const emailMessage = encodeURIComponent(`Hello,\n\nI hope this email finds you well.\n\nI wanted to connect with you and discuss some exciting opportunities.\n\nLet's schedule a call in the upcoming days. I'll be available to contact you on or after ${formattedUpcomingDate}.\n\nLooking forward to connecting with you!\n\nBest regards,\nSourav`);

  openNewWindow(`mailto:souravchhimpa3@gmail.com?subject=Regarding%20Opportunities&body=${emailMessage}`);
});

// Event listener for the WhatsApp button
document.querySelector('.whatsapp-button').addEventListener('click', function () {
  const message = encodeURIComponent('Hello! How are you? \n I would like to chat with you. 😊');
  openNewWindow('https://api.whatsapp.com/send?phone=9461233008&text=' + message);
});
