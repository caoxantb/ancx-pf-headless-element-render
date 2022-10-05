import { loadJS } from "./load-js";

export async function initParallax(section) {
  await loadJS("https://unpkg.com/jarallax@1/dist/jarallax.min.js").catch(
    console.error
  );
  console.log("run here 1")
  setTimeout(() => {
    const speed = section.getAttribute("data-parallax-speed") || 4;
    const img: any = section.querySelector(".pf-parallax-img");
    if ("jarallax" in window) {
      console.log("run here 2")
      window.jarallax(section, {
        speed: Number(speed) / 10,
        imgElement: ".pf-parallax-img",
        onInit: function () {
          img.style.opacity = 1;
        },
      });
    }
  }, 100);
}
