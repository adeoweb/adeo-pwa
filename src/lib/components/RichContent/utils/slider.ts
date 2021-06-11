declare const $: any;
import 'owl.carousel';

const sliderDefaultOptions = {
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    navText: [
        '<i class="icon-left-open-big">',
        '<i class="icon-right-open-big">'
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 15000,
    items: 1
};

export const HomeSliders = (): void => {
    try {
        const elementsArray = Array.prototype.slice.call(
            document.querySelectorAll('div[id^="home-slider-"]')
        );

        if (!elementsArray) {
            return;
        }

        elementsArray.map(element => {
            if (!element) {
                return;
            }

            const homeSlider = $(element);

            if (!homeSlider) {
                return;
            }

            homeSlider.owlCarousel(
                $.extend(true, {}, sliderDefaultOptions, {
                    lazyLoad: true,
                    autoplayTimeout: 20000,
                    animateOut: 'fadeOut'
                })
            );

            homeSlider.on('loaded.owl.lazy', (event: any) => {
                $(event.element).closest('.home-slider').addClass('loaded');
            });
        });
    } catch (e) {
        console.log(e);
    }
};

export const PartnersSlider = (): void => {
    try {
        const elementsArray = Array.prototype.slice.call(
            document.querySelectorAll('div[id^="partner-slider-"]')
        );

        if (!elementsArray) {
            return;
        }

        elementsArray.map(element => {
            if (!element) {
                return;
            }

            $(element).owlCarousel(
                $.extend(true, {}, sliderDefaultOptions, {
                    margin: 20,
                    nav: true,
                    dots: false,
                    autoHeight: false,
                    autoplay: false,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0
                        },
                        480: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                })
            );
        });
    } catch (e) {
        console.log(e);
    }
};
