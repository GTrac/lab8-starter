
'use strict';
const root = document.documentElement;
const sections = Array.from(document.querySelectorAll('button'));

for(var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", buttonClick);
}

function buttonClick(e) {
    
    let btn = e.target;

    if(btn.classList.contains('open')){
        for(var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('open');
            sections[i].nextElementSibling.classList.remove('open');
        }
    }else {
        for(var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('open');
            sections[i].nextElementSibling.classList.remove('open');
        }
        btn.classList.add('open');
        btn.nextElementSibling.classList.add('open');
        root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
    }



}