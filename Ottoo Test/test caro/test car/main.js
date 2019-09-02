const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let first_slide;
let last_slide;
let first_dot;
let last_dot;
let projects = [{
        title: "Project 1",
        type: "Website",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
        image: "./images/slide-1.jpg"
    },
    {
        title: "Project 2",
        type: "App",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "./images/slide-2.jpg"
    },
    {
        title: "Project 3",
        type: "Game",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "./images/slide-3.jpg"
    }
]

projects.forEach(({
    title,
    type,
    content,
    image
}, i) => {

    const carousel_nav = document.querySelector('.carousel__nav');
    const dot = document.createElement('button');
    dot.classList.add('carousel__indicator');
    const slide = document.createElement('div');
    slide.classList.add('slider__slide');
    slide.style.backgroundImage = "url('" + image + "')";

    if (i == 0) {
        dot.classList.add('current-slide');
        first_slide = slide;
        slide.classList.add('active');
        first_dot = dot;
    }

    if (i + 1 == projects.length) {
        last_slide = slide;
        last_dot = dot;
    }

    const slide_content = document.createElement('div');
    slide_content.classList.add('slider__content');

    const content_title = document.createElement('h3');
    content_title.classList.add('slider__title');
    content_title.textContent = title;

    const content_type = document.createElement('span');
    content_type.textContent = type;

    const content_content = document.createElement('div');
    content_content.classList.add('slider__desc');
    content_content.textContent = content;

    content_title.appendChild(content_type);
    slide_content.appendChild(content_title);
    slide_content.appendChild(content_content);
    slide.appendChild(slide_content);
    slider.appendChild(slide);
    slider.appendChild(carousel_nav);
    carousel_nav.appendChild(dot);
});

const counter = projects.length;

// const currentDot = (counter) => {
//     let active_slide = document.querySelector('.active')
//     let dots = document.getElementsByClassName("carousel__indicator");
//     for (let i = 0; i < counter; i++) {
//         dots[i].className = dots[i].className.replace(" current-slide", "");
//     }
//     dots[counter - 1].classList.add('current-slide');
// };

// currentDot(counter);


next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    const active_dot = document.querySelector('.carousel__indicator.current-slide')
    let sibling_dot = active_dot.nextElementSibling;
    let sibling = active_slide.nextElementSibling;
    if (sibling == null) {
        sibling = first_slide;
    }

    if(sibling_dot == null) {
        sibling_dot = first_dot;
    }

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }
    
    if(sibling_dot.classList.contains('carousel__indicator')) {
        active_dot.classList.remove('current-slide');
        sibling_dot.classList.add('current-slide');
    }

});
prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    const active_dot = document.querySelector('.carousel__indicator.current-slide')
    let sibling_dot = active_dot.previousElementSibling;
    let sibling = active_slide.previousElementSibling;
    if (sibling == null || !sibling.classList.contains('slider__slide')) {
        sibling = last_slide;
        console.log(sibling);

    }

    if (sibling_dot == null || !sibling_dot.classList.contains('carousel__indicator')) {
        sibling_dot = last_dot;
        console.log(sibling_dot);

    }


    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }

    if (sibling_dot.classList.contains('carousel__indicator')) {
        active_dot.classList.remove('current-slide');
        sibling_dot.classList.add('current-slide');
    }
});