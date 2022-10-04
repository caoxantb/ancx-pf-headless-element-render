import { modalCss } from "../styles/modal";

export const initModal = (data) => {

  if (["modal", "lightbox", "popup-video"].includes(data["data-action"])) {

    const style = document.createElement("style");
    const modal = document.createElement("div");

    modal.classList.add("pf-m");
    document.body.append(modal);

    document.head.appendChild(style);
    style.appendChild(document.createTextNode(modalCss));
  }
};
