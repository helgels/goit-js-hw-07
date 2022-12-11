import { galleryItems } from "./gallery-items.js";
// Change code below this line


const gallery = document.querySelector(".gallery");

const GalleryMarkUp = createGalleryMarkUp(galleryItems);
gallery.insertAdjacentHTML('beforeend', GalleryMarkUp);


function createGalleryMarkUp(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    })
    .join("");
}

const lightbox = new SimpleLighthbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

