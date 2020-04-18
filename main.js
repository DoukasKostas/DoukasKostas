window.addEventListener("load", function () {
  const loader = document.querySelector("#load-con");
  loader.className += " hidden";
  setTimeout(() => (loader.style.display = "none"), 2000);
});
function menuClick(x) {
  x.classList.toggle("change");
  const menu = document.querySelector(".navigation");
  const mobileMenu = document.querySelector(".small-nav");
  if (menu.offsetWidth == 0) {
    menu.style.width = "250px";
    mobileMenu.style.left = "250px";
  } else {
    menu.style.width = "0";
    mobileMenu.style.left = "0";
  }
}
