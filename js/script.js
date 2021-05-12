const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header-menu');

document.querySelectorAll('.click').forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains('open')) {
            e.target.classList.remove('open');
            overlay.classList.remove('overlay-open');
            headerMenu.classList.remove('open');
        } else {
            e.target.classList.add('open');
            overlay.classList.add('overlay-open');
            headerMenu.classList.add('open');
        }
    })
});