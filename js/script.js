const header = document.querySelector('header');
const srollTop = document.querySelector('.scroll-top')

const menu = document.querySelector('#menu-icon')
const navBar = document.querySelector('.navbar')

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY>0)
})

window.addEventListener('scroll', ()=>{
    srollTop.classList.toggle('scroll-top', window.scrollY>0)
    
})

menu.onclick = ()=>{
    menu.classList.toggle('b-x');
    navBar.classList.toggle('open');


}

window.onscroll = ()=>{
    menu.classList.remove('b-x');
    navBar.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500, 
    reset: true
})

sr.reveal('.home-text', {delay:200, origin:'left'})
sr.reveal('.home-img', {delay:200, origin: 'top'})


sr.reveal('.about-text', {delay:200, origin:'right'})
sr.reveal('.about-img', {delay:200, origin:'left'})

sr.reveal('.menu-content', {delay:200, origin:'top'})
