
const menu = document.querySelector('.toggle-menu');
const myUl = document.querySelector('ul');
menu.addEventListener('click', function () {
    myUl.onclick = myUl.classList.add('mobile-nav');
    if (myUl.className === "mobile-nav") {
        menu.addEventListener('click', () => {
            myUl.classList.remove('mobile-nav'); 
        })
    }
})

const header = document.querySelector('#head');
var myElement = document.querySelector(".header");
window.onscroll = function () {
    const headOffsetTop = header.offsetTop;

    const headOuterHeight = header.offsetHeight;

    const windowHeight = this.innerHeight;

    const windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (headOffsetTop + headOuterHeight - windowHeight)) {
        myElement.classList.add('actives');
    }
}
window.onc