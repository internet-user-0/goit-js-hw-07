import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markingPlace = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

markingPlace.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
return items
   .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}" >
   <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
   />
   </a>
</div>
`;
   })
   .join("");
}

new SimpleLightbox(".gallery a", {
   captionSelector: "img",
   captionData: "title",
   captionPosition: "bottom",
   captionsData: "alt",
   captionDelay: 250,
});