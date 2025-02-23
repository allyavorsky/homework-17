// responsive menu
const button = document.querySelector(".menu-toggle"),
  menu = document.querySelector(".menu");

button.addEventListener("click", () => menu.classList.toggle("menu--active"));

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== button) {
    menu.classList.remove("menu--active");
  }
});

document
  .querySelectorAll(".menu__item")
  .forEach((item) =>
    item.addEventListener("click", () => menu.classList.remove("menu--active"))
  );
