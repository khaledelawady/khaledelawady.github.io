const header = document.querySelector('.landing .heading-text');

const aboutSection = document.querySelector('.about ');
window.onscroll = function () {
    const aboutOffsetTop = aboutSection.offsetTop;
    
    const aboutOuterHeight = aboutSection.offsetHeight;
    
    const headerOffsetTop = header.offsetTop;
    
    const headerOuterHeight = header.offsetHeight;
    
    const windowHeight = this.innerHeight;
    
    const windowScrollTop = this.pageYOffset;

    const headerNav = document.querySelector('.landing header'); 
    if (windowScrollTop > (headerOffsetTop + headerOuterHeight - windowHeight)) {
        headerNav.classList.add('active');
    }
    if (windowScrollTop > (aboutOffsetTop + aboutOuterHeight - windowHeight)) {
        aboutSection.classList.add('opacity');
        const contactSection = document.querySelector('.contact');
        contactSection.classList.add('opacity-two');
    };
}
