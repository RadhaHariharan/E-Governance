const smallmenuicon = document.getElementById("menusmall-icon");
const hide = document.getElementById("hide1");
const menuicon = document.getElementById("menu-icon");
const slideoutmenu = document.getElementById("slideout-menu");


smallmenuicon.addEventListener('click',function() {
    if(hide.style.opacity=='1'){
        hide.style.opacity='0';
        hide.style.pointerEvents = 'none';
    }
    else {
        hide.style.opacity='1';
        hide.style.pointerEvents = 'auto';   
    }
});

menuicon.addEventListener('click',function() {
    if(slideoutmenu.style.opacity=='1'){
        slideoutmenu.style.opacity='0';
        slideoutmenu.style.pointerEvents = 'none';
    }
    else {
        slideoutmenu.style.opacity='1';
        slideoutmenu.style.pointerEvents = 'auto';   
    }
});