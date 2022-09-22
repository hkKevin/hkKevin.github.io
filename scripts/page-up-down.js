window.addEventListener('keydown', function(e) {
if( e.key === 'PageDown' ) {
    window.scrollTo({
    top: window.scrollY + (window.screen.height - 220),
    left: 0,
    behavior: 'smooth'
    })
}
});

window.addEventListener('keydown', function(e) {
if( e.key === 'PageUp' ) {
    window.scrollTo({
    top: window.scrollY - (window.screen.height - 220),
    left: 0,
    behavior: 'smooth'
    })
}
});