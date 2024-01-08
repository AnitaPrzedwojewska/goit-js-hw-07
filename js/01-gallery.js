import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryElement = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>\n`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryList);

galleryElement.addEventListener("click", showImage);

const imageElement = basicLightbox.create(
  `
		<img src="">
	`,
  {
    onShow: () => {
      document.addEventListener("keydown", pressKey);
    },
    onClose: () => {
      document.removeEventListener("keydown", pressKey);
    },
  }
);

function pressKey() {
  if (event.key === "Escape") {
    imageElement.close();
    // console.log("Naciśnięto klawisz 'Escape'.");
  }
}

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // console.log(imageElement.element());
  imageElement.element().querySelector("IMG").src = event.target.dataset.source;
  imageElement.show();
}