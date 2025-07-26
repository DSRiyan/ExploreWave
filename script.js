let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

const form = document.getElementById("travelForm");
const popup = document.getElementById("popup");
const okButton = document.getElementById("okButton");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  popup.style.display = "flex"; // Show the popup
});

okButton.addEventListener("click", function () {
  popup.style.display = "none"; // Hide popup first

  // Add slight delay before redirecting to ensure smooth UX
  setTimeout(() => {
    window.location.href = "index.html"; // Replace with your homepage
  }, 200); // 200ms delay
});