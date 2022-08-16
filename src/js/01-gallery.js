// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryListMarkUp = createGalleryList(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryListMarkUp);

function createGalleryList(imagesArray) {
  return imagesArray
    .map(({ original, preview, description }) => {
      return `        
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                title="${description}"
            />
        </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  scrollZoom: false,
});
