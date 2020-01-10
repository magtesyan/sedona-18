var navMain = document.querySelector('.main-nav');
var navToggleOpen = document.querySelector('.nav-toggle_open');
var navToggleClose = document.querySelector('.nav-toggle_close');
var navList = document.querySelector('.nav-list');

navMain.classList.remove('main-nav_nojs');
menuClose();

navToggleOpen.addEventListener('click', function() {
  menuOpen();
});

navToggleClose.addEventListener('click', function() {
  menuClose();
});

function menuOpen() {
  if (navList.classList.contains('nav-list_closed')) {
      navList.classList.remove('nav-list_closed');
      navList.classList.add('nav-list_open');
      navToggleOpen.classList.remove('show');
      navToggleOpen.classList.add('hide');
      navToggleClose.classList.remove('hide');
      navToggleClose.classList.add('show');
      document.querySelector('.page-header__logo').style.top="224px";
  }
}

function menuClose() {
  if (navList.classList.contains('nav-list_open')) {
      navList.classList.remove('nav-list_open');
      navList.classList.add('nav-list_closed');
      navToggleClose.classList.remove('show');
      navToggleClose.classList.add('hide');
      navToggleOpen.classList.remove('hide');
      navToggleOpen.classList.add('show');
      document.querySelector('.page-header__logo').style.top="0";
  }
}
