import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector("ul.gallery");

for (const el of galleryItems) {


  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.alt = el.description;
  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
};
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(lightbox.captionsData)