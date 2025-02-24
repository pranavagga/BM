


// SWIPER SLIDER

var swiper = new Swiper('.logoSwiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
    },
});

// TESTIMONIALS

const main_img = document.querySelector('.test-img-img');
const test_img1 = document.querySelector('.test_img1');
const test_img2 = document.querySelector('.test_img2');
const test_img3 = document.querySelector('.test_img3');
const test_info1 = document.querySelector('.test_client_info1');
const test_info2 = document.querySelector('.test_client_info2');
const test_info3 = document.querySelector('.test_client_info3');

test_img1.addEventListener('click', () => {
    main_img.src = 'Images/t-img-1.png';
    animActive();
    test_info1.style.display = 'flex';
    test_info1.classList.add('show_test_txt');
    test_info2.style.display = 'none';
    test_info3.style.display = 'none';
});
test_img2.addEventListener('click', () => {
    main_img.src = 'Images/t-img-2.png';
    animActive();
    test_info1.style.display = 'none';
    test_info2.style.display = 'flex';
    test_info2.classList.add('show_test_txt');
    test_info3.style.display = 'none';
});
test_img3.addEventListener('click', () => {
    main_img.src = 'Images/t-img-3.png';
    animActive();
    test_info1.style.display = 'none';
    test_info2.style.display = 'none';
    test_info3.style.display = 'flex';
    test_info3.classList.add('show_test_txt');
});

function animActive() {
    main_img.classList.remove('show_test_img');
    void main_img.offsetWidth;
    main_img.classList.add('show_test_img');
}

// const bar = document.querySelector('.bars');
// const menu = document.querySelector('.menu');

// bar.addEventListener('click',() =>{
//     menu.classList.toggle('show_menu');
// });

// GSAP

var t1 = gsap.timeline();
t1.to('nav', { y: 10, duration: 1, opacity: 1 })
    .to('.hero_side_content', { x: 0, duration: 1, opacity: 1 })
    .to('.hero_content', { y: 0, duration: 1, opacity: 1 })
    .to('.hero_img', { scale: 1, duration: 0.6, opacity: 1 })
    .to('.hero_client', { y: 0, duration: 0.6, opacity: 1 })
    .to('.logoSwiper', { scale: 1, duration: 0.6, opacity: 1 });

var t2 = gsap.timeline();
t2.from('.about_tl', { x: -200, duration: 0.5, opacity: 0 })
t2.to('.about_tl', { x: 0, opacity: 1 })
t2.from('.about_tr', { x: 200, duration: 0.5, opacity: 0 })
t2.to('.about_tr', { x: 0, opacity: 1 })
t2.from('.about_img', { x: -200, duration: 0.5, opacity: 0 })
t2.to('.about_img', { x: 0, opacity: 1 })
t2.from('.about_content', { x: 200, duration: 0.5, opacity: 0 })
t2.to('.about_content', { x: 0, opacity: 1 });

var t3 = gsap.timeline();

t3.from('.service_head', { y: -200, duration: 1, opacity: 0 })
t3.to('.service_head', { y: 0, opacity: 1 })
t3.from('.services_cards', { y: 200, duration: 0.6, opacity: 0 })
t3.to('.services_cards', { y: 0, opacity: 1 });


var t4 = gsap.timeline();

t4.from('.our_team_top', { y: -200, duration: 1, opacity: 0 })
t4.to('.our_team_top', { y: 0, opacity: 1 })
t4.from('.our_team_grid', { y: 200, duration: 0.6, opacity: 0 })
t4.to('.our_team_grid', { y: 0, opacity: 1 });


var t5 = gsap.timeline();

t5.from('.banner_bg', { x: -200, duration: 0.6, opacity: 0 })
t5.to('.banner_bg', { x: 0, opacity: 1 })
t5.from('.counter_bg', { x: 200, duration: 0.6, opacity: 0 })
t5.to('.counter_bg', { x: 0, opacity: 1 });


var t6 = gsap.timeline();

t6.from('.com_benefit', { x: -200, duration: 0.6, opacity: 0 })
t6.to('.com_benefit', { x: 0, opacity: 1 })
t6.from('.com_img', { x: 200, duration: 0.6, opacity: 0 })
t6.to('.com_img', { x: 0, opacity: 1 });
t6.from('.com_img_box', { scale: 0, duration: 0.6, opacity: 0 })
t6.to('.com_img_box', { scale: 1, opacity: 1 });



var t7 = gsap.timeline();

t7.from('.test_btns', { x: -200, duration: 0.6, opacity: 0 })
t7.to('.test_btns', { x: 0, opacity: 1 })
t7.from('.test_main_img', { y: -200, duration: 0.6, opacity: 0 })
t7.to('.test_main_img', { y: 0, opacity: 1 })
t7.from('.test_content', { x: 200, duration: 0.6, opacity: 0 })
t7.to('.test_content', { x: 0, opacity: 1 });



var t8 = gsap.timeline();

t8.from('.blog_head', { y: -200, duration: 0.6, opacity: 0 })
t8.to('.blog_head', { y: 0, opacity: 1 })
t8.from('.blog_wrapper', { y: 200, duration: 0.6, opacity: 0 })
t8.to('.blog_wrapper', { y: 0, opacity: 1 })



var t9 = gsap.timeline();

t9.from('.subscribe_banner', { scale: 0, duration: 0.6, opacity: 0 })
t9.to('.subscribe_banner', { scale: 1, opacity: 1 })
t9.from('.footer_img', { x: -200, duration: 0.6, opacity: 0 })
t9.to('.footer_img', { x: 0, opacity: 1 })
t9.from('.footer_right_head', { x: 200, duration: 0.6, opacity: 0 })
t9.to('.footer_right_head', { x: 0, opacity: 1 })
t9.from('.footer_grid', { y: 200, duration: 0.6, opacity: 0 })
t9.to('.footer_grid', { y: 0, opacity: 1 })
t9.from('.footer_bottom', { y: 200, duration: 0.6, opacity: 0 })
t9.to('.footer_bottom', { y: 0, opacity: 1 })