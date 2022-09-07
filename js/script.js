console.log('JS OK!');


/*
creare un carousel di immagini
le immagini sono in un array (array di stringhe)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 secondi la slide avanza automaticamente
*/

// settings
const NUM_IMAGES = 5;
const CHANGE_IMAGE_DELAY = 5;

const images = createImageArray(NUM_IMAGES);
console.log(images);



let activeIndex = 0;
buildCarousel(images, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

leftArrowButton.addEventListener('click', moveCarouselPrevious);


rightArrowButton.addEventListener('click', moveCarouselForward);





function moveCarouselForward(){
    clearInterval(idInterval)
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < images.length -1 ? activeIndex +1 : 0 ;
    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

function moveCarouselPrevious(){
     clearInterval(idInterval)
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex -1 : images.length -1 ;
    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}


function buildCarousel(urls, activeIndex){
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img'
        content += `<img class="${imageClass}" src="${url}" alt="${url}" />`;
    }
    // console.log({content});
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
}


function createImageArray(numImages){
    const images = [];
    for(let i = 1; i <= numImages; i++){
        const fileName = i < 10 ? '0' + i : i;
        const url = 'img/' + fileName + '.jpg';
        images.push(url); 
    }

    return images;
}