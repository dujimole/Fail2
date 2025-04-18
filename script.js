
function playIntro() {
  document.getElementById("intro").style.display = "none";
  const video = document.getElementById("introVideo");
  video.style.display = "block";
  video.play();
  video.onended = () => {
    video.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  };
}
