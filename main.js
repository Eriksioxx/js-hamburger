console.log('JS OK!')


// variabili da configurare

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuExtended = document.querySelector('.header-right');
const

    // estensione menù griglia al click

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.style.display = 'block';
    })

// estensione menù griglia al ri-click

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})