const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('.nav')

function handleBtn () {
    burgerBtn.classList.toggle('burger-btn-animation')
    navBar.classList.toggle('nav-active')
}

burgerBtn.addEventListener('click', handleBtn)