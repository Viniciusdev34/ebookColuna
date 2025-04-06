let button = document.getElementById("btn");
let closeMenu = document.querySelector(".close")
let menu = document.querySelector(".ulMenu");

button.addEventListener("click", (e) => {
  menu.classList.add("active");
  e.stopPropagation();
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
document.body.addEventListener("click", () => {
    menu.classList.remove("active");
});