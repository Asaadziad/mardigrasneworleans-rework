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
const loadingBar = document.getElementById("loadingBar");
let numOfSlides;

function updateSponsorSlides() {
  if (!sponsors) return;
  let sponsorsNum = sponsorsList.length;
  if (window.matchMedia("(min-width: 992px)").matches) {
    numOfSlides = sponsorsNum / 4;
  } else {
    numOfSlides = sponsorsNum;
  }
}
function loadSponsorCards(firstIndex, lastIndex) {
  sponsors.innerHTML = "";
  for (let i = firstIndex; i <= lastIndex; i++) {
    sponsors.innerHTML +=
      `<div class="card sponsorCard" style="width: 18rem;height:20rem">
      <img src="` +
      sponsorsImg[i] +
      `" class="card-img-top sponsorImg" alt="` +
      sponsorsList[i] +
      `"/>
      <div class="card-body">
        <h5 class="card-title">` +
      sponsorsList[i] +
      `</h5>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>`;
  }
}
let loadingBtns;
function renderSponsors() {
  if (!loadingBar) return;
  loadingBar.innerHTML = "";
  for (let i = 0; i < numOfSlides; i++) {
    if (i == 0) {
      loadingBar.innerHTML += `<div class="loadedItem active" id="loadingItem${i}"></div>`;
    } else {
      loadingBar.innerHTML += `<div class="loadedItem" id="loadingItem${i}"></div>`;
    }
  }
  loadingBtns = document.querySelectorAll(".loadedItem");
  if (window.matchMedia("(min-width: 992px)").matches) {
    loadSponsorCards(0, 3);
  } else {
    loadSponsorCards(0, 0);
  }
}

let tweet = function (subject, infoParagraph, image) {
  this.subject = subject;
  this.infoParagraph = infoParagraph;
  this.image = image;
  this.get = function (propName) {
    return this[propName];
  };
  this.set = function (propName, value) {
    this[propName] = value;
  };
};
const tweets = [
  new tweet(
    "LaToya Cantrell",
    "LaToya Cantrell (née Wilder; born April 3, 1972) is an American politician serving as the Mayor of New Orleans, Louisiana since May 7, 2018. A Democrat, Cantrell is the first woman to hold the office. Before becoming mayor, Cantrell represented District B on the New Orleans City Council from 2012–2018",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/PopTech-_LaToya_Cantrell_%28cropped%29.jpg/800px-PopTech-_LaToya_Cantrell_%28cropped%29.jpg"
  ),
  new tweet(
    "Mardi Gras Day",
    "The celebrations begin early on Mardi Gras Day, which can fall on any Tuesday between February 3 and March 9 (depending on the date of Easter, and thus of Ash Wednesday In New Orleans, the Zulu parade rolls first, starting at 8 am on the corner of Jackson and Claiborne and ending at Broad and Orleans, Rex follows Zulu as it turns onto St. Charles following the traditional Uptown route from Napoleon to St. Charles and then to Canal St. Truck parades follow Rex and often have hundreds of floats blowing loud horns, with entire families riding and throwing much more than just the traditional beads and doubloons. Numerous smaller parades and walking clubs also parade around the city. The Jefferson City Buzzards, the Lyons Club, the Irish Channel Corner Club, Pete Fountain's Half Fast Walking Club and the KOE all start early in the day Uptown and make their way to the French Quarter with at least one jazz band. At the other end of the old city, the Society of Saint Anne journeys from the Bywater through Marigny and the French Quarter to meet Rex on Canal Street. The Pair-O-Dice Tumblers rambles from bar to bar in Marigny and the French Quarter from noon to dusk. Various groups of Mardi Gras Indians, divided into uptown and downtown tribes, parade in their finery.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/RexParade2006NewcombPotteryFloatHighsmith.jpg/1920px-RexParade2006NewcombPotteryFloatHighsmith.jpg"
  ),
  new tweet(
    "Costumes and masks",
    "In New Orleans, costumes and masks are seldom publicly worn by non-Krewe members on the days before Fat Tuesday (other than at parties), but are frequently worn on Mardi Gras. Laws against concealing one's identity with a mask are suspended for the day. Banks are closed, and some businesses and other places with security concerns (such as convenience stores) post signs asking people to remove their masks before entering.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mardi_Gras_Day_2019_in_New_Orleans_-_On_Royal_Street%2C_French_Quarter_50.jpg/1280px-Mardi_Gras_Day_2019_in_New_Orleans_-_On_Royal_Street%2C_French_Quarter_50.jpg"
  ),
];
function loadAboutPage() {
  const about = document.getElementById("aboutPage");
  if (!about) return;
  for (let i = 0; i < tweets.length; i++) {
    about.innerHTML += `<section class="aSec">
  <div class="tweetImg"><img src="${tweets[i].get("image")}"></div>
  <div class="tweetParagraph">
    <h2>${tweets[i].get("subject")}</h2>
    <p>${tweets[i].get("infoParagraph")}</p>
  </div>
</section>`;
  }
}

