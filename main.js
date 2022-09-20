const HOME_BTN = document.querySelector('#home');
const ABOUT_BTN = document.querySelector('#about');
const SKILLS_BTN = document.querySelector('#skills');
const PROJECTS_BTN = document.querySelector('#projects');
const CONTACT_BTN = document.querySelector('#contact');
const TOP = document.querySelector('#top')

HOME_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});

ABOUT_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 700);
});

SKILLS_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 1500);
});

PROJECTS_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 2400);
});

CONTACT_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 4051);
});

TOP.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo(0,0);
});