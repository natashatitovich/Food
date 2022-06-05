function slider () {
    //Slider 

    const slides = document.querySelectorAll('.offer__slide'),
    slider = document.querySelector('.offer__slider'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'), 
    inner = document.querySelector('.offer__slider-inner'),
    wrapper = document.querySelector('.offer__slider-wrapper'),
    width = window.getComputedStyle(wrapper).width;

    let slideIndex = 1,
    offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
    }

    inner.style.width = 100 * slides.length + '%';
    inner.style.display = 'flex';
    wrapper.style.overflow = 'hidden';
    inner.style.transition = '0.5s all';


    slides.forEach(slide => {
    slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
    dots = [];

    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
    }

    function toDigits(str) {
    return +str.replace(/\D/g, '');
    }

    prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = toDigits(width) * (slides.length - 1);
    } else {
        offset -= toDigits(width);
    }

    inner.style.transform = `translateX(-${offset}px)`; 

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
    });

    next.addEventListener('click', () => {
    if (offset == (toDigits(width) * (slides.length - 1))) {
        offset = 0;
    } else {
        offset += toDigits(width);
    }

    inner.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;

    });

    dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = toDigits(width) * (slideTo - 1);

        inner.style.transform = `translateX(-${offset}px)`; 

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;

});
});
// showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides (n) {
    //         if (n > slides.length) {
    //             slideIndex = 1;
    //         }
            
    //         if (n < 1) {
    //             slideIndex = slides.length;
    //         }
    //         slides.forEach(item => item.style.display = 'none');

    //         slides[slideIndex - 1].style.display = 'block';

    //         if (slides.length < 10) {
    //             current.textContent = `0${slideIndex}`;
    //         } else {
    //             current.textContent = slideIndex;
    //         }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(+1);
    // });

}

module.exports = slider;