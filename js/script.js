const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('.nav')
const navBarItems = document.querySelectorAll('.nav__item')
const cardBtns = document.querySelectorAll('.models__card-toogle-btn')
const cardImg = document.querySelector('.models__card-img')
const cardInfo = document.querySelector('.models__card-info')
const cardInfoBtnIcon = document.querySelector('.models__card-info-btn-chevron')
const cardInfoBox = document.querySelector('.models__card-info-box') 


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

let cardState = 'initial';

const handleCard = () => {
    const handleClick = () => {
        if (cardState === 'initial') {
            cardImg.classList.add('models__card-img-animation');
            cardInfo.classList.add('models__card-info-animation');
            cardInfoBtnIcon.classList.add('models__card-info-btn-chevron-active');
            cardInfoBox.classList.add('models__card-info-box--active')
            cardState = 'animation';
        } 
        else if (cardState === 'animation') {
            cardImg.classList.remove('models__card-img-animation');
            cardInfo.classList.remove('models__card-info-animation');
            cardImg.classList.add('models__card-img-animation-reverse');
            cardInfo.classList.add('models__card-info-animation-reverse');
            cardInfoBtnIcon.classList.remove('models__card-info-btn-chevron-active');
            cardInfoBox.classList.remove('models__card-info-box--active')
            cardState = 'reverseAnimation';
        }
        else if (cardState === 'reverseAnimation') {
            cardImg.classList.remove('models__card-img-animation-reverse');
            cardInfo.classList.remove('models__card-info-animation-reverse');
            cardImg.classList.add('models__card-img-animation');
            cardInfo.classList.add('models__card-info-animation');
            cardInfoBtnIcon.classList.add('models__card-info-btn-chevron-active');
            cardInfoBox.classList.add('models__card-info-box--active')
            cardState = 'animation';
        }
    };

    cardBtns.forEach(item => {
        item.removeEventListener('click', handleClick);
        item.addEventListener('click', handleClick);
    });
};


burgerBtn.addEventListener('click', handleNav)
handleCard()