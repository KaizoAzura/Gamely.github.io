function showVideo(card) {
  let image = card.querySelector(".media-image");
  let video = card.querySelector(".media-video");
  image.classList.add("d-none");
  video.classList.remove("d-none");
  video.play();
}

function showImage(card) {
  let image = card.querySelector(".media-image");
  let video = card.querySelector(".media-video");
  video.pause();
  video.currentTime = 0;
  video.classList.add("d-none");
  image.classList.remove("d-none");
}
