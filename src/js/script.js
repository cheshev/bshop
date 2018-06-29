var link = document.querySelector (".login");
var popup = document.querySelector (".modal-content");
var close = document.querySelector (".modal-content-close");
var form = popup.querySelector ("form");
var login = popup.querySelector ("[name=login]");
var password = popup.querySelector ("[name=password]");
var overlay = document.getElementById("overlay");
link.addEventListener ("click", function(event) {
  event.preventDefault ();
  popup.classList.add ("modal-content-show");
  overlay.style.display = "block";
  login.focus ();
});
form.addEventListener ("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault ();
      popup.classList.add ("modal-error");
      console.log ("Нужно ввести логин и пароль!");
    }
});
close.addEventListener ("click", function (event) {
  event.preventDefault ();
  popup.classList.remove ("modal-content-show");
  popup.classList.remove ("modal-error");
  overlay.style.display = "none";
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ("modal-content-show")) {
      popup.classList.remove ("modal-content-show");
      popup.classList.remove ("modal-error");
      overlay.style.display = "none";
    }
  }
});

var mapPopup = document.querySelector (".modal-content-map");
var mapOpen = document.querySelector (".js-open-map");
var mapClose = mapPopup.querySelector (".modal-content-close");

mapOpen.addEventListener ("click", function (event) {
  event.preventDefault ();
  mapPopup.classList.add ("modal-content-show");
  overlay.style.display = "block";
});
mapClose.addEventListener ("click", function (event) {
  event.preventDefault ();
  mapPopup.classList.remove ("modal-content-show");
  overlay.style.display = "none";
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains ("modal-content-show")) {
      mapPopup.classList.remove ("modal-content-show");
      mapPopup.classList.remove ("modal-error");
      overlay.style.display = "none";
    }
  }
});
