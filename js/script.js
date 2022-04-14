const toggleBar = document.getElementById('toggle-bar')
const toggleMenu = document.getElementById('toggle-menu')
toggleBar.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu.classList.toggle('toggle-display')
});