window.addEventListener("resize", function () {
  loadContactForm();
  updateSponsorSlides();
  renderSponsors();
  const loadingBtns = document.querySelectorAll(".loadedItem");
  if (!loadingBtns) return;
  loadingBtns.forEach((item) =>
    item.addEventListener("click", function () {
      loadingBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      item.classList.add("active");
      let id = item.getAttribute("id");
      let id_i = id[id.length - 1];
      if (window.matchMedia("(min-width: 992px)").matches) {
        if (id_i == 0) {
          loadSponsorCards(0, 3);
        } else {
          loadSponsorCards(4, 7);
        }
      } else {
        loadSponsorCards(id_i, id_i);
      }
    })
  );
});

updateSponsorSlides();
renderSponsors();

if (loadingBtns) {
  loadingBtns.forEach((item) =>
    item.addEventListener("click", function () {
      loadingBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      item.classList.add("active");
      let id = item.getAttribute("id");
      let id_i = id[id.length - 1];
      if (window.matchMedia("(min-width: 992px)").matches) {
        if (id_i == 0) {
          loadSponsorCards(0, 3);
        } else {
          loadSponsorCards(4, 7);
        }
      } else {
        loadSponsorCards(id_i, id_i);
      }
    })
  );
}

loadAboutPage();

const mediaImages = [
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27453777051717876762178034951983406178765426n_621948a9ca7d9.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27454250551717878328844548081021111783047238n_621948ae918cb.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/2745859955171788702884367767837578371140398n_621948b39621f.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/2747956245181080325288538237912962164365326n_62194e7d3dd7a.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/IMG2629_62193fe881c6a.JPG",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/IMG2705_621f92e716eb3.JPG",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/KreweofMondoKayo3_62268ffb9aa21.jpeg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/IMG6984_621f94b55c989.jpeg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/IMG2707_621f92e71cb1e.JPG",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/IMG2704_621f92e64d87c.JPG",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/14883683539788971921735301275032513756737405n_60ba8e5cd3445.png",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/6022fd91641c5_60ba90e143dd0.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27465413951833144417317937913136660801391717n_62194ca3e3c5f.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27465413951833106250655081390922838568631027n_62194ca3eecca.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27465998651833137950651915182122547040486862n_62194ca4028a6.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/2746885505183315585065012888122147304897682n_62194ca6b1c89.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27466203251833141783984863598515266914470958n_62194ca4b55e9.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27471132251833151217317252142993027637517741n_62194ca8aed66.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27472675151833120150653694714307293047420506n_62194cacbc841.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/funnyfacen_6219551179a59.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27483904251833091117323262085020840667905313n_62194caeba526.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27481713051833097717322606506106785177915590n_62194f2322a93.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27480911651833104917321886803205523260222309n_62194cadc72f1.jpg",
  "https://www.mardigrasneworleans.com/constrain/1200/800/uploads/gallery/27472392851833108417321538367584494660307015n_62194cabb8e98.jpg",
];
const mediaNames = ["Mardi Gras New Orleans"];
const mediaAlts = ["Mardi Gras New Orleans photo"];
function loadMedia() {
  const media = document.getElementById("mediaContainer");
  if (!media) return;
  let numOfPics = mediaImages.length;

  for (let i = 0; i < numOfPics; i++) {
    media.innerHTML += `<img src="${mediaImages[i]}" id="img${i}" alt="${mediaAlts[0]}" onclick="openModal();currentSlide(${i})">`;
  }
}

loadMedia();

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slide = document.querySelector(".mainImgSlide");
  let captionText = document.getElementById("caption");
  let mediaName = document.getElementById("mediaName");
  if (!slide || !captionText || !mediaName) return;
  if (slideIndex >= mediaImages.length) {
    slideIndex = mediaImages.length - 1;
  }
  if (slideIndex < 0) {
    slideIndex = 0;
  }

  slide.setAttribute("src", mediaImages[slideIndex]);
  mediaName.innerHTML = mediaNames[0];
  captionText.innerHTML = document
    .getElementById(`img${slideIndex}`)
    .getAttribute("alt");
}

