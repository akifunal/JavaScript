let imagesTest: { image: string, text: string }[] = [
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

imagesTest.forEach(({
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






let slideIndex: number, slides: any, captionText: string;