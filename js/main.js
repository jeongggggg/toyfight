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

        mouseMovement(0.08);

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

            var cursorX = e.pageX;
            var cursorY = e.pageY;
            var halfWindowWidth = window.innerWidth / 2;
            var halfWindowHeight = $(window).height() / 2;
  
            var moveX = (cursorX - (halfWindowWidth))*-moveAmount;
            var moveY = (cursorY - (halfWindowHeight))*-moveAmount;
            var rotateY = moveX * - 0.09;

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
