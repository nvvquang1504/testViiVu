/***************BASE***************
 *
 */
const elements = {
    // languagesTitleActive: document.querySelectorAll('.languages__title.active'),
    languagesTitle: document.querySelectorAll('.languages__title'),
    navigationTitle: document.querySelectorAll('.navigation-bar__item'),
}

/***************STATE************
 *
 */

const state = {
    theInterval: '',
    slideIndex: 0,
    screenSize: {
        large: window.matchMedia("(min-width: 1380px)"),
        xLarge: window.matchMedia("(min-width: 1800px)"),
        xxLarge: 2000,
    }
}

/********CONTROL MENU SIGN UP*******
 *
 */
function controlMenuSignUp(target) {
    elements.languagesTitle.forEach(function (el) {
        el.classList.remove('active');
    })
    target.classList.add('active')
}

/**********CONTROL NAVIGATION BAR********
 *
 */
function controlNavigation(target) {
    elements.navigationTitle.forEach(function (el) {
        el.classList.remove('active');
    })
    target.classList.add('active')
}

/*************CONTROL SLIDER***********
 *
 */

showSlidesAuto()

function showSlidesAuto() {
    let slides = document.querySelectorAll('.mySliders');
    let dots = document.querySelectorAll('.dot__item');
    let slidersText = document.querySelectorAll('.eachSliderText')
    state.slides = slides
    state.dots = dots
    state.slidersText = slidersText
    slides.forEach(function (el) {
        el.style.display = 'none';
    });
    dots.forEach(function (el) {
        el.classList.remove('active');
    });
    slidersText.forEach(function (el2) {
        el2.style.display = 'none';
    });
    state.slideIndex++;
    if (state.slideIndex > slides.length) {
        state.slideIndex = 1
    }
    slides[state.slideIndex - 1].style.display = 'block';
    dots[state.slideIndex - 1].classList.add('active');
    slidersText[state.slideIndex - 1].style.display = 'block';
    startSlide()
}


function stopSlide() {
    if (state.theTimeout) {
        clearTimeout(state.theTimeout)
    }
}

function startSlide() {
    state.theTimeout = setTimeout(showSlidesAuto, 2000)
}

function toSlide(number) {
    clickToShowSlide(state.slideIndex += number);
}

function showCurrent(number) {
    clickToShowSlide(state.slideIndex = number)
}

function clickToShowSlide(n) {
    console.log(n)
    console.log(state.slideIndex)
    if (n > state.slides.length) {
        state.slideIndex = 1;
    }
    if (n <= 0) {
        state.slideIndex = state.slides.length
    }
    state.slides.forEach(function (el) {
        el.style.display = 'none';
    });
    state.dots.forEach(function (el) {
        el.classList.remove('active');
    });
    state.slidersText.forEach(function (el2) {
        el2.style.display = 'none';
    });
    state.slides[state.slideIndex - 1].style.display = 'block';
    state.dots[state.slideIndex - 1].classList.add('active');
    state.slidersText[state.slideIndex - 1].style.display = 'block';
}

/*************CONTROL ABOUT US***********
 *
 */
//CIRCLE TEXT UP
// let circleUp1;
// let circleUp2;
// let circleUp3;
// let circleUp4;
// let circleDown1;
// let circleDown2;
// let circleDown3;
// let circleDown4;

new CircleType(document.querySelector('.circle-text__up--1'))
    .radius(87);
new CircleType(document.querySelector('.circle-text__up--2'))
    .radius(87);
new CircleType(document.querySelector('.circle-text__up--3'))
    .radius(87);
new CircleType(document.querySelector('.circle-text__up--4'))
    .radius(87);
//CIRCLE TEXT DOWN
new CircleType(document.querySelector('.circle-text__down--1'))
    .radius(87).dir(-1);
new CircleType(document.querySelector('.circle-text__down--2'))
    .radius(87).dir(-1);
new CircleType(document.querySelector('.circle-text__down--3'))
    .radius(87).dir(-1);
new CircleType(document.querySelector('.circle-text__down--4'))
    .radius(87).dir(-1);


function responsiveScreen(large, xLarge, xxLarge) {

    if (large.matches) {
        new CircleType(document.querySelector('.circle-text__up--1'))
            .radius(76);
        new CircleType(document.querySelector('.circle-text__up--2'))
            .radius(76);
        new CircleType(document.querySelector('.circle-text__up--3'))
            .radius(76);
        new CircleType(document.querySelector('.circle-text__up--4'))
            .radius(76);

        new CircleType(document.querySelector('.circle-text__down--1'))
            .radius(76).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--2'))
            .radius(76).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--3'))
            .radius(76).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--4'))
            .radius(76).dir(-1);
    }
    if (xLarge.matches) {
        new CircleType(document.querySelector('.circle-text__up--1'))
            .radius(69);
        new CircleType(document.querySelector('.circle-text__up--2'))
            .radius(69);
        new CircleType(document.querySelector('.circle-text__up--3'))
            .radius(69);
        new CircleType(document.querySelector('.circle-text__up--4'))
            .radius(69);

        new CircleType(document.querySelector('.circle-text__down--1'))
            .radius(69).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--2'))
            .radius(69).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--3'))
            .radius(69).dir(-1);
        new CircleType(document.querySelector('.circle-text__down--4'))
            .radius(69).dir(-1);
    }
}

responsiveScreen(state.screenSize.large, state.screenSize.xLarge);
$(window).resize(responsiveScreen);






