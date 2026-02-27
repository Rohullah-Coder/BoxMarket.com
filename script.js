const mobileMenu = document.querySelector(".mobileMenu");
const showMenuBtn = document.querySelector(".mobileMenuBtn");
showMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("transform-[translatey(-150%)]");
  mobileMenu.classList.toggle("h-screen");
  showMenuBtn.classList.toggle("rotate-180");
});
