const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('.nav')
const navBarItems = document.querySelectorAll('.nav__item')

const cardBtnsOne = document.querySelectorAll('.models-card-js-btn-one')
const cardImgBtnHideOne = document.querySelector('.models-card-js-bt-hide-one') 
const cardInfoBtnIconOne = document.querySelector('.models-card-js-chevron-one')
const cardImgOne = document.querySelector('.models-card-js-img-one')
const cardInfoOne = document.querySelector('.models-card-js-info-one')
const cardInfoBoxOne = document.querySelector('.models-card-js-info-box-one') 
const cardImgHeadingOne = document.querySelector('.models-card-js-img-heading-one') 

const cardBtnsTwo = document.querySelectorAll('.models-card-js-btn-two')
const cardImgBtnHideTwo = document.querySelector('.models-card-js-bt-hide-two') 
const cardInfoBtnIconTwo = document.querySelector('.models-card-js-chevron-two')
const cardImgTwo = document.querySelector('.models-card-js-img-two')
const cardInfoTwo = document.querySelector('.models-card-js-info-two')
const cardInfoBoxTwo = document.querySelector('.models-card-js-info-box-two') 
const cardImgHeadingTwo = document.querySelector('.models-card-js-img-heading-two') 

const cardBtnsThree = document.querySelectorAll('.models-card-js-btn-three')
const cardImgBtnHideThree = document.querySelector('.models-card-js-bt-hide-three') 
const cardInfoBtnIconThree = document.querySelector('.models-card-js-chevron-three')
const cardImgThree = document.querySelector('.models-card-js-img-three')
const cardInfoThree = document.querySelector('.models-card-js-info-three')
const cardInfoBoxThree = document.querySelector('.models-card-js-info-box-three') 
const cardImgHeadingThree = document.querySelector('.models-card-js-img-heading-three') 






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

const handleCard = (cardBtns, cardImgBtnHide, cardInfoBtnIcon, cardImg, cardInfo, cardInfoBox, cardImgHeading) => {
    const handleClick = () => {
        if (cardState === 'initial') {
            cardImg.classList.add('models__card-img-animation');
            cardInfo.classList.add('models__card-info-animation');
            cardInfoBtnIcon.classList.add('models__card-info-btn-chevron-active');
            cardInfoBox.classList.add('models__card-info-box--active')
            cardImgHeading.classList.add('models__card-img-heading--active')
            cardImgBtnHide.classList.add('models__card-img-btn-hide--active')
            cardState = 'animation';
        } 
        else if (cardState === 'animation') {
            cardImg.classList.remove('models__card-img-animation');
            cardInfo.classList.remove('models__card-info-animation');
            cardImg.classList.add('models__card-img-animation-reverse');
            cardInfo.classList.add('models__card-info-animation-reverse');
            cardInfoBtnIcon.classList.remove('models__card-info-btn-chevron-active');
            cardInfoBox.classList.remove('models__card-info-box--active')
            cardImgHeading.classList.remove('models__card-img-heading--active')
            cardImgBtnHide.classList.remove('models__card-img-btn-hide--active')
            cardState = 'reverseAnimation';
        }
        else if (cardState === 'reverseAnimation') {
            cardImg.classList.remove('models__card-img-animation-reverse');
            cardInfo.classList.remove('models__card-info-animation-reverse');
            cardImg.classList.add('models__card-img-animation');
            cardInfo.classList.add('models__card-info-animation');
            cardInfoBtnIcon.classList.add('models__card-info-btn-chevron-active');
            cardInfoBox.classList.add('models__card-info-box--active')
            cardImgHeading.classList.add('models__card-img-heading--active')
            cardImgBtnHide.classList.add('models__card-img-btn-hide--active')
            cardState = 'animation';
        }
    };

    cardBtns.forEach(item => {
        item.removeEventListener('click', handleClick);
        item.addEventListener('click', handleClick);
    });
};


burgerBtn.addEventListener('click', handleNav)
handleCard(cardBtnsOne, cardImgBtnHideOne, cardInfoBtnIconOne, cardImgOne, cardInfoOne, cardInfoBoxOne, cardImgHeadingOne)
handleCard(cardBtnsTwo, cardImgBtnHideTwo, cardInfoBtnIconTwo, cardImgTwo, cardInfoTwo, cardInfoBoxTwo, cardImgHeadingTwo)
handleCard(cardBtnsThree, cardImgBtnHideThree, cardInfoBtnIconThree, cardImgThree, cardInfoThree, cardInfoBoxThree, cardImgHeadingThree)