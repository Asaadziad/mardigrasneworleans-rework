function loadNav() {
  const navItems = ["Home", "About", "Media", "Contact"];
  const nav = document.getElementById("nav");
  nav.innerHTML += "<ul>";
  for (let index in navItems) {
    nav.innerHTML += "<li>" + navItems[index] + "</li>";
  }
  nav.innerHTML += "</ul>";
}
