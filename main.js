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
$(function () {
  // jQuery methods go here...
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
});

