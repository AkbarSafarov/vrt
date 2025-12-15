document.addEventListener("DOMContentLoaded", function() {

    const body = document.body;
    const html = document.documentElement;
    const overflowHidden = 'oveflowHidden';
    const menuBurger = document.querySelector('.menu_burger');
    const discountBanner = document.querySelector('.discount_banner');
    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider_top_block');
    const menuHeader = document.querySelector('.menu-header');
    const tmenuOffset = header.offsetTop;

    let lastScrollY = window.scrollY; 
    let isScrollingUp = false; 

    const contentSwiperWrap = document.querySelector('.slider_main_wr');

    if(contentSwiperWrap){
        const swiperTop = new Swiper(".top-swiper", {
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000
        });

        
    }

    const sliderDoctors = document.querySelector('.doctors-swiper');

    if (sliderDoctors) {

        const swiperHits = new Swiper(sliderDoctors, {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-doc',
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 'auto',spaceBetween: 25 },
                600: { slidesPerView: 'auto',spaceBetween: 25 },
                992: { slidesPerView: 3 },
                1281: { slidesPerView: 4 }
            }
        });
    }

    const sliderProducts = document.querySelector('.about-swiper');

    if (sliderProducts) {

        const swiperP = new Swiper(sliderProducts, {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".about_slider .arrow-btn.next",
                prevEl: ".about_slider .arrow-btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto',spaceBetween: 22 },
                992: { slidesPerView: 3 },
                1281: { slidesPerView: 4 }
            }
        });

        lightGallery(sliderProducts, {
            selector: 'a',
            download: false,
            zoom: false,
            fullScreen: false,
            videojs: true
        });
    }

    const sliderLis= document.querySelector('.licen-swiper');

    if (sliderLis) {

        const swiperL = new Swiper(sliderLis, {
            slidesPerView: 2,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".licen_rev .arrow-btn.next",
                prevEl: ".licen_rev .arrow-btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto',spaceBetween: 10},
                992: { slidesPerView: 2 },
                1281: { slidesPerView: 2 }
            }
        });

        lightGallery(sliderLis, {
            selector: 'a',
            download: false,
            zoom: false,
            fullScreen: false,
            videojs: true
        });
    }

    const videoBlock = document.querySelector('.video_block');
    const video = videoBlock.querySelector('video');
    const playBtn = videoBlock.querySelector('.btn_play');

    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.style.display = 'none'; 
        video.setAttribute('controls', 'controls'); 
    });

    video.addEventListener('ended', () => {
        playBtn.style.display = 'flex';
    });

    const upBtn = document.querySelector('.up_btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            upBtn.classList.add('visible');
        } else {
            upBtn.classList.remove('visible');
        }
    });

    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});