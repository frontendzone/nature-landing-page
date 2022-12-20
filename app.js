function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// close mobile menu if screen > 780px
window.addEventListener(
  "resize",
  function () {
    // if screen > 780px and menu is displayed, call closeNav function
    if (
      window.innerWidth > 780 &&
      document.getElementById("myNav").style.width === "100%"
    ) {
      closeNav();
    }
  },
  true
);
