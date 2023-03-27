import { galleryItems } from "./gallery-items.js";

const divRefGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            src="${item.preview}"
            class="gallery__image"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRefGallery.innerHTML = addGalleryMarkup;

divRefGallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
         `);
  instance.show();

  window.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
