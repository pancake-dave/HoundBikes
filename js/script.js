const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('.nav')
const navBarItems = document.querySelectorAll('.nav__item')


const handleNav = () => {
    if (burgerBtn.classList.contains('burger-btn-animation')) {
        burgerBtn.classList.remove('burger-btn-animation')
        navBar.classList.remove('nav-active')
    } else {
        burgerBtn.classList.add('burger-btn-animation')
        navBar.classList.add('nav-active')
    }

    navBarItems.forEach(item => {
        item.addEventListener ('click', () =>{
            navBar.classList.remove('nav-active')
            burgerBtn.classList.remove('burger-btn-animation')
        })
    })

}

burgerBtn.addEventListener('click', handleNav)