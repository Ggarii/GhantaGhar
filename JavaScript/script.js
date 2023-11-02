const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

// For long stay button of homepage
const longStay = document.querySelector("#longstay_booking");
const shortStay = document.querySelector("#shortstay_booking");
const shortStayButton = document.querySelector("#btn_1");
const longStayButton = document.querySelector("#btn_2");

let showLongStay = function () {
  longStay.style.display = "block";
  shortStay.style.display = "none";
  longStayButton.style.backgroundColor = "#744920";
  shortStayButton.style.backgroundColor = "#9c6f44";
};

let showShortStay = function () {
  longStay.style.display = "none";
  shortStay.style.display = "block";
  shortStayButton.style.backgroundColor = "#744920";
  longStayButton.style.backgroundColor = "#9c6f44";
};

// To toggle between Bhaktapur, Lalitpur and Kathmandu top places
const lalitpur = document.querySelector("#lalitpur_top_places");
const bhaktapur = document.querySelector("#bhaktapur_top_places");
const kathmandu = document.querySelector("#kathmandu_top_places");
let underline_bhaktapur = document.querySelector("#bhaktapur");
let underline_lalitpur = document.querySelector("#lalitpur");
let underline_kathmandu = document.querySelector("#kathmandu");

let showLalitpur = function () {
  lalitpur.style.display = "block";
  bhaktapur.style.display = "none";
  kathmandu.style.display = "none";
  underline_bhaktapur.style.textDecoration = "none";
  underline_kathmandu.style.textDecoration = "none";
  underline_lalitpur.style.textDecoration = "underline";
};

let showBhaktapur = function () {
  lalitpur.style.display = "none";
  bhaktapur.style.display = "block";
  kathmandu.style.display = "none";
  underline_kathmandu.style.textDecoration = "none";
  underline_lalitpur.style.textDecoration = "none";
  underline_bhaktapur.style.textDecoration = "underline";
};

let showKathmandu = function () {
  kathmandu.style.display = "block";
  bhaktapur.style.display = "none";
  lalitpur.style.display = "none";
  underline_kathmandu.style.textDecoration = "underline";
  underline_lalitpur.style.textDecoration = "none";
  underline_bhaktapur.style.textDecoration = "none";
};

// For swiper of clients
var swiper = new Swiper(".our-client", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    " 991": {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    " 767": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    " 320": {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

// For see more of top places
let seeMore = document.querySelector("#see-more");
let seeLess = document.querySelector("#see-less");
let currentItem = 3;

seeMore.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #bhaktapur_top_places .box"
    ),
  ];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    seeMore.style.display = "none";
    seeLess.style.display = "inline-block";
  }
};

// For see less
seeLess.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #bhaktapur_top_places .box"
    ),
  ];
  currentItem -= 3;
  for (var i = currentItem; i < currentItem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (currentItem <= 3) {
    seeMore.style.display = "inline-block";
    seeLess.style.display = "none";
  }
};

// See more of Lalitpur
let seeMoreLalitpur = document.querySelector("#lalitpur-see-more");
let seeLessLalitpur = document.querySelector("#lalitpur-see-less");
let currentItemLalitpur = 3;

seeMoreLalitpur.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #lalitpur_top_places .box"
    ),
  ];
  for (var i = currentItemLalitpur; i < currentItemLalitpur + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemLalitpur += 3;

  if (currentItemLalitpur >= boxes.length) {
    seeMoreLalitpur.style.display = "none";
    seeLessLalitpur.style.display = "inline-block";
  }
};

// For see less
seeLessLalitpur.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #lalitpur_top_places .box"
    ),
  ];
  currentItemLalitpur -= 3;
  for (var i = currentItemLalitpur; i < currentItemLalitpur + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (currentItemLalitpur <= 3) {
    seeMoreLalitpur.style.display = "inline-block";
    seeLessLalitpur.style.display = "none";
  }
};

// See more of Kathmandu
let seeMoreKathmandu = document.querySelector("#kathmandu-see-more");
let seeLessKathmandu = document.querySelector("#kathmandu-see-less");
let currentItemKathmandu = 3;

seeMoreKathmandu.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #kathmandu_top_places .box"
    ),
  ];
  for (var i = currentItemKathmandu; i < currentItemKathmandu + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemKathmandu += 3;

  if (currentItemKathmandu >= boxes.length) {
    seeMoreKathmandu.style.display = "none";
    seeLessKathmandu.style.display = "inline-block";
  }
};

// For see less
seeLessKathmandu.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".top_places_wrapper .container-fluid #kathmandu_top_places .box"
    ),
  ];
  currentItemKathmandu -= 3;
  for (var i = currentItemKathmandu; i < currentItemKathmandu + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (currentItemKathmandu <= 3) {
    seeMoreKathmandu.style.display = "inline-block";
    seeLessKathmandu.style.display = "none";
  }
};

