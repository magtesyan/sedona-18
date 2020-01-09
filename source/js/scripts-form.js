var failurePopup = document.querySelector(".modal_failure");
var successPopup = document.querySelector(".modal_success");
var closePopupFailure = failurePopup.querySelector(".modal__close");
var closePopupSuccess = successPopup.querySelector(".modal__close");
var replyForm = document.querySelector("form");

var userName = document.querySelector(".field_first-name");
var userSurname = document.querySelector(".field_second-name");
var userPhone = document.querySelector(".field_phone-number");
var userEmail = document.querySelector(".field_email");

replyForm.addEventListener("click", function (evt) {
  userName.style.borderColor="#f2f2f2";
  userSurname.style.borderColor="#f2f2f2";
  userPhone.style.borderColor="#f2f2f2";
  userEmail.style.borderColor="#f2f2f2";
  userName.addEventListener('invalid', function (evt) { failure(evt, userName); })
  userSurname.addEventListener('invalid', function (evt) { failure(evt, userSurname); })
  userPhone.addEventListener('invalid', function (evt) { failure(evt, userPhone); })
  userEmail.addEventListener('invalid', function (evt) { failure(evt, userEmail); })
});

function failure (evt, inputField) {
  evt.preventDefault();
  failurePopup.classList.remove("hide");
  failurePopup.classList.add("show");
  closePopupFailure.focus();
  inputField.style.borderColor="red";
}

replyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("hide");
  successPopup.classList.add("show");
  closePopupSuccess.focus();
});


closePopupSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("show");
  successPopup.classList.add("hide");
});

closePopupFailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove("show");
  failurePopup.classList.add("hide");
});
