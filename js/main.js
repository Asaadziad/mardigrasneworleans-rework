function loadNav() {
  const navItems = ["Home", "About", "LOGO HERE", "Media", "More"];
  const nav = document.getElementById("nav-items");
  if (nav == null) return;
  for (let index in navItems) {
    if (navItems[index] == "LOGO HERE") {
      nav.innerHTML +=
        "<li class='nav-item logo'><img src='img/logo.png'/></li>";
    } else if (navItems[index] == "More") {
      nav.innerHTML += `<li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">FAQ</a></li>
        <li><a class="dropdown-item" href="#">Contact</a></li>
      </ul>
    </li>`;
    } else {
      nav.innerHTML +=
        "<li class='nav-item'><a class='nav-link' href='#'>" +
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
  const sponsorsImg = [
    "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/118579651_3430681393650889_5808593562700675824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NXAQ340izckAX8otWHM&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDxB-fTx2Y6jauGnv3vGW6K3CiWg6JeFugqRw7rKr0Bbg&oe=63A94702",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/252935220.jpg?k=167aa37b2750a6d89b5dce4108cbd2b6736d178b86b2886e7338f62d54459af3&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/66319692.jpg?k=89a0d81a889bda19eef837546cab9b56ffe7af86d5088c3785caf71b39696ce5&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/27839663.jpg?k=e00ce34c7bd7b03733a217d59226aef929259781703eff166f987cfbeb822832&o=",
    "https://marvel-b1-cdn.bc0a.com/f00000000253249/d1fvos7zvcf2gi.cloudfront.net/locations/104/photo/medium_d6c9823756033bd8df25d6e17584f0d1.jpg",
    "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,g_auto,h_500,q_50,w_1400/https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/NOTMC_612930-21b2a1755056b36_21b2a753-5056-b365-ab8cd1ee177474f7.jpg",
    "https://assets.bigcartel.com/theme_images/3270945/mod-hdr3.jpg",
    "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,g_auto,h_500,q_50,w_1400/https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/IMG_4587_80B6F276-5126-4E31-84D6FA8D5F7CADB4_fe7cfcd0-7276-4b0a-8f9cc295019b440f.jpg",
  ];
  const sponsors = document.getElementById("sponsors");
  if (sponsors == null) return;
  sponsors.innerHTML = "";
  if (sponsors && window.matchMedia("(min-width: 992px)").matches) {
    for (let i = firstIndex; i <= lastIndex; i++) {
      sponsors.innerHTML +=
        `<div class="card sponsorCard" style="width: 18rem;height:20rem">
    <img src="` +
        sponsorsImg[i] +
        `" class="card-img-top" alt="` +
        sponsorsList[i] +
        `" min-height="100px" />
    <div class="card-body">
      <h5 class="card-title">` +
        sponsorsList[i] +
        `</h5>
      <a href="#" class="btn btn-primary">Read more</a>
    </div>
  </div>`;
    }
  } else if (sponsors && window.matchMedia("(max-width: 992px)").matches) {
    console.log("fuck u");
  }
}

function loadFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML +=
    '<div class="container footer"><img src="img/logo.png" width="200px"><div class="copyrights"><h2>@Asaadziad</h2> all rights reserved</div></div>';
  footer.innerHTML +=
    '<div class="container"><div class="container footerLinks"><ul><li class="list-unstyled">Useful Links</li><li class="list-unstyled"><a href="index.html" class="link-light">Home</a></li><li class="list-unstyled"><a href="index.html" class="link-light">About</a></li><li class="list-unstyled"><a href="index.html" class="link-light">Media</a></li><li class="list-unstyled"><a href="index.html" class="link-light">FAQ</a></li><li class="list-unstyled"><a href="index.html" class="link-light">Contact Us</a></li></ul></div><span class="socials" id="scrollTop"><i class="fa fa-arrow-up"></i></span></div>';
}

loadNav();
//loadSponsors(2, 5);
loadFooter();

document.getElementById("scrollTop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let mardiDate = new Date("Jan 6, 2023 19:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let diff = mardiDate - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  let daysEl = document.getElementById("days");
  let hoursEl = document.getElementById("hours");
  let minutesEl = document.getElementById("minutes");
  let secondsEl = document.getElementById("seconds");

  if (daysEl && minutesEl && secondsEl && hoursEl) {
    daysEl.innerHTML = days + "d";
    hoursEl.innerHTML = hours + "h";
    minutesEl.innerHTML = minutes + "m";
    secondsEl.innerHTML = seconds + "s";
  } else {
    clearInterval(x);
  }
}, 1000);
