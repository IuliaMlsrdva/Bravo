var currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
    slides.forEach((slide) => {
        slide.style.display = "none"
        dots.forEach((dot) => {
            dot.classList.remove("active")
        })
    })
    slides[n].style.display = "block"
    dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)
setInterval(() => {
    next()
}, 5000);
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        init(index)
        currentSlide = i
    })
})




    ; (function (window) {

        'use strict';

        var docElem = window.document.documentElement;

        function getViewportH() {
            var client = docElem['clientHeight'],
                inner = window['innerHeight'];

            if (client < inner)
                return inner;
            else
                return client;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        function getOffset(el) {
            var offsetTop = 0, offsetLeft = 0;
            do {
                if (!isNaN(el.offsetTop)) {
                    offsetTop += el.offsetTop;
                }
                if (!isNaN(el.offsetLeft)) {
                    offsetLeft += el.offsetLeft;
                }
            } while (el = el.offsetParent)

            return {
                top: offsetTop,
                left: offsetLeft
            }
        }

        function inViewport(el, h) {
            var elH = el.offsetHeight,
                scrolled = scrollY(),
                viewed = scrolled + getViewportH(),
                elTop = getOffset(el).top,
                elBottom = elTop + elH,
                // если 0, элемент будет задействован при частичном появлении в поле видимости.
                // если 1, элемент будет задействован при полном появлении в поле видимости.
                h = h || 0;

            return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
        }

        function extend(a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        function cbpScroller(el, options) {
            this.el = el;
            this.options = extend(this.defaults, options);
            this._init();
        }

        cbpScroller.prototype = {
            defaults: {
                // если 0, то класс для анимации будет добавлен, как только объект появится в поле видимости.
                // если 1, то анимация сработает только после того, как все объекты появятся в поле видимости
                viewportFactor: 0.2
            },
            _init: function () {
                if (Modernizr.touch) return;
                this.sections = Array.prototype.slice.call(this.el.querySelectorAll('.cbp-so-section'));
                this.didScroll = false;

                var self = this;
                // секции, которые уже отображены...
                this.sections.forEach(function (el, i) {
                    if (!inViewport(el)) {
                        classie.add(el, 'cbp-so-init');
                    }
                });

                var scrollHandler = function () {
                    if (!self.didScroll) {
                        self.didScroll = true;
                        setTimeout(function () { self._scrollPage(); }, 60);
                    }
                },
                    resizeHandler = function () {
                        function delayed() {
                            self._scrollPage();
                            self.resizeTimeout = null;
                        }
                        if (self.resizeTimeout) {
                            clearTimeout(self.resizeTimeout);
                        }
                        self.resizeTimeout = setTimeout(delayed, 200);
                    };

                window.addEventListener('scroll', scrollHandler, false);
                window.addEventListener('resize', resizeHandler, false);
            },
            _scrollPage: function () {
                var self = this;

                this.sections.forEach(function (el, i) {
                    if (inViewport(el, self.options.viewportFactor)) {
                        classie.add(el, 'cbp-so-animate');
                    }
                    else {
                        // добавляет изначальные классы, если их нет.
                        classie.add(el, 'cbp-so-init');

                        classie.remove(el, 'cbp-so-animate');
                    }
                });
                this.didScroll = false;
            }
        }

        // добавляем в глобальное пространство
        window.cbpScroller = cbpScroller;

    })(window);