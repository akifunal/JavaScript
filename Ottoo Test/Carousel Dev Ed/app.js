const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselImages = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg", "./img/slide4.jpg", "./img/slide5.jpg"];
const myImage = document.getElementById('mainImage');
const firstImage = carouselImages[0];
const lastImage = carouselImages[carouselImages.length - 1];
let counter = 0;
myImage.src =  carouselImages[counter];
myImage.scrollIntoView({behavior: 'smooth'});

//  --------Buttons-----
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

setInterval(function() {
    for (var i = 1; i < carouselImages.length - 1; i++) {
        myImage.style.opacity = 1;
    }
    myImage.style.opacity = 0.5;
  }, 500);


// Button Listeners
const nextSlide = () => {
    counter++;
    myImage.src = carouselImages[counter];
};

// const slideInterval = setInterval(nextSlide, 2500);

nextBtn.addEventListener('click', nextSlide);


prevBtn.addEventListener('click', () => {
    counter--;
    myImage.src = carouselImages[counter];
    document.getElementById('mainImage').scrollIntoView({
        behavior: 'smooth'
    });
});

