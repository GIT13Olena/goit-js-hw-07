import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;

  const galleryCaption = document.createElement("figcaption");
  galleryCaption.classList.add("gallery__caption");
  galleryCaption.textContent = description;

  galleryLink.appendChild(galleryImage);
  galleryLink.appendChild(galleryCaption);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const galleryItemsElements = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
