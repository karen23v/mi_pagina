document.querySelector('.hamburguesa').addEventListener('click', function () {
    const menu = document.querySelector('nav ul');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});