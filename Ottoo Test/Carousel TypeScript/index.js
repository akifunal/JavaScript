var imagesTest = [{
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
//?  Test
imagesTest.forEach(function (_a) {
    var image = _a.image,
        text = _a.text;
    var slideDiv = document.createElement('div');
    slideDiv.classList.add('imageHolder');
    var slide = document.createElement('img');
    slide.src = image;
    var caption = document.createElement('p');
    caption.innerHTML = text;
    caption.classList.add('captionText');
    var slideShowContainer = document.querySelector('.slideShowContainer');
    slideDiv.appendChild(slide);
    slideDiv.appendChild(caption);
    slideShowContainer.appendChild(slideDiv);
});
var slideIndex, slides, captionText;
// interface initializeFunction {
//   (): boolean;
// }
// !   Disable nextPrevBtn if slide count is one
var initGallery = function () {
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;
    captionText = document.querySelector(".captionTextHolder .captionText");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;
    if (slides.length < 2) {
        var nextPrevBtn = document.querySelector("leftArrow,rightArrow");
        nextPrevBtn.setAttribute("style", "display:none;");
        for (let i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display = "none";
        }
    }
    //?         Addition of dots 
    dots = [];
    var dotsContainer = document.getElementById("dotsContainer"),
        i;
    for (i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick", "moveSlide(" + i + ")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
};
initGallery();
var timer = null; /* timer for setTimer function */
var plusSlides = function (n) {
    moveSlide(slideIndex + n);
};
//  !      Move function of slides.
var moveSlide = function (n) {
    clearInterval(timer);
    setTimer();
    var i;
    var current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    var slideTextAnimClass;
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
        console.log(current);
        console.log(next);
    }
};
var setTimer = function () {
    timer = setInterval(function () {
        plusSlides(1);
    }, 3000);
};
setTimer();
console.log(timer);