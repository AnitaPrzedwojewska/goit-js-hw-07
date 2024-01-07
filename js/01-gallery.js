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

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageElement = basicLightbox.create(
    `
		<img src="${event.target.dataset.source}">
	`,
    {
      onShow: (imageElement) => {
        console.log("'imageElement' jest otwarty");
        const key = event.key;
        console.log(key);
        // imageElement.element().addEventListener("keydown", (event) => {
        document.addEventListener("keydown", (event) => {
          // console.log(event.key);
          if (event.key === "Escape") {
            console.log("Naciśnięty został klawisz 'Escape'");
            imageElement.close();
          }
        });
      },
      onClose: (imageElement) => {
        console.log("'imageElement' jest zamknięty");
        document.removeEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            imageElement.close();
          }
        });
      }
      // onShow: (imageElement) => {
      //   document.addEventListener("keydown", (event) => {
      //     if (event.key === "Escape") {
      //       imageElement.close();
      //     }
      //   });
      // },
      // onClose: (imageElement) => {
      //   document.removeEventListener("keydown", (event) => {
      //     if (event.key === "Escape") {
      //       imageElement.close();
      //     }
      //   });
      // },
    }
  );

  // console.log(imageElement.element());

  imageElement.show();

  // galleryElement.addEventListener("keydown", (event) => {
  //   if (event.key === "Escape") {
  //     console.log("Naciśniety został klawisz 'Escape'.")
  //     imageElement.close();
  //   }
  // });
}