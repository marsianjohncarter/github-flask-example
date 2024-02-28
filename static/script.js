'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav-link');

    
    function removeElmentAttributeAndClass(attr, element) {
        element.removeAttribute(attr);
        element.classList.remove('active');
    }

    function addAttribute(attr, attrFill, element) {
        element.setAttribute(attr, attrFill);
        element.classList.add('active');
    }

    navLinks.forEach(link => {
        console.log(link)
        link.addEventListener('click', () => {
            navLinks.forEach(a => {
                removeElmentAttributeAndClass('aria-current', a)
            });
            addAttribute('aria-current', 'page', link)
        });

    });
});