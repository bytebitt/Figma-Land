const menu = document.getElementById("mobileMenu");
const btn = document.getElementById("burgerBtn");
const exit = document.getElementById("exit");
("exit");

btn.addEventListener("click", () => {
    menu.style.left = menu.style.left === "0px" ? "-100%" : "0";
});

exit.addEventListener("click", () => {
    menu.style.left = "-100%";
});
