const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselImages = ["./img/slide5.jpg", "./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg", "./img/slide4.jpg", "./img/slide5.jpg", "./img/slide1.jpg"];
const myImage = document.getElementById('mainImage');
const firstImage = carouselImages[0];
const lastImage = carouselImages[carouselImages.length - 1];
let counter = 1;
myImage.src =  carouselImages[counter];

//  --------Buttons-----
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// setInterval(function() {
//     for (var i = 1; i < carouselImages.length - 1; i++) {
//         myImage.style.opacity = 1;
//     }
//     myImage.style.opacity = 0.5;
//   }, 500);

// const size = myImage.clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
const nextSlide = () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    myImage.src = carouselImages[counter];
    if(counter === carouselImages.length - 1) {counter = 1;}
};

// const slideInterval = setInterval(nextSlide, 2500);

nextBtn.addEventListener('click', nextSlide);


prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    myImage.src = carouselImages[counter];
    if(counter === 0) {counter = 6;}
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
    }
});
