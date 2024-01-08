document.getElementById("email").addEventListener("click", function () {
  window.location.href = "mailto:" + this.innerHTML;
});
document.getElementById("website1").addEventListener("click", function () {
  window.open("https://task-app-frontend-two.vercel.app/", "_blank");
});

document.getElementById("contactBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "Leopold-van-der-Elst-CV.pdf";
  link.click();
});

document
  .getElementById("projectImg1")
  .addEventListener("mouseover", (event) => {
    document.getElementById("website1").style.visibility = "visible";
    document.getElementById("projectImg1").style.filter = "blur(10px)";
  });
document.getElementById("website1").addEventListener("mouseover", (event) => {
  document.getElementById("website1").style.visibility = "visible";
  document.getElementById("projectImg1").style.filter = "blur(10px)";
});
document.getElementById("projectImg1").addEventListener("mouseout", (event) => {
  document.getElementById("website1").style.visibility = "hidden";
  document.getElementById("projectImg1").style.filter = "none";
});
document.getElementById("website1").addEventListener("click", (event) => {
  document.getElementById("website1").style.visibility = "hidden";
  document.getElementById("projectImg1").style.filter = "none";
});

document.getElementById("website2").addEventListener("click", function () {
  window.open("https://mymoviz-part5-frontend-gamma.vercel.app/");
});

document
  .getElementById("projectImg2")
  .addEventListener("mouseover", (event) => {
    document.getElementById("website2").style.visibility = "visible";
    document.getElementById("projectImg2").style.filter = "blur(10px)";
  });
document.getElementById("website2").addEventListener("mouseover", (event) => {
  document.getElementById("website2").style.visibility = "visible";
  document.getElementById("projectImg2").style.filter = "blur(10px)";
});
document.getElementById("projectImg2").addEventListener("mouseout", (event) => {
  document.getElementById("website2").style.visibility = "hidden";
  document.getElementById("projectImg2").style.filter = "none";
});
document.getElementById("website2").addEventListener("click", (event) => {
  document.getElementById("website2").style.visibility = "hidden";
  document.getElementById("projectImg2").style.filter = "none";
});

var modal = document.getElementById("video-modal");
var btn = document.getElementById("watch-video-btn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

document
  .getElementById("projectImg3")
  .addEventListener("mouseover", (event) => {
    document.getElementById("website3").style.visibility = "visible";
    document.getElementById("projectImg3").style.filter = "blur(10px)";
  });
document.getElementById("website3").addEventListener("mouseover", (event) => {
  document.getElementById("website3").style.visibility = "visible";
  document.getElementById("projectImg3").style.filter = "blur(10px)";
});
document.getElementById("projectImg3").addEventListener("mouseout", (event) => {
  document.getElementById("website3").style.visibility = "hidden";
  document.getElementById("projectImg3").style.filter = "none";
});

//Generate and display video and modal
document.getElementById("website3").addEventListener("click", function () {
  document.getElementById("video-modal").style.display = "flex";
  const video = document.createElement("video");
  video.style.width = "350px";
  video.src = "/Wanderlust_demoFL.mp4";
  video.autoplay = true;
  video.controls = true;
  document.querySelector(".modal-body").appendChild(video);
  document.querySelector(".container").style.filter = "blur(10px)";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("body").style.height = "100vh";
});

document.getElementById("close-btn").addEventListener("click", function () {
  modal.style.display = "none";
  document.querySelector("video").remove();
  document.getElementById("website3").style.visibility = "hidden";
  document.getElementById("projectImg3").style.filter = "none";
  document.querySelector(".container").style.filter = "none";
  document.querySelector("body").style.overflow = "initial";
  document.querySelector("body").style.height = "initial";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector("video").remove();
    document.getElementById("website3").style.visibility = "hidden";
    document.getElementById("projectImg3").style.filter = "none";
    document.querySelector(".container").style.filter = "none";
    document.querySelector("body").style.overflow = "initial";
    document.querySelector("body").style.height = "initial";
  }
};
