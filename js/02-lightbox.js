import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createGalleryItems() {
    galleryItems.forEach((item) => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery__item');
  
      const galleryLink = document.createElement('a');
      galleryLink.classList.add('gallery__link');
      galleryLink.href = item.original;
  
      const galleryImage = document.createElement('img');
      galleryImage.classList.add('gallery__image');
      galleryImage.src = item.preview;
      galleryImage.alt = item.description;
  
      galleryLink.appendChild(galleryImage);
      galleryItem.appendChild(galleryLink);
      gallery.appendChild(galleryItem);
    });
  }
  
  
  

createGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});