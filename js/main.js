jQuery(function ($) {
    /* ======================================================================
    *
    * Powered by MUSIGN  
    * Version 1.0
    * js/musign.js 
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


        // only MAIN
        if ($('body').hasClass('home')) {}

        // only ABOUT US
        if ($('body').hasClass('about')) {}
        

        // First load
        if (typeof loadonce !== 'undefined' && loadonce === true) {
            // >=2nd load
        } else {
            initOnload();
        }

        $(window).trigger('resize');

        //mouseMove
        mouseMovement(0.08);

        // smoothscroll 적용 시 사용  scrollYPos = (smoothScrollActive ? smoothScroll.vars.current : window.pageYOffset);

        //titScroll
        sectionFix();

        //nav
        navStart();
        navAction();
    }


    /* ======================================================================
     *
     *  ON LOAD
     * 
     ====================================================================== */


    // INITIALIZE LOAD
    function initOnload() {}

    $(window).on('load', function () {});


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

    // bg_mouseover
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

    function scrollQuery(y) {

        let windowHeight = $(window).height();
        let jsFiguresWrap = $('.figure_mover');


        if (y >= windowHeight*0.15) {
            dataActiveOff(jsFiguresWrap);
            dataActiveOff($('header nav'));
            dataActiveOff($('.scroll_arrow_wrap'));
        } else {
            dataActiveOn(jsFiguresWrap);
            dataActiveOn($('header nav'));
            dataActiveOn($('.scroll_arrow_wrap'));
        }
    }

    function sectionFix(){
        let sec01 = document.querySelector(".sec01");

        ScrollTrigger.create({
            trigger: ".sec01",
            scrub: true,
            pin: true,
            start: "top top",
            end: () => `+=${sec01.offsetHeight}`
        });
    }

    function navStart(){
        let fadeNav = document.querySelectorAll('nav li')

        fadeNav.forEach(function(textanimation,index){
            gsap.to(textanimation,1,{
                delay:(index + 1) * .15,
                opacity:1,
                y : 0
            })
        })
    }

    function navAction(){
        $(window).scroll(function(){
            var sTop = $(window).scrollTop();

            if(sTop >= 100){
                dataActiveOn($('header nav'));
            }

            if(sTop >= 200){
                dataActiveOff($('.figure_mover'));
                dataActiveOff($('.page_tit'));
                dataActiveOff($('.page_bg'));
                dataActiveOff($('.sec01'));
            }

            else{
                dataActiveOff($('header nav'));
                dataActiveOn($('.figure_mover'));
                dataActiveOn($('.page_tit'));
                dataActiveOn($('.page_bg'));
                dataActiveOn($('.sec01'));
            }

            if($('header nav').data('active') != 'on'){
                let navDataOn = document.querySelectorAll('nav li')

                navDataOn.forEach(function(textanimation,index){
                    gsap.to(textanimation,1,{
                        delay:(index + 1) * .15,
                        y : -100
                    })
                })
            }
        })
    }

    //data active
    function dataActiveOff(e) {
        e.attr('data-active', 'off');
    }

    function dataActiveOn(e) {
        e.attr('data-active', 'on');
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
