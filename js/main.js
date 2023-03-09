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
}