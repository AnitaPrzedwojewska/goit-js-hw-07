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

// function closeElement(event, element) {
//   // console.log(event.key);
//   if (event.key === "Escape") {
//     console.log("Naciśnięty został klawisz 'Escape'");
//     element.close();
//   }
// }

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  function closeElement(event, element) {
    // console.log(event.key);
    if (event.key === "Escape") {
      console.log("Naciśnięty został klawisz 'Escape'");
      element.close();
    }
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
      //   console.log("'imageElement' jest otwarty");
      //   const key = event.key;
      //   console.log(key);
      //   // imageElement.element().addEventListener("keydown", (event) => {
      //   document.addEventListener("keydown", (event, imageElement) => {
      //     document.removeEventListener("keydown", closeElement, false)
      //   });
      // }
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