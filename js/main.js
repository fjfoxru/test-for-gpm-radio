const modal = document.querySelector('.modal-wrapper');
const modalClose = document.querySelector('.close');
modalClose.addEventListener('click', event => {
    event.target.closest('.modal-wrapper').classList.remove('modal-wrapper_active');
});

const modalOpen = Array.from(document.getElementsByClassName('button_open'));
modalOpen.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.add('modal-wrapper_active');
    })

});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    form.outerHTML = `<p class="sent">${name}, Ваша заявка отправлена</p>`;
});


const openMenu = document.querySelector('.button-navigation');
const closeMenu = document.querySelector('.menu__close');
const menu = document.querySelector('.navigation');

openMenu.addEventListener('click', event => {
    event.preventDefault();
    menu.classList.add('navigation_active');
});
closeMenu.addEventListener('click', event => {
    menu.classList.remove('navigation_active');
});