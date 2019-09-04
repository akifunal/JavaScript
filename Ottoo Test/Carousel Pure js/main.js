const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
const nav = document.querySelector('.carousel__nav');

let first_slide;
let first_dot;
let last_slide;
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
    },
    {
        title: "Project 4",
        type: "Robot",
        content: "Small robot with wings.",
        image: "./images/slide-4.png"
    }
]



//  ----------------------- Project Loop ---------------------------



projects.forEach(({
    title,
    type,
    content,
    image
}, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slider__slide');
    slide.style.backgroundImage = "url('" + image + "')";
    slide.setAttribute('data-index', i);

    const dot = document.createElement('button');
    dot.classList.add('carousel__indicator');
    dot.setAttribute('data-slide-to', i);


    if (i == 0) {
        first_slide = slide;

        slide.classList.add('active');
        first_dot = dot;

        dot.classList.add('current-slide');
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
    nav.appendChild(dot);

});


// --------------------  Function -----------------

const dot = nav.querySelectorAll('.carousel__indicator');

const goToSlide = (i) => {
    const slide = slider.querySelectorAll('[data-index="i"]');

    const active_slide = document.querySelector('.slider__slide.active');
    const active_dot = document.querySelector('.carousel__indicator.current-slide');
    let target = active_slide;
    let target_dot = active_dot.nextElementSibling;

};

for (let i = 0; i < projects.length; i++) {
    dot[i].addEventListener('click', goToSlide(i));
}



//  ----------------------- Next Button ---------------------------

const nextSlide = () => {

    const active_slide = document.querySelector('.slider__slide.active');
    const active_dot = document.querySelector('.carousel__indicator.current-slide');
    let sibling = active_slide.nextElementSibling;
    let sibling_dot = active_dot.nextElementSibling;

    if (sibling == null) {
        sibling = first_slide;
    }

    if (sibling_dot == null) {
        sibling_dot = first_dot;
    }

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }

    if (sibling_dot.classList.contains('carousel__indicator')) {
        active_dot.classList.remove('current-slide');
        sibling_dot.classList.add('current-slide');
    }
}

next_btn.addEventListener('click', nextSlide);

const myInterval = setInterval(nextSlide, 2500);


//  ----------------------- Previous Button ---------------------------


prev_btn.addEventListener('click', () => {
    // clearInterval(myInterval);
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