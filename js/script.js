console.log('JS OK!');


// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello
// come nello screenshot allegato.
//
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e
// inseriamo un'immagine grande al centro: avremo così la struttura base e
// gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
//
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini
// dinamicamente servendoci dell'array fornito e un semplice ciclo for che
// concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe
// specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato
// nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
//
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// che quindi verrà visualizzata al posto della precedente.
//
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima
// immagine e l'utente clicca la freccia per andare all’immagine precedente,
// dovrà comparire l’ultima immagine dell’array e viceversa.
//
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra
// dell’immagine grande attiva, come nello screenshot proposto.
// Tutte le miniature avranno un layer di opacità scura, tranne quella
// corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il
// cambio di miniatura attiva.


//CAROUSEL SCRIPT
const images = ['01', '02', '03', '04', '05'];

let activeIndex = 0;

const carImg = document.getElementById('car-img');

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageClass = i === activeIndex ? 'active' : 'none'

    carImg.innerHTML += `<img
                                class="${imageClass}"
                                src="img/${image}.jpg" alt="${image}" 
                            />`

}


//DEFINING BUTTONS VARIABLES
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');


//DOWN BUTTON SCRIPT
nextButton.addEventListener('click',
    function () {
        console.log('DOWN ARROW CLICKED');

        if (activeIndex < images.length - 1) {
            carImg.innerHTML = '';
            activeIndex++;



            let counter;
            let i;
            for (i = 0; i < images.length; i++) {
                counter = i + 1;
                const image = images[i];
                const imageClass = i === activeIndex ? 'active' : 'none'

                carImg.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" />'

                console.log('i=', i);
                console.log('counter=', counter);
            }

            if (counter == 5) {
                carImg.innerHTML += 'TEST';
                i = 0;
            }
        }
    }
);


//UP BUTTON SCRIPT
previousButton.addEventListener('click',
    function () {
        console.log('UP ARROW CLICKED');

        if (activeIndex > 0) {
            carImg.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'active' : 'none'

                carImg.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" />'
            }
        }
    }
);