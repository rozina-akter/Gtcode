const menuIcon = document.getElementById("menu-icon");
const slideOutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.pointerEvents = 'none';
    }else{
        searchBox.style.top = '72px';
        searchBox.pointerEvents = 'auto';
    }
});
menuIcon.addEventListener('click', function () {
    if(slideOutMenu.style.opacity == '1'){
        slideOutMenu.style.opacity = '0';
        slideOutMenu.pointerEvents = 'none';
    }else{
        slideOutMenu.style.opacity = '1';
        slideOutMenu.pointerEvents = 'auto';
    }
});