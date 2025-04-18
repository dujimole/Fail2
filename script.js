
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#intro").style.display = "flex";
  document.querySelector("#yesBtn").addEventListener("click", () => {
    document.querySelector("#intro").style.display = "none";
    const videoSection = document.querySelector("#videoSection");
    videoSection.style.display = "block";
    const video = document.querySelector("#introVideo");
    video.play();
    video.onended = () => {
      videoSection.style.display = "none";
      document.querySelector("#home").style.display = "block";
    };
  });
});
