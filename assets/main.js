const menuIcon = document.getElementById('menu-icon');
const sideBar = document.getElementById('sidebar')
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    sideBar.classList.toggle('show')
})

