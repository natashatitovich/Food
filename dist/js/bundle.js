/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

addEventListener('DOMContentLoaded', () => {
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");

    calc();
    cards();
    forms();
    modal();
    slider();
    tabs();
    timer();

});



/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc () {
    //Calc

    let result = document.querySelector('.calculating__result span');
        
    let sex, height, weight, age, ratio; 

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }


    function getResult() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return result;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    getResult();

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio')  === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    function getStaticValues(selector, activeClass) {
        let element = document.querySelectorAll(selector);
        

        element.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
            element.forEach(elem => {
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);

            getResult();
            });
        });
    }

    getStaticValues('#gender div', 'calculating__choose-item_active');
    getStaticValues('.calculating__choose_big div', 'calculating__choose-item_active');

    
    
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);


        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            getResult();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

module.exports = calc;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards () {

    //Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr} </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
            this.parent.append(element);
        }
        

    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could nor fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms () {
 //Forms

 const forms = document.querySelectorAll('form');

 const message = {
     loading: 'img/form/spinner.svg',
     success: 'Спасибо! Скоро мы с вами свяжемся',
     failure: 'Что-то пошло не так...'
 };

 forms.forEach(item => {
     bindPostData(item);
 });

 const postData = async (url, data) => {
     const res = await fetch(url, {
         method: "POST",
             body: data,
             headers: {
                 'Content-Type': 'application/json'
             }
     });

     return await res.json();
 };
 

 function bindPostData(form) {
     form.addEventListener('submit', (e) => {
         e.preventDefault();

         let statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
             display: block;
             margin: 0 auto;
         `;
         form.insertAdjacentElement('afterend', statusMessage);

     
         const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

         postData('http://localhost:3000/requests', json)
         .then(data => {
             console.log(data);
             showThanksModal(message.success);
             statusMessage.remove();
         })
         .catch(() => {
             showThanksModal(message.failure);
         })
         .finally(() => {
             form.reset();
         });
     });
 }

 function showThanksModal(message) {
     const prevModalDialog = document.querySelector('.modal__dialog');

     prevModalDialog.classList.remove('show');
     prevModalDialog.classList.add('hide');
     openModal();

     const thanksModal = document.createElement('div');
     thanksModal.classList.add('modal__dialog');
     thanksModal.innerHTML = `
         <div class="modal__content">
             <div class="modal__close" data-close>×</div>
             <div class="modal__title">${message}</div>
         </div>
     `;
     document.querySelector('.modal').append(thanksModal);
     setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         closeModal();
     }, 4000);
 }

}
module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal () {
    //Modal

    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]');
   
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
           closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains ('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs () {
     //Tabs
     let tabs = document.querySelectorAll('.tabheader__item'),
     tabsContent = document.querySelectorAll('.tabcontent'),
     tabsParent = document.querySelector('.tabheader__items');

 function hideTabContent() {
     tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
     });

     tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
     });
 }

 function showTabContent(i = 0) {
     tabsContent[i].classList.add('show', 'fade');
     tabsContent[i].classList.remove('hide');
     tabs[i].classList.add('tabheader__item_active');
 }

 hideTabContent();
 showTabContent();

 tabsParent.addEventListener('click', (event) => {
     const target = event.target;

     if(target && target.classList.contains('tabheader__item')) {
     tabs.forEach((item, i) => {
         if (target == item) {
             hideTabContent();
             showTabContent(i);
         }
     });
     }
 });
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {
    //Timer
    let deadline = '2022-06-10';

    function getTimeRemaining (endtime) {
        let days, seconds, minutes, hours; 
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),
            seconds = Math.floor( (t/1000) % 60),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60)) % 24);
        } 
        

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining (endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        
    }

    setClock('.timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map