// Popular Searches
// To toggle between Bhaktapur, Lalitpur and Kathmandu top places
const popular_lalitpur = document.querySelector("#lalitpur_popular_searches");
const popular_bhaktapur = document.querySelector("#bhaktapur_popular_searches");
const popular_kathmandu = document.querySelector("#kathmandu_popular_searches");
let u_bhaktapur = document.querySelector("#popular_bhaktapur");
let u_lalitpur = document.querySelector("#popular_lalitpur");
let u_kathmandu = document.querySelector("#popular_kathmandu");

let popularLalitpur = function () {
  popular_lalitpur.style.display = "block";
  popular_bhaktapur.style.display = "none";
  popular_kathmandu.style.display = "none";
  u_bhaktapur.style.textDecoration = "none";
  u_lalitpur.style.textDecoration = "underline";
};

let popularBhaktapur = function () {
  popular_lalitpur.style.display = "none";
  popular_bhaktapur.style.display = "block";
  popular_kathmandu.style.display = "none";
  u_bhaktapur.style.textDecoration = "underline";
  u_lalitpur.style.textDecoration = "none";
  u_kathmandu.style.textDecoration = "none";
};

let popularKathmandu = function () {
  popular_kathmandu.style.display = "block";
  popular_bhaktapur.style.display = "none";
  popular_lalitpur.style.display = "none";
  u_bhaktapur.style.textDecoration = "none";
  u_kathmandu.style.textDecoration = "underline";
  u_lalitpur.style.textDecoration = "none";
};

// For see more/less of Popular searches of Bhaktapur
let PSBseeMore = document.querySelector("#PSB-see-more");
let PSBseeLess = document.querySelector("#PSB-see-less");
let PSBcurrentItem = 3;

PSBseeMore.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #bhaktapur_popular_searches .cont_box"
    ),
  ];
  for (var i = PSBcurrentItem; i < PSBcurrentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  PSBcurrentItem += 3;

  if (PSBcurrentItem >= boxes.length) {
    PSBseeMore.style.display = "none";
    PSBseeLess.style.display = "inline-block";
  }
};

// For see less
PSBseeLess.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #bhaktapur_popular_searches .cont_box"
    ),
  ];
  PSBcurrentItem -= 3;
  for (var i = PSBcurrentItem; i < PSBcurrentItem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (PSBcurrentItem <= 3) {
    PSBseeMore.style.display = "inline-block";
    PSBseeLess.style.display = "none";
  }
};

// For see more/less of Popular searches of Lalitpur
let PSLseeMore = document.querySelector("#PSL-see-more");
let PSLseeLess = document.querySelector("#PSL-see-less");
let PSLcurrentItem = 3;

PSLseeMore.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #lalitpur_popular_searches .cont_box"
    ),
  ];
  for (var i = PSLcurrentItem; i < PSLcurrentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  PSLcurrentItem += 3;

  if (PSLcurrentItem >= boxes.length) {
    PSLseeMore.style.display = "none";
    PSLseeLess.style.display = "inline-block";
  }
};

// For see less
PSLseeLess.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #lalitpur_popular_searches .cont_box"
    ),
  ];
  PSLcurrentItem -= 3;
  for (var i = PSLcurrentItem; i < PSLcurrentItem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (PSLcurrentItem <= 3) {
    PSLseeMore.style.display = "inline-block";
    PSLseeLess.style.display = "none";
  }
};

// For see more/less of Popular searches of Kathmandu
let PSKseeMore = document.querySelector("#PSK-see-more");
let PSKseeLess = document.querySelector("#PSK-see-less");
let PSKcurrentItem = 3;

PSKseeMore.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #kathmandu_popular_searches .cont_box"
    ),
  ];
  for (var i = PSKcurrentItem; i < PSKcurrentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  PSKcurrentItem += 3;

  if (PSKcurrentItem >= boxes.length) {
    PSKseeMore.style.display = "none";
    PSKseeLess.style.display = "inline-block";
  }
};

// For see less
PSKseeLess.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".popular_searches_wrapper .container-fluid #kathmandu_popular_searches .cont_box"
    ),
  ];
  PSKcurrentItem -= 3;
  for (var i = PSKcurrentItem; i < PSKcurrentItem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "none";
    }
  }

  if (PSKcurrentItem <= 3) {
    PSKseeMore.style.display = "inline-block";
    PSKseeLess.style.display = "none";
  }
};

// hide search icon
const hideSearch = document.querySelector("#location_search");
const showSearch = document.querySelector("#location_input");

let removeIcon = function () {
  hideSearch.style.opacity = "0";
};
let addIcon = function () {
  if (showSearch.value === "") {
    hideSearch.style.opacity = "1";
  }
};

const hideSearchIcon = document.querySelector("#location_Search");
const showSearchIcon = document.querySelector("#location_Input");

let removeSearchIcon = function () {
  hideSearchIcon.style.opacity = "0";
};
let addSearchIcon = function () {
  if (showSearchIcon.value === "") {
    hideSearchIcon.style.opacity = "1";
  }
};

// For slider of booking form
var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
