"use strict";

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modalWindow = document.getElementById("modal");
const maskArea = document.getElementById("mask");

openButton.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
  maskArea.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  maskArea.classList.add("hidden");
});

maskArea.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  maskArea.classList.add("hidden");
});
