let backgroundVideo = document.querySelector(".bg__video");

backgroundVideo.onended = () => {
	backgroundVideo.src = "assets/bgvideo_alt.mp4";
	backgroundVideo.loop = true;
	backgroundVideo.play();
};
