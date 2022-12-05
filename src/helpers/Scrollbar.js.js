window.addEventListener("scroll", function() {
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight
    const calculate =  this.scrollY * 100 / (bodyHeight - windowHeight); 
    
    this.document.querySelector('#scrollbar-line').style.width = `${ calculate }%`;
});