// -----------------------------------------------------------
//!       Images array
// -----------------------------------------------------------

let images = [{
        image: "./images/slide-4.png",
        text: "Small robot with wings."
    },
    {
        image: "./images/slide-1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?"
    },
    {
        image: "./images/slide-2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        image: "./images/slide-3.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        image: "./images/img_1.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        image: "./images/img_2.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        image: "./images/img_3.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        image: "./images/img_4.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
];

//!     Addition of array items to page.

images.forEach(({
    image,
    text
}) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('imageHolder');
    const slide = document.createElement('img');
    slide.src = image;
    const caption = document.createElement('p');
    caption.innerHTML = text;
    caption.classList.add('captionText');
    const slideShowContainer = document.querySelector('.slideShowContainer');


    slideDiv.appendChild(slide);
    slideDiv.appendChild(caption);
    slideShowContainer.appendChild(slideDiv);

});

//!       Initialize function

let slideIndex, slides, captionText;

const initGallery = () => {
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".captionTextHolder .captionText");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    //!   Disable nextPrevBtn if slide count is one

    if (slides.length < 2) {
        const nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display = "none";
        // for (i = 0; i < nextPrevBtn.length; i++) {
        //     nextPrevBtn[i].style.display = "none";
        // }
    }

    //?         Addition of dots 
    dots = [];
    let dotsContainer = document.getElementById("dotsContainer"),
        i;
    for (i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick", "moveSlide(" + i + ")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

let timer = null; /* timer for setTimer function */

const plusSlides = (n) => {
    moveSlide(slideIndex + n);
}


//  !      Move function of slides.

const moveSlide = (n) => {
    clearInterval(timer);
    setTimer();
    let i;
    let current, next;
    const moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    let slideTextAnimClass;
    if (n > slideIndex) {
        if (n >= slides.length) {
            n = 0;
        }
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass = "slideTextFromTop";
    } else if (n < slideIndex) {
        if (n < 0) {
            n = slides.length - 1;
        }
        moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
        moveSlideAnimClass.forNext = "moveRightPrevSlide";
        slideTextAnimClass = "slideTextFromBottom";
    }

    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;
        captionText.style.display = "none";
        captionText.className = "captionText " + slideTextAnimClass;
        captionText.innerText = slides[n].querySelector(".captionText").innerText;
        captionText.style.display = "block";
    }
    console.log(next);
    console.log(current);
}


const setTimer = () => {
    timer = setInterval(() => {
        plusSlides(1);
    }, 3000);
}
setTimer();
console.log(timer);




// ? disable sliding for a period
// ? sliding effect is broken when i try to go other side.