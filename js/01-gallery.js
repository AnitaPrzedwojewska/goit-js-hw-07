import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElement = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
`<div class='gallery__item'>
  <a class='gallery__link' href=${original}>
    <img
      class='gallery__image'
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>\n`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryList);
