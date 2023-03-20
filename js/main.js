jQuery(function ($) {
    /* ======================================================================
    *
    * Powered by MUSIGN  
    * Version 1.0
    * js/jeong.js 
    * reference: https://toyfight.co/
    * 
    ====================================================================== */

    /* ======================================================================
    *
    *  RUN 
    * 
    ====================================================================== */


    init(true);


    /* ======================================================================
    *
    *  INIT 
    * 
    ====================================================================== */

    function init(loadonce) {

         // nav action
         $(window).scroll(function(){
            var sTop = $(window).scrollTop();
    
            if(sTop >= 200){
                navEnd()
            }
    
            else{
                navStart()
            }
        })

        // main img action
        mouseMovement(0.08);

        // titactive
        titleActive();

        // sec01 scroll action
        sec01Scroll();

        // sec02 scroll action
        sec02Scroll();
    }


    /* ======================================================================
     *
     *  ON LOAD
     * 
     ====================================================================== */


    // INITIALIZE LOAD
    
    function initOnload(){
        sizeHandler();
        navStart();
    }

    $(window).on('load', initOnload);


    /* ======================================================================
     *
     *  ON RESIZE
     * 
     ====================================================================== */


    // INITIALIZE RESIZE
    function init_resize() {

        // setTimeout to fix IOS animation on rotate issue
        setTimeout(function () {

            //

        }, 400);

    }

    // Init resize on reisize
    $(window).on('resize', init_resize);


    /* ======================================================================
    *
    *  Default Functions
    * 
    ====================================================================== */


    /* -------------- NAV ACTION -------------- */

    function navStart(){
        let navStart = document.querySelectorAll('nav li')

        navStart.forEach(function(textanimation,index){
            gsap.to(textanimation,1,{
                delay:(index + 1) * .15,
                opacity:1,
                y : 0
            })
        })
    }

    function navEnd(){
        let navEnd = document.querySelectorAll('nav li');

        navEnd.forEach(function(textanimation,index){
            gsap.to(textanimation,1,{
                delay:(index + 1) * .15,
                y : -100
            })
        })
    }
    

    /* -------------- DATA ACTION -------------- */

    function dataActiveOff(e) {
        e.attr('data-active', 'off');
    }

    function dataActiveOn(e) {
        e.attr('data-active', 'on');
    }

    /* -------------- SIZE INIT -------------- */

    function sizeHandler() {
        windowWidth = $(window).innerWidth();
        windowHeight = $(window).innerHeight();
        halfWindowWidth = windowWidth / 2;
        halfWindowHeight = windowHeight / 2;
    
        $('.js-full-height').each(function() {
              $(this).css({
                'height' : windowHeight
            });
        });
    }


    /* ======================================================================
    *
    *  Other Functions
    * 
    ====================================================================== */

     // MAIN - background mouseover
     function mouseMovement(moveAmount) {
        $(".sec01").mousemove(function(e) {

            let cursorX = e.pageX;
            let cursorY = e.pageY;
            let halfWindowWidth = window.innerWidth / 2;
            let halfWindowHeight = $(window).height() / 2;
  
            let moveX = (cursorX - (halfWindowWidth))*-moveAmount;
            let moveY = (cursorY - (halfWindowHeight))*-moveAmount;
            let rotateY = moveX * - 0.09;

            TweenMax.to($('.figure_mover .js_figure1'),
                1.175, {
                    x: moveX * 0.4,
                    y: moveY * 0.8,
                    rotationY: rotateY * 0.4
                }
            );

            TweenMax.to($('.figure_mover .js_figure2'),
                1.175, {
                    x: moveX,
                    y: moveY,
                    rotationY: rotateY
                }
            );
        });
    }

    // MAIN - title opacity
    function titleActive(){
        let titleActive = document.querySelectorAll('.tit span')

        titleActive.forEach(function(textanimation,index){
            gsap.to(textanimation,1,{
                delay:(index + 1) * .08,
                opacity:1,
            })
        })
    }

     // MAIN - SEC01 data active action
     function sec01Scroll(){
        $(window).scroll(function(){
            var sTop = $(window).scrollTop();
           
            if(sTop >= 200){
                dataActiveOff($('.sec01'));
                dataActiveOff($('.page_bg'));
                dataActiveOff($('.page_tit'));
                dataActiveOff($('.figure_mover'));
            }

            else{
                dataActiveOn($('.sec01'));
                dataActiveOn($('.page_bg'));
                dataActiveOn($('.page_tit'));
                dataActiveOn($('.figure_mover'));
            }
        })
    }

    // MAIN - SEC02 data active action
    function sec02Scroll(){
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec01',
                start: '+=150',
                endTrigger: '.sec02',
                markers: false,
            }
        })
        .to(".sec02 .tit_box", { y: 0, opacity: 1 },0.75)
    }

}); // End jQuery













//플러그인 사용 없이 bg_mouseover
/*
let figures;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.08;

window.onload = function(){
    figures = document.getElementsByClassName("figures_img")[0];
    window.addEventListener("mousemove", mouseFunc, false);
    loop();
}

function mouseFunc(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    
    figures.style.transform = "translate("+ (mx/-15) +"px," + (my/-15) +"px)";
}

function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    window.requestAnimationFrame(loop);

}*/

// init 기본

   /* // only MAIN
    if ($('body').hasClass('home')) {}

    // only ABOUT US
    if ($('body').hasClass('about')) {}
    

    // First load
    if (typeof loadonce !== 'undefined' && loadonce === true) {
        // >=2nd load
    } else {
        initOnload();
    }

    $(window).trigger('resize'); */


    /* https://agal.tistory.com/213 */
    /* top bottom 일 때, 첫 번째 값은 애니메이션 요소를 참조 / 두 번째 값은 뷰포트를 참조 */
    /*function sectionFix(){
        let sec01 = document.querySelector(".sec01");

        ScrollTrigger.create({
            trigger: ".sec01",
            scrub: true,
            pin: true,
            start: "top top",
            end: () => `+=${sec01.offsetHeight}`,
            markers: true
        });
    }*/