window.addEventListener("load", function () {
  const loader = document.querySelector("#load-con");
  loader.className += " hidden";
  setTimeout(() => (loader.style.display = "none"), 2000);
});
