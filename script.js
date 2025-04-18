
const video = document.getElementById("introVideo");

video.addEventListener("ended", () => {
  window.location.href = "homepage.html";
});
