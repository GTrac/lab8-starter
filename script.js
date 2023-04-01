
'use strict';

const sections = Array.from(document.querySelectorAll('section'));

for(var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", view);
}

function view(e) {
    if(document.querySelector('.accordion-label.open')) {
        let currentOpen = document.querySelector('.accordion-label.open');
    }
    let target = e.target;
    target.classList.add('open');
    currentOpen.classList.remove('open');
}