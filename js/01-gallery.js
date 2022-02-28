import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector("div.gallery");

for (const el of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.dataset.source = el.original;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
};
galleryBox.addEventListener("click", ev => {
    event.preventDefault();
    const instance = basicLightbox.create(`
<img src=${event.target.dataset.source} width="800" height="600">
`, {onShow: (instance) => {document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		instance.close()
	}
});}})

instance.show()
})

