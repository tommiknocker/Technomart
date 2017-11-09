'use strict';

var guarantItem = document.querySelector(".services-item-guarantee");
var guarant = document.querySelector(".item-guarantee");
guarantItem.addEventListener("click", function (evt) {
evt.preventDefault();
guarant.classList.toggle("item-show");})

var shipItem = document.querySelector(".services-item-shipping");
var ship = document.querySelector(".item-shipping");
shipItem.addEventListener("click", function (evt) {
evt.preventDefault();
ship.classList.toggle("item-show");})

var writeUs = document.querySelector(".contacts-btn");
var openForm = document.querySelector(".modal-form-unit");
var login = openForm.querySelector("[name=username]");

writeUs.addEventListener("click", function (evt) {
evt.preventDefault();
openForm.classList.toggle("form-show");
login.focus();});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
openForm.classList.remove("form-show");}   });
