document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const menuBtn = document.getElementById('menu-display');
    const closeBtn = document.querySelector('.hiddenMenu');

    // Initially hidden
    nav.classList.remove('show');
    closeBtn.style.display = 'none';

    // Show menu
    menuBtn.addEventListener('click', function () {
        nav.classList.add('show');
        menuBtn.classList.add('hidden');
        closeBtn.style.display = 'block';
    });

    // Hide menu
    closeBtn.addEventListener('click', function () {
        nav.classList.remove('show');
        menuBtn.classList.remove('hidden');
        closeBtn.style.display = 'none';
    });
});
