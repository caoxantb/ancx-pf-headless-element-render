export function initOverlay(data) {
  if (["modal", "lightbox", "popup-video"].includes(data["data-action"])) {
    const overlay = document.createElement("div");
    overlay.style.visibility = "hidden";
    overlay.className = "pf-o";
    document.body.appendChild(overlay);
  }
}

//data-action="modal"
export function addOverlay(e) {
  e.preventDefault();
  e.stopPropagation();
  const body = document.body;
  const overlay = document.querySelector(".pf-o");
  body.style.overflow = "hidden";
  body.style.height = "100%";
  overlay.setAttribute(
    "style",
    "opacity: 1; visibility: visible; pointer-events: initial"
  );
}

///pf-o
export function hideOverlay(e) {
  e.preventDefault();
  e.stopPropagation();
  const body = document.body;
  const overlay = document.querySelector(".pf-o");
  const modal = document.querySelector(".pf-m");

  body.style.overflow = "";
  body.style.height = "";
  overlay.removeAttribute("style");
  if (modal) {
    modal.removeAttribute("style");
    modal.innerHTML = "";
  }
}