const infoItem = function (name, info, helpMsg, errorMsg, type) {
  this.name = name;
  this.info = info;
  this.helpMsg = helpMsg;
  this.errorMsg = errorMsg;
  this.type = type;
  this.get = function (propName) {
    return this[propName];
  };
  this.set = function (propName, value) {
    this[propName] = value;
  };
};
function loadContactForm() {
  const cForm = document.getElementById("cform");
  const infoRequired = [
    new infoItem("First name", "firstName", "", "Invalid name!", "name"),
    new infoItem("Last name", "lastName", "", "Invalid name!", "name"),
    new infoItem(
      "Email address",
      "email",
      "We'll never share your email with anyone else.",
      "Invalid email",
      "email"
    ),
    new infoItem("Message", "message", "", "Please add a message!", "textarea"),
  ];
  if (!cForm) return;
  const mapHtml = `<iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6914.594858138874!2d-90.0607692400588!3d29.942122296793066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1380%20Port%20of%20New%20Orleans%20Pl.%2C%20Next%20to%20Convention%20Center%2C%20New%20Orleans%2C%20LA%2070130!5e0!3m2!1siw!2sil!4v1669841431088!5m2!1siw!2sil"
  width="400"
  height="400"
  style="border: 0"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  id="map"
></iframe>`;
  const mapBig = document.getElementById("mapBig");
  const mapSmall = document.getElementById("mapSmall");
  if (!mapBig || !mapSmall) return;
  cForm.innerHTML = "";
  for (let item of infoRequired) {
    if (!window.matchMedia("(min-width: 992px)").matches) {
      if (item.get("type") == "textarea") {
        cForm.innerHTML += `<div class="mb-3">
        <textarea
          type=${item.get("type")}
          class="form-control"
          id="${item.get("info")}"
          aria-describedby="${item.get("name")}Help"
          placeHolder="${item.get("name")}"
        ></textarea>
        <div id="${item.get("name")}Help" class="form-text">
          ${item.get("helpMsg")}
        </div>
        <div class="alert alert-danger visually-hidden" role="alert" id="${item.get(
          "info"
        )}-error">
          ${item.get("errorMsg")}
    </div>
      </div>`;
        break;
      }
      cForm.innerHTML += `<div class="mb-3">
    <input
      type=${item.get("type")}
      class="form-control"
      id="${item.get("info")}"
      aria-describedby="${item.get("name")}Help"
      placeHolder="${item.get("name")}"
    />
    <div id="${item.get("name")}Help" class="form-text">
      ${item.get("helpMsg")}
    </div>
    <div class="alert alert-danger visually-hidden" role="alert" id="${item.get(
      "info"
    )}-error">
      ${item.get("errorMsg")}
</div>
  </div>`;
    } else {
      if (item.get("type") == "textarea") {
        cForm.innerHTML += `<div class="mb-3">
        <label for="${item.get("info")}" class="form-label"
      >${item.get("name")}</label
    >
        <textarea
          type=${item.get("type")}
          class="form-control"
          id="${item.get("info")}"
          aria-describedby="${item.get("name")}Help"
          
        ></textarea>
        <div id="${item.get("name")}Help" class="form-text">
          ${item.get("helpMsg")}
        </div>
        <div class="alert alert-danger visually-hidden" role="alert" id="${item.get(
          "info"
        )}-error">
          ${item.get("errorMsg")}
    </div>
      </div>`;
        break;
      }
      cForm.innerHTML += `<div class="mb-3">
    <label for="${item.get("info")}" class="form-label"
      >${item.get("name")}</label
    >
    <input
      type=${item.get("type")}
      class="form-control"
      id="${item.get("info")}"
      aria-describedby="${item.get("name")}Help"
    />
    <div id="${item.get("name")}Help" class="form-text">
      ${item.get("helpMsg")}
    </div>
    <div class="alert alert-danger visually-hidden" role="alert" id="${item.get(
      "info"
    )}-error">
      ${item.get("errorMsg")}
</div>
  </div>`;
    }
  }
  if (window.matchMedia("(min-width: 992px)").matches) {
    mapSmall.innerHTML = "";
    mapBig.innerHTML = mapHtml;
    document.getElementById("formCol").setAttribute("class", "col-8");
  } else {
    mapBig.innerHTML = "";
    mapSmall.innerHTML = mapHtml;
    document.getElementById("formCol").setAttribute("class", "col-10");
  }
}

function submitContact() {
  const firstNameValue = document.getElementById("firstName");
  const lastNameValue = document.getElementById("lastName");
  const emailValue = document.getElementById("email");
  const msg = document.getElementById("message");
  let errors = 0;
  if (!msg || !firstNameValue || !lastNameValue || !emailValue) return;
  document.getElementById("firstName-error").classList.add("visually-hidden");
  document.getElementById("lastName-error").classList.add("visually-hidden");
  document.getElementById("email-error").classList.add("visually-hidden");
  document.getElementById("message-error").classList.add("visually-hidden");
  document.getElementById("form-filled").classList.add("visually-hidden");
  event.preventDefault();
  if (firstNameValue.value == "") {
    document
      .getElementById("firstName-error")
      .classList.remove("visually-hidden");
    errors++;
  }
  if (lastNameValue.value == "") {
    document
      .getElementById("lastName-error")
      .classList.remove("visually-hidden");
    errors++;
  }
  if (!emailValue.value.includes("@")) {
    document.getElementById("email-error").classList.remove("visually-hidden");
    errors++;
  }
  if (msg.value == "") {
    document
      .getElementById("message-error")
      .classList.remove("visually-hidden");
  }
  if (errors == 0) {
    document.getElementById("form-filled").classList.remove("visually-hidden");
  }
}

loadContactForm();
