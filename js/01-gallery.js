import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markingPlace = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);


markingPlace.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(items) {
return items
   .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}" >
   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   />
   </a>
</div>
`;
   })
   .join("");
}

markingPlace.addEventListener("click", onCreateBigImage);

function onCreateBigImage(evt) {
evt.preventDefault();
if (evt.target.classList.contains("gallery")) {
   return;
   }
const instance = basicLightbox.create(
   `<img src="${evt.target.dataset.source}">`,
   {
      onShow: (instance) => {
         window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
         window.removeEventListener("keydown", onEscKeyPress);
      },
   }
   );
instance.show();
function onEscKeyPress(evt) {
   if (evt.code === "Escape") {
      instance.close();
   }
}}