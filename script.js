function playIntro() {
    document.querySelector('.hero').style.display = 'none';
    var video = document.getElementById('introVideo');
    video.style.display = 'block';
    video.play();
    video.onended = function() {
        window.location.href = "homepage.html";
    };
}