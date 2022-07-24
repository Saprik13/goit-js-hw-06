const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refs = {
  galleryList: document.querySelector('.gallery'),
};

function createGallery(images, gallery) {
  const addImages = images
    .map(
      (
        image
      ) => `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li><style>
  .gallery { 
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

  .gallery__item:not(:last-of-type) {
    margin-right: 10px; 
  }

  .gallery__img {
    display: block;
    min-height: 100%; 
    max-width: 100%;
    object-fit: cover; 

   }
  </style>`
    )
    .join(''); //прибирє коми

  gallery.insertAdjacentHTML('afterbegin', addImages);
}
createGallery(images, refs.galleryList);
