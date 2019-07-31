const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

//DOM -Document Object Model

//Query and remove
// const p = document.querySelector('p');
// p.remove();


//Query and remove all
const ps = document.querySelectorAll('p');

ps.forEach((p) => {
    console.log(p.textContent);
    //p.remove();
});

const newHeader = document.createElement('h1');
newHeader.textContent = 'Test Header :)';
document.querySelector('body').appendChild(newHeader);