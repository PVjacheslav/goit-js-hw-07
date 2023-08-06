import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(basicLightbox);

const container = document.querySelector('.gallery');

function createMarkup (arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class = "gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerGalleryClick);

function handlerGalleryClick(evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }
        // console.log(evt.target);
        const picture = evt.target.dataset.source;
        const instance = basicLightbox.create (
        `<div class="modal"><img src="${picture}" alt="" ></div>`
    )
    instance.show();

    container.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
}

console.log(galleryItems)