
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const aboutSection = document.querySelector('#about');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    
    window.addEventListener('scroll', handleScroll);
    
    
    handleScroll();
}); 