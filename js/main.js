document.addEventListener("DOMContentLoaded", function() {
    const HTML = document.querySelector('html');
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

    const videoBlockItem = document.querySelectorAll('.video_block');

    if(videoBlockItem.length) {
        videoBlockItem.forEach(videoBlock => {
            const playBtn = videoBlock.querySelector('.btn_play');
            const type = videoBlock.dataset.type;
            
            if (type === 'youtube') {
                const youtubeId = videoBlock.dataset.youtubeId;
                
                playBtn.addEventListener('click', () => {
                    const iframe = document.createElement('iframe');
                    iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                    iframe.setAttribute('allowfullscreen', '');
                    
                    videoBlock.querySelector('.youtube_thumbnail').replaceWith(iframe);
                    playBtn.style.display = 'none';
                    videoBlock.classList.add('play');
                    videoBlock.querySelector('&:before')?.remove();
                });
                
            } else {
                const video = videoBlock.querySelector('video');
                
                playBtn.addEventListener('click', () => {
                    video.play();
                    playBtn.style.display = 'none'; 
                    videoBlock.classList.add('play');
                    video.setAttribute('controls', 'controls');
                });
                
                video.addEventListener('ended', () => {
                    playBtn.style.display = 'flex';
                });
                
                video.addEventListener('pause', () => {
                    if (!video.ended) {
                        playBtn.style.display = 'flex';
                    }
                });
                
                video.addEventListener('play', () => {
                    playBtn.style.display = 'none';
                });
            }
        });
    }

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

    const menuBtn = document.querySelector('.burger');
    const menuWrapper = document.querySelector('.menu_burger');
    const menuClose = document.querySelector('.menuClose');
    const openedMenu = 'opened';

    if (!menuBtn || !menuWrapper || !menuClose) return;

    menuBtn.addEventListener('click', function() {
        menuWrapper.classList.toggle(openedMenu);
        menuBtn.classList.toggle(openedMenu);
        HTML.classList.toggle(overflowHidden);
    });

    menuClose.addEventListener('click', function() {
        menuWrapper.classList.remove(openedMenu);
        menuBtn.classList.remove(openedMenu);
        HTML.classList.remove(overflowHidden);
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.burger') || e.target.closest('.menu_scroll')) return;

        if (menuWrapper.classList.contains(openedMenu)) {
            menuWrapper.classList.remove(openedMenu);
            menuBtn.classList.remove(openedMenu);
            HTML.classList.remove(overflowHidden);
        }
    });



    const searchData = [
        'Текуст и что то по запросу',
        'Текуст и что то по запрос рограмма комплексного ультразвукового обследования',
        'Текуст и что то по запрос рограмма комплексного ультразвукового исследования органов',
        'Текстовый документ по медицинским исследованиям',
        'Текстиль и материалы для производства',
        'Технологии обработки данных',
        'Тестирование программного обеспечения',
        'Территориальное планирование городов',
        'Теоретические основы физики',
        'Телекоммуникационные системы связи'
    ];

    const searchInput = document.getElementById('searchInput');
    const seachBtn = document.querySelector('.seach_btn');
    const searchContainer = document.querySelector('.search-container');

    seachBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('opened');
    });

    if(searchInput) {
        const dropdown = document.querySelector('.dropdown');

        function normalizeText(text) {
            return text.toLowerCase().trim();
        }

        function highlightMatch(text, query) {
            if (!query) return text;
            
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<strong>$1</strong>');
        }

        function filterResults(query) {
            if (!query || query.length === 0) {
                return [];
            }

            const normalizedQuery = normalizeText(query);
            
            return searchData.filter(item => {
                return normalizeText(item).includes(normalizedQuery);
            });
        }

        function displayResults(results, query) {
            dropdown.innerHTML = '';

            if (results.length === 0) {
                if (query.length > 0) {
                    dropdown.innerHTML = '<div class="dropdown-item no-results">Ничего не найдено</div>';
                    dropdown.style.display = 'block';
                } else {
                    dropdown.style.display = 'none';
                }
                return;
            }

            results.forEach(result => {
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.innerHTML = highlightMatch(result, query);
                
                item.addEventListener('click', () => {
                    searchInput.value = result;
                    dropdown.style.display = 'none';
                });

                dropdown.appendChild(item);
            });

            dropdown.style.display = 'block';
        }

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const results = filterResults(query);
            displayResults(results, query);
        });

        searchInput.addEventListener('focus', () => {
            const query = searchInput.value;
            if (query.length > 0) {
                const results = filterResults(query);
                displayResults(results, query);
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-wrapper')) {
                dropdown.style.display = 'none';
            }
        });

        let selectedIndex = -1;

        searchInput.addEventListener('keydown', (e) => {
            const items = dropdown.querySelectorAll('.dropdown-item:not(.no-results)');
            
            if (items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = selectedIndex <= 0 ? items.length - 1 : selectedIndex - 1;
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    items[selectedIndex].click();
                }
            } else if (e.key === 'Escape') {
                dropdown.style.display = 'none';
                selectedIndex = -1;
            }
        });

        function updateSelection(items) {
            items.forEach((item, index) => {
                if (index === selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        if (searchInput.value) {
            const results = filterResults(searchInput.value);
            displayResults(results, searchInput.value);
        }
    }

});