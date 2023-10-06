document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId, logo) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId),
            logoName = document.getElementById(logo)

            let isNavOpen = false;

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                isNavOpen = !isNavOpen;
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.src = isNavOpen ? "icons/x.svg" : "icons/menu.svg";
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')

                logoName.classList.toggle('nav_logo_name')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', "logo_name")

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});
