const mediaQuery = window.matchMedia('(max-width: 800px)');

function handleDeviceChange(e) {


  const nav = document.querySelector(".nav");
    const activeLink = document.querySelector(".nav__active");
    const sectionOne = document.querySelector(".header");

  if (e.matches) {

    const options = {
      rootMargin: "45px 0px 0px 0px"
    };

    const headerObserver = new IntersectionObserver(function (entries, headerObserver) {

      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          nav.style.backgroundColor = "#ff404e";
          activeLink.classList.add("scrolled");
        } else {
          nav.style.backgroundColor = "#fdfdfd";
          activeLink.classList.remove("scrolled");
        }
      })
    }, options);

    headerObserver.observe(sectionOne);
  }
}
  
mediaQuery.addEventListener("change", handleDeviceChange);
handleDeviceChange(mediaQuery);

//////// GALLERY ////////

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  
  const modal = e.target.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".gallery__modal__icon-close");

  const modalClose = () => {
    document.body.style.overflowY = "scroll";
    closeButton.removeEventListener("click", modalClose);
    modal.classList.remove("is-open");
  };

  const modalOpen = () => {

    modal.classList.add("is-open");
    document.body.style.overflowY = "hidden";
    modal.scrollTo(0, 0);

    closeButton.addEventListener("click", modalClose);
    closeButton.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        modalClose();
      }    
    });
  };


  const galleryImg = e.target.matches(".gallery__img");
  const galleryCap = e.target.matches(".gallery__caption");

  if (galleryImg | galleryCap) {
    modalOpen();
  }
});

