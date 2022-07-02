const passInput = document.querySelector(".group input");
const toggleIcon = document.querySelector(".group .toggle");
const ripple = document.querySelector(".group .ripple");
const percentBar = document.querySelector(".strength-percent span");
const passLabel = document.querySelector(".strength-label");

passInput.addEventListener("input", handlePassInput);
toggleIcon.addEventListener("click", togglePassInput);