document.querySelector('.whatsapp-button1').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=5511977340861&text=ol%C3%A1,%20venho%20do%20site', '_blank');
});

let menuMobile = document.querySelector(".Menu-Mobile")



document.querySelector('.Menu-nav').addEventListener('click', function() {
    document.querySelector('#menu-mobile').classList.toggle('active');
});


function toggleMenu() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.classList.toggle('show');
}


