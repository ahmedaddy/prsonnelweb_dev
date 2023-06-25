// let barsIcon = document.querySelector(".bars-icon");
// let headerNav = document.querySelector(".header-nav");

// // barsIcon.onclick = function () {
// //   headerNav.style = 'display: block;'
// // }

// barsIcon.onclick = function () {
//   if (headerNav.classList) {
//     headerNav.classList.toggle("d-block");
//   }
// };
// let video = document.querySelector(".video");
// let videoPauseimg = document.querySelector(".videocontainer img");

// video.addEventListener("click", () => {
//   video.classList.toggle("active");
//   if (video.classList.contains("active")) {
//     videoPauseimg.style.display = "none";
//     // videoPauseimg.style.opacity = "0";
//     video.play();
//   } else {
//     videoPauseimg.style.display = "block";
//     // videoPauseimg.style.opacity = "1";
//     video.pause();
//   }
// });
// // video.onclick(function () {
// //   video.pause();
// // });
let navbtn, links, l;
navbtn = document.querySelector(".nav-btn-i i");
links = document.querySelector("header .container .header-nav");

navbtn.addEventListener("click", () => {
  links.style.opacity = "1";
  links.style.display = "block";
});
links.addEventListener("click", () => {
  links.style.opacity = "0";
  links.style.display = "none";
});
