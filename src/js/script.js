var link = document.querySelector (".login");
var popup = document.querySelector (".modal-content");
var close = document.querySelector (".modal-content-close");
var form = popup.querySelector ("form");
var login = popup.querySelector ("[name=login]");
var password = popup.querySelector ("[name=password]");

link.addEventListener ("click", function(event) {
  event.preventDefault ();
  popup.classList.add ("modal-content-show");
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
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ("modal-content-show")) {
      popup.classList.remove ("modal-content-show");
      popup.classList.remove ("modal-error");
    }
  }
});

var mapPopup = document.querySelector (".modal-content-map");
var mapOpen = document.querySelector (".js-open-map");
var mapClose = mapPopup.querySelector (".modal-content-close");

mapOpen.addEventListener ("click", function (event) {
  event.preventDefault ();
  mapPopup.classList.add ("modal-content-show");
});
mapClose.addEventListener ("click", function (event) {
  event.preventDefault ();
  mapPopup.classList.remove ("modal-content-show");
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains ("modal-content-show")) {
      mapPopup.classList.remove ("modal-content-show");
      mapPopup.classList.remove ("modal-error");
    }
  }
});
function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}
