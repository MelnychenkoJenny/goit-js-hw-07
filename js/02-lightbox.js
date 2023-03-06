import { galleryItems } from './gallery-items.js';

const containerGallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `  <li> 
    <a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" 
      alt="${description}" width="350"
      height="240"" style="display: block"/>
    </a> 
    </li> 
    `,
    )
    .join('');
}
containerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

const modalLightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
