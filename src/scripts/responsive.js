document.addEventListener('DOMContentLoaded', function() {
    
    const siteSearch = document.querySelector('#site-search');
    const BREAKPOINT = 1020;
    let mobile = false;

    function adjustHeader() {
        if (window.innerWidth <= BREAKPOINT) {
            siteSearch.classList.add('closed');

            mobile = true;
        } else {
            if (mobile === true) {
                //todo
            }
        }
    }

    // Listener
    window.onresize = _.debounce(adjustHeader, 300);

    adjustHeader();

});
