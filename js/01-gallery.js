import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItems() {
  galleryItems.forEach((item, index) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.dataset.source = item.original;
    galleryImage.dataset.index = index;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
  });
}

createGalleryItems();

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageUrl = event.target.dataset.source;
  const imageIndex = Number(event.target.dataset.index);

  openModal(imageUrl, imageIndex);
}

function openModal(url, index) {
  const instance = basicLightbox.create(`
    <img src="${url}" alt="Image ${index + 1}" width="800" height="600">
  `);

  instance.show();
}

gallery.addEventListener('click', onGalleryClick);
