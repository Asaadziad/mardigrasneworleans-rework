function loadNav() {
  const navItems = ["Home", "About", "LOGO HERE", "Media", "Contact"];
  const nav = document.getElementById("nav-items");

  for (let index in navItems) {
    if (navItems[index] == "LOGO HERE") {
      nav.innerHTML +=
        "<li class='nav-brand-logo'><a href='test'><img src='img/logo.png' class='nav-brand-logo'/></a></li>";
    } else {
      nav.innerHTML +=
        "<li class='item" +
        index +
        "'><a href='test'>" +
        navItems[index] +
        "</a></li>";
    }
  }
}

function loadCarousel() {}

loadNav();
