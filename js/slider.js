let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;

const track = document.querySelector('.about__slider-track')
const items = document.querySelectorAll('.about__slider-item')
const btnPrev = document.querySelector('.about__slider-left')
const btnNext = document.querySelector('.about__slider-right')
const container = document.querySelector('.about__slider')
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    position -= movePosition
    setPosition()
    checkBtns()
})
btnPrev.addEventListener('click', () => {
    position += movePosition
    setPosition()
    checkBtns()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}


const checkBtns = () => {
    btnPrev.disabled = position === 0
    btnNext.disabled = position === -(items.length - 1) * itemWidth
}
checkBtns()