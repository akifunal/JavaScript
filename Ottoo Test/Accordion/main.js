let accordions = [{
        title: "Section 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Section 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Section 3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        title: "Section 4",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        title: "Section 5",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
]


accordions.forEach(({
    title,
    content
}) => {
    const accordionDiv = document.createElement('div');
    accordionDiv.classList.add('accordionDiv');
    const accordion = document.createElement('button');
    accordion.classList.add('accordion');
    accordion.innerHTML = title;
    const panel = document.createElement('div');
    panel.classList.add('panel');
    const contentP = document.createElement('p');
    contentP.innerHTML = content;

    panel.appendChild(contentP);
    accordionDiv.appendChild(accordion);
    accordionDiv.appendChild(panel);
    document.querySelector('body').appendChild(accordionDiv);

});

// const accordionCheck = document.getElementsByClassName('accordion');
// for (let i = 0; i < accordionCheck.length; i++) {
//     accordionCheck[i].addEventListener('click', function () {
//         accordionCheck
//     })
// }

const accordionCheck = document.getElementsByClassName('accordion');
for (let i = 0; i < accordionCheck.length; i++) {
    accordionCheck[i].addEventListener('click', toggleItem);
}

function toggleItem() {
    if (document.querySelector('button').classList.contains('active')) {
        const accordionActiveSibling = document.querySelector('.active');
        const panelNextSibling = accordionActiveSibling.nextElementSibling;
        if (panelNextSibling.style.maxHeight) {
            panelNextSibling.style.maxHeight = null;
            console.log('Test');
        } else {
            panelNextSibling.style.maxHeight = '';
            console.log('Test false');
        }
    } else {
        // console.log('test');
    }


    this.classList.toggle("active");
    const panelNext = this.nextElementSibling;
    if (panelNext.style.maxHeight) {
        panelNext.style.maxHeight = ''; // why not 0 ? 0 == false?
    } else {
        panelNext.style.maxHeight = panelNext.scrollHeight + "px";
    }

}