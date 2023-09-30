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

let showLongStay = function () {
  longStay.style.display = "block";
  shortStay.style.display = "none";
};

let showShortStay = function () {
  longStay.style.display = "none";
  shortStay.style.display = "block";
};
