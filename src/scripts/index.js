document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.querySelector('#share-button');
    const icons = document.querySelector('#media-icons');
    const container = document.querySelector('#icon-container');
    const iStyle = getComputedStyle(icons);

    shareBtn.addEventListener('click', function() {
        icons.classList.toggle('closed');
        shareBtn.classList.toggle('dark');
    });

    const searchBtn = document.querySelector('#search-btn');
    const siteSearch = document.querySelector('#site-search');

    searchBtn.addEventListener('click', function() {
        siteSearch.classList.toggle('closed');
    });
});