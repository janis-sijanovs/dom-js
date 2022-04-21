const headerNav = document.querySelector<HTMLDivElement>(".js-header__nav")
const navLinks = ["Home", "Events", "About", "Blog", "Contact"]

navLinks.forEach(element => {
    headerNav.innerHTML += `<a href="" class="header__nav-item">${element}</a>`
});

const toastButton = document.querySelector<HTMLButtonElement>(".js-play-button")
const hero = document.querySelector<HTMLDivElement>(".js-hero")
let toastCloseButton: HTMLButtonElement = null

toastButton.addEventListener("click", (e: Event) => {
    hero.innerHTML += 
    `<div class="toast toast--white toast__text--red">
    <span>This is a toast for info</span>
        <div class="toast__svg-box">
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99999 4.58599L10.243 0.342987C10.6335 -0.0474781 11.2665 -0.0474791 11.657 0.342986C12.0475 0.733452 12.0475 1.36652 11.657 1.75699L7.41399 5.99999L11.657 10.243C12.0475 10.6335 12.0475 11.2665 11.657 11.657C11.2665 12.0475 10.6335 12.0475 10.243 11.657L5.99999 7.41399L1.75699 11.657C1.36652 12.0475 0.733452 12.0475 0.342986 11.657C-0.0474791 11.2665 -0.0474789 10.6335 0.342987 10.243L4.58599 5.99999L0.342987 1.75699C-0.0474782 1.36652 -0.0474791 0.733452 0.342986 0.342986C0.733452 -0.0474791 1.36652 -0.0474789 1.75699 0.342987L5.99999 4.58599Z"/>
            </svg>
        </div>
    </div>`

    toastCloseButton = document.querySelector<HTMLButtonElement>(".toast__svg-box")

    toastCloseButton.addEventListener("click", (e: Event) => {
        toastCloseButton.parentElement.remove()
    })
})

let currentSlideIndex = 0
const sliderLeft = document.querySelector<HTMLButtonElement>(".js-slider-left")
const sliderRight = document.querySelector<HTMLButtonElement>(".js-slider-right")
const sliderElements = document.querySelectorAll<HTMLDivElement>(".slider__item-group")
const slideCount = sliderElements.length-1

const toggleHiddenClasses = () => {
    sliderElements.forEach((element, index) => {
        if (currentSlideIndex === index) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    })
}

sliderRight.addEventListener("click", () => {
    const isLastSlide = slideCount === currentSlideIndex

    currentSlideIndex = !isLastSlide ? currentSlideIndex+1 : 0

    toggleHiddenClasses()
})

sliderLeft.addEventListener("click", () => {
    const isFirstSlide = currentSlideIndex === 0

    currentSlideIndex = isFirstSlide ? slideCount : currentSlideIndex-1

    toggleHiddenClasses()
})

const subscribeButton = document.querySelector<HTMLButtonElement>(".js-subscribe-button")
const emailBox = document.querySelector<HTMLDivElement>(".js-email-box")
const subscribeInput = document.querySelector<HTMLInputElement>(".js-input")
const footer = document.querySelector<HTMLDivElement>(".js-footer")

subscribeButton.addEventListener("click", () => {
    const email = subscribeInput.value
    subscribeInput.value = ""

    emailBox.innerHTML += `<p class="footer__email">${email}</p>`
})

const BOX5COLORS = ['rgb(147, 255, 51)', 'rgb(255, 187, 51)', 'rgb(88, 24, 69)', 'rgb(51, 255, 144)', 'rgb(172, 51, 255)']

const randomizeColor = (): string => {
    const index = Math.round(Math.random() * 4);
    return BOX5COLORS[index]
}

const checkColor = (): string => {
    const newColor = randomizeColor()
    if (footer.style.backgroundColor == newColor) {
        return checkColor()
    } else {
        return newColor
    }
}

subscribeInput.addEventListener("input", () => {
    footer.style.backgroundColor = checkColor()
})
