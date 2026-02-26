// const slide = document.querySelectorAll(".slide");
// slide.forEach((slide) => {
//   slide.addEventListener("mouseenter", () => {
//     slide.classList.remove("slide");
//   });
//   slide.addEventListener("mouseleave", () => {
//     slide.classList.add("slide");
//   });
// });

const mobileMenu = document.querySelector(".mobileMenu");
const showMenuBtn = document.querySelector(".mobileMenuBtn");
showMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("transform-[translatey(-150%)]");
  showMenuBtn.classList.toggle("rotate-180");
});
