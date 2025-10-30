// 🕒 Wallpaper fade + video & music after 39 seconds
setTimeout(() => {
  const wallpaper = document.getElementById("wallpaper");
  const videoContainer = document.getElementById("video-container");
  const music = document.getElementById("bgMusic");

  // Wallpaper fade-out
  wallpaper.style.opacity = "0";

  setTimeout(() => {
    wallpaper.style.display = "none";
    videoContainer.style.display = "block";

    // 🎵 Start background music smoothly
    music.volume = 0;
    music.play();

    // Gradually increase volume
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);
  }, 2000);
}, 39000); // ⏱️ 39 seconds delay

console.log("🎬 Welcome to 𝐽𝛩𝛧𝐼𝑌𝜟 𝛸𝛭𝐷 cinematic site!");
