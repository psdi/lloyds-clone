document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('header');
    const topNav = document.querySelector('#top-nav');
    const bottomNav = document.querySelector('#bottom-nav');
    const siteSearch = document.querySelector('#site-search');
    
    const BREAKPOINT = 1020;

    function createNewMenu() {
        let menu = document.createElement('div');
        menu.appendChild(bottomNav);
        menu.appendChild(topNav);
        menu.setAttribute('id', 'newMenu');
        menu.classList.add('hidden');
        return menu;
    }

    function isMobile() {
        return window.innerWidth <= BREAKPOINT;
    }

    function adjustHeader() {
        mobile = isMobile();

        if (mobile) {
            if (!document.querySelector('#newMenu')) {
                let newMenu = createNewMenu();
                if (document.querySelector('#top-nav') && document.querySelector('#bottom-nav')) {
                    header.removeChild(topNav);
                    header.removeChild(bottomNav);
                }
                header.appendChild(newMenu);
            }
        } else {
            if (document.querySelector('#newMenu')) {
                let menu = document.querySelector('#newMenu');
                header.removeChild(menu);
                header.insertBefore(topNav, siteSearch);
                header.appendChild(bottomNav);
            }
        }
    }

    // Listener
    window.onresize = _.debounce(adjustHeader, 10);

    adjustHeader();

});
