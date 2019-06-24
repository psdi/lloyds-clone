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

    // Top and bottom navs in header area
    const expandBtns = document.querySelectorAll('.expand');
    expandBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let container = this.parentNode;
            let tab = this.parentNode.children[0];
            let submenu = this.parentNode.querySelector('.sub-menu');

            if (tab.classList.contains('highlight') || this.classList.contains('highlight')) {
                this.innerHTML = '+';
            } else {
                this.innerHTML = '&times;';
            }

            submenu.classList.toggle('hidden');
            container.classList.toggle('highlight');
            tab.classList.toggle('highlight');
            this.classList.toggle('highlight');
        });
    });

    function initializeMenuBtn() {
        const menuBtn = document.querySelector('#menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', function() {
                const newMenu = document.querySelector('#newMenu');
                if (newMenu) {
                    newMenu.classList.toggle('hidden');
                }
            });
        }
    }

    window.onresize = _.debounce(initializeMenuBtn, 300);

    initializeMenuBtn();
    
});