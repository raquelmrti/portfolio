const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  const galleryImg = e.target.matches(".gallery__img");
  const galleryCap = e.target.matches(".gallery__caption");
  const modal = e.target.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".gallery__modal__icon-close");

  if (galleryImg | galleryCap) {
    modal.classList.add("is-open");
    document.body.style.overflowY = "hidden";
  }

  const modalClose = () => {
    document.body.style.overflowY = "scroll";
    modal.classList.remove("is-open");
  };

  closeButton.addEventListener("click", modalClose);
  closeButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      modalClose();
    }
  });
});