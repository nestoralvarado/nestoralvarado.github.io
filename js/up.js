
// Scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}
/// ir arriba
buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if (scroll > 300){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 300){
        buttonUp.style.transform = "scale(0)";
    }

}




