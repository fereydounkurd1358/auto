const searchBtn = document.querySelector('.search__input-group svg');
const headerSearch = document.querySelector('.header__search');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

window.addEventListener('resize', ()=> {
    if (window.innerWidth <= 991 && overlay.classList.contains('overlay-active')) {
        overlay.classList.remove('overlay-active');
        searchPanelToggling('close');
    } 
});

function isSearchPlanelOpen() {
    
    if (headerNav.classList.contains('header__search--active')) {
        searchPanelToggling('close');
    }
}

searchBtn.addEventListener('click', () => {
    if (window.innerWidth <= 991) return;
    searchPanelToggling('open');

    
    overlay.classList.add('overlay-active');
});
overlay.addEventListener('click', ()=> {
    
    overlay.classList.remove('overlay-active');
    isSearchPlanelOpen();
    if (window.innerWidth > 991) {
        searchPanelToggling('close');
        return;
    }
    header.classList.remove('header__nav--open');

});


// hamburger menu toggling
const hamburgerMenuBtn = document.querySelector('.hamburger-menu');
hamburgerMenuBtn.addEventListener('click', ()=> {
    isSearchPlanelOpen();
    header.classList.toggle('header__nav--open');
    overlay.classList.toggle('overlay-active', header.classList.contains('header__nav--open'));
});

// search panel toggling
const searchInput = document.querySelector('.search__input');
const searchIputCloseBtn = document.querySelector('.search-btn--close');
const headerNav = document.querySelector('.header__nav');

function searchPanelToggling(state) {
    headerNav.classList.toggle('header__search--active', state === 'open');
}
searchInput.addEventListener('focus', () => {

    if (window.innerWidth > 991) return;
    searchPanelToggling('open');
    
});
searchIputCloseBtn.addEventListener('click', () => {
    
    if (window.innerWidth > 991) return;
    searchPanelToggling('close');
    
});

