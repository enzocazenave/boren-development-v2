window.addEventListener("scroll", function() {
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight
    const calculate =  this.scrollY * 100 / (bodyHeight - windowHeight); 
    const navbar = document.querySelector('#header-fixed');

    navbar.classList.toggle('header-active', this.scrollY > 100);
    this.document.querySelector('#scrollbar-line').style.width = `${ calculate }%`;
});