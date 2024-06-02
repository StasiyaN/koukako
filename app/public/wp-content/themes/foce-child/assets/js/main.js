document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded'); 
    
    //    const menuLinks = document.querySelectorAll('.main-navigation a'); 
    //    console.log(menuLinks);
    //    menuLinks.forEach (menuLink => {
    //     console.log(menuLink);
    //     menuLink.addEventListener('click', function () {
    //         console.log(menuLink.getAttribute('href'));
    //         document.querySelector(menuLink.getAttribute('href')).scrollIntoView({ 
    //             behavior: 'smooth'
    //         });
    //return false;
    //     });
    //    });
    // .addEventListener ('click', function () {
    //     console.log ('ok');
    //     return false;
    // document.querySelector('#characters').scrollIntoView({ 
    //    
    //   });
    


    window.addEventListener('scroll', handleScroll);

    // Function to handle scroll event
    function handleScroll() {
        // Get the place section
        const spans = document.querySelectorAll('h2 span, h3 span');
        spans.forEach(span => {
            // Add your logic to add or remove classes based on scroll position
            if (isElementInViewport(span)) {
                span.classList.add('animated-header');
            } else {
                span.classList.remove('animated-header');
            }
        });
    
        const clouds = document.querySelectorAll('.clouds');
        clouds.forEach(cloud => {
            if (isElementInViewport(cloud)) {
                cloud.classList.add('clouds-animated');
            } else {
                cloud.classList.remove('clouds-animated');
            }
        });
    }
    
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //BURGER MENU
    const burgerMenu = document.getElementById('burger-menu');
    const menuContent = document.querySelector('.burger-menu-content');

    burgerMenu.addEventListener('click', function () {
        if (burgerMenu.classList.contains('toggle')) {
            burgerMenu.classList.remove('toggle');
            burgerMenu.classList.add('opened');
            burgerMenu.innerHTML = '<i class="fa-solid fa-xmark fa-3x"></i>';
            menuContent.style.display = 'block';
        } else {
            burgerMenu.classList.remove('opened');
				burgerMenu.classList.add('closed');
				burgerMenu.innerHTML = '<i class="fa-solid fa-bars fa-3x"></i>';
				menuContent.style.display = 'none';

        }
    })
    
    
});