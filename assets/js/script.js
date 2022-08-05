
// making close and open navigation

const menuBtn = document.querySelector('.mobie__menuBtn');
const openMobieNav = document.getElementsByClassName('my__link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    if (openMobieNav[0].style.display === '') {
        openMobieNav[0].style.display = 'flex';
    } else {
        openMobieNav[0].style.display = 'none';
    };
});
