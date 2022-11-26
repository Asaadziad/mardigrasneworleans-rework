const loadingBtns = document.querySelectorAll(".loadedItem");

loadingBtns.forEach((item) =>
  item.addEventListener("click", function () {
    loadingBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    item.classList.add("active");
  })
);
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

function loadSponsors(firstIndex, lastIndex) {
  const sponsorsList = [
    "Walk-On's Bistreaux and Bar",
    "Sheraton New Orleans Hotel",
    " Ace Hotel New Orleans",
    "The Ritz-Carlton, New Orleans",
    " Premium Parking - P402",
    "Louisiana Children's Museum",
    "Museum of Death",
    "Haunted Museum",
  ];
  const sponsors = document.getElementById("sponsors");
  if (sponsors) {
    for (let i = firstIndex; i <= lastIndex; i++) {
      sponsors.innerHTML +=
        `<div class="card sponsorCard" style="width: 18rem;height:18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">` +
        sponsorsList[i] +
        `</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Read more</a>
    </div>
  </div>`;
    }
  }
}

function loadFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML += '<div class="container">test</div>';
  footer.innerHTML += '<div class="container">test</div>';
}

//loadNav();
loadSponsors(2, 5);
loadFooter();
