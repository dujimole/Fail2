
document.getElementById("start-btn").onclick = function () {
  document.getElementById("intro-section").classList.add("hidden");
  document.getElementById("video-section").classList.remove("hidden");

  const video = document.getElementById("intro-video");
  video.play();
  video.onended = function () {
    document.getElementById("video-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("hidden");
  };
};
