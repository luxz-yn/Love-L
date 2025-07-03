// SLIDE FUNCTIONALITY

function showSlide(id) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.style.display = 'none';
  });
  document.querySelector('.home').style.display = 'none';
  document.getElementById(id).style.display = 'block';

  if (id === "timer") {
    startTimer();
  }
}

function closeSlide() {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.style.display = 'none';
  });
  document.querySelector('.home').style.display = 'flex';
}

// TIMER FUNCTIONALITY

const startDate = new Date("2025-06-30T11:12:00");
function startTimer() {
  function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("timerDisplay").textContent =
      `We've been together for ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
  }

  clearInterval(window.timerInterval);
  window.timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// PHOTO UPLOAD FUNCTIONALITY

const upload = document.getElementById("upload");
const photo = document.getElementById("photo");

if (upload) {
  upload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        localStorage.setItem("travelPhoto", event.target.result);
        if (photo) {
          photo.src = event.target.result;
          photo.style.display = "block";
        }
      }
      reader.readAsDataURL(file);
    }
  });
}

window.addEventListener("load", () => {
  const savedPhoto = localStorage.getItem("travelPhoto");
  if (savedPhoto && photo) {
    photo.src = savedPhoto;
    photo.style.display = "block";
  }
});
