
const yesButton = document.getElementById("yes-button");
const introScreen = document.getElementById("intro-screen");
const introVideo = document.getElementById("intro-video");

yesButton.addEventListener("click", () => {
  introScreen.style.display = "none";
  introVideo.style.display = "block";
  introVideo.play();
});

introVideo.addEventListener("ended", () => {
  window.location.href = "homepage.html";
});
