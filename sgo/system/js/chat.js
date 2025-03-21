let overlay = document.querySelector('.overlay');
let overlayClose = overlay.querySelector('.overlay-close');
let overlayBg = overlay.querySelector('.overlay-bg');
let chatItems = document.querySelectorAll('.chat-item');

function openOverlay(){
    overlay.style.display = "block";
    setTimeout(()=>{
        overlay.style.opacity = 1;
        overlay.querySelector('.overlay-content').style.transform = "scale(1)"
    },100);
}

function closeOverlay(){
    overlay.style.opacity = 0;
    overlay.querySelector('.overlay-content').style.transform = "scale(0.9)"
    setTimeout(()=>{
        overlay.style.display = "none";
    },100);
}

chatItems.forEach(item =>{
    item.addEventListener('click', openOverlay)
})
overlayClose.addEventListener('click', closeOverlay);
overlayBg.addEventListener('click', closeOverlay);