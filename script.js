"use strict";

const shareBtn = document.getElementById("share");
const shareEl = document.querySelector(".share");
const iconWrap = document.querySelector(".icon-wrapper");

shareBtn.addEventListener("click", function (e) {
  if (e.target.closest("#share") === shareBtn) {
    shareEl.classList.toggle("active");
    iconWrap.classList.toggle("icon-wrapper-col");
    console.log("test");
  }
});
