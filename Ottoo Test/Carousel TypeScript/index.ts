let imagesTest: ReadonlyArray<{ image?: string, text?: string }> = [
  {
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

imagesTest.forEach(({
  image,
  text
}) => {
  const slideDiv = document.createElement('div') as HTMLDivElement;
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


let slideIndex: number, slides: any, captionText, dots: HTMLSpanElement[];


// interface initializeFunction {
//   (): boolean;
// }

// !   Disable nextPrevBtn if slide count is one

const initGallery = (): void => {
  slideIndex = 1;
  slides = document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity = 1;
  captionText = document.querySelector(".captionTextHolder .captionText");
  captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

  if (slides.length < 2) {
    const nextPrevBtn = document.querySelector("leftArrow,rightArrow");
    nextPrevBtn.setAttribute("style", "display:none;");
    // for (let i: number = 0; i < nextPrevBtn.length; i++) {
    //   nextPrevBtn[i].style.display = "none";
    // }
  }
  //?         Addition of dots    
  let dotsContainer = document.getElementById("dotsContainer"),
    i: number;
  for (i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dot.setAttribute("onclick", "moveSlide(" + i + ")");
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
};


initGallery();
let timer = null; /* timer for setTimer function */
const plusSlides: (n: number) => void = (n) => {
  moveSlide(slideIndex + n);
};


//  !      Move function of slides.
const moveSlide: (n: number) => void = (n) => {
  clearInterval(timer);
  setTimer();
  let i: number;
  let current: any, next: any;
  const moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  };
  let slideTextAnimClass: string;
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

const setTimer = (): void => {
  timer = setInterval(function () {
    plusSlides(1);
  }, 3000);
};
setTimer();
console.log(timer);