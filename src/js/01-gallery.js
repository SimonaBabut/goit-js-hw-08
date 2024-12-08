// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

// Selectează containerul pentru galerie
const galleryContainer = document.querySelector('.gallery');

// Funcția pentru crearea galeriei
function createGallery(items) {
  const galleryMarkup = items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
  
  galleryContainer.innerHTML = galleryMarkup;
}

// Apelăm funcția pentru a popula galeria
createGallery(galleryItems);

// Inițializarea librăriei SimpleLightbox pe linkurile galeriilor
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Folosește atributul "alt" pentru descrierea imaginii
  captionDelay: 250, // Întârziere pentru afișarea descrierii
});
