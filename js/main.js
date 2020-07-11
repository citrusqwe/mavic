const downArrow = document.querySelectorAll('.header__down-arrow')
const downArroww = document.querySelector('.header__down-arrow')
let scrollPos = 0

// downArrow.forEach(() => {
//     this.addEventListener('click', () => {
//         window.scrollTo({
//             top: i,
//             behavior: 'smooth'

//         })
//         console.log(scrollPos)
//     })
// })
// downArroww.addEventListener('click', () => {
//     window.scrollTo({
//         top: 960,
//         behavior: 'smooth'

//     })
//     console.log(scrollPos)
// })


const dropTitles = document.querySelectorAll('.questions__content-title')

dropTitles.forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode
        if (parent.classList.contains('questions__item--active')) {
            parent.classList.remove('questions__item--active')
        } else {
            document.querySelectorAll('.questions__item').forEach((child) => {
                child.classList.remove('questions__item--active')
                parent.classList.add('questions__item--active')
            })
        }
    })
})