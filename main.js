console.log('JS OK!')

// variabili da configurare

// const menuGrill = document.querySelector('.fa-bars');
// const menuClose = document.querySelector('.close');
// const hamburgerMenu = document.querySelector('.hamburger-menu');


// // estensione menu griglia al click

// menuGrill.addEventListener('click', function () {
//     hamburgerMenu.style.display = 'block';
// })

// // estensione menù griglia al ri-click

// menuClose.addEventListener('click', function () {
//     hamburgerMenu.style.display = 'none';
// })



// // **************2o METODO*************
// //variabili da configurare

// const menuGrill = document.querySelector('.fa-bars');
// const menuClose = document.querySelector('.fa-times');
// const hamburgerMenu = document.querySelector('.hamburger-menu');

// // // estensione menu griglia al click

// menuGrill.addEventListener('click', function () {
//     hamburgerMenu.classList.add('active');
// })

// // // estensione menù griglia chiusura

// menuClose.addEventListener('click', function () {
//     hamburgerMenu.classList.remove('active');
// })

// **************3o METODO*************
//variabili da configurare


// // estensione menu griglia al click

document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.add('active');

    console.log('Tutto ok! Grande bro');
})


// // estensione menù griglia chiusura

document.querySelector('.fa-times').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.remove('active');

    console.log('Funziona anche questo! Grande bro');
})