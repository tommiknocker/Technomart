'use strict';

var guarantItem = document.querySelector(".services-item-guarantee");
var guarant = document.querySelector(".item-guarantee");
guarantItem.addEventListener("click", function (evt) {
evt.preventDefault();
guarant.classList.toggle("guarantee-show");})
