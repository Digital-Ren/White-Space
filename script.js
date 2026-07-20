const container = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";

    particle.style.animationDuration =
        8 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    container.appendChild(particle);
}






const music = document.getElementById("bgMusic");

music.volume = 0.05;

document.addEventListener("click", async () => {
    await music.play();
}, { once: true });