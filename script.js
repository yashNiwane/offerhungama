// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
                const dropdownContent = this.querySelector('.dropdown-content');
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Sticky navbar functionality
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Smooth scrolling for navigation links
    const navLinksList = document.querySelectorAll('.nav-links a'); 

    navLinksList.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default jump
            const href = this.getAttribute('href');

            if(href.startsWith("#")){
                 // For internal links (anchors)
            const targetElement = document.querySelector(href);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the mobile menu if it's open
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
            } else{
               // For external links
               window.location.href = href;
            }
           
        });
    });
});