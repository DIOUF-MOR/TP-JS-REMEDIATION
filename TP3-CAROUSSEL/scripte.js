const carrousse = document.getElementById('carrousse');

const samaGauche = document.getElementById('samaGauche');
const samaDroite = document.getElementById('samaDroite');


tabImg = [
    "img/chv.jpg",
    "img/chv1.jpg",
    "img/chv2.jpg",
    "img/chv3.jpg",
    "img/chv4.jpg",
    "img/chv5.jpg"
]
const taille = tabImg.length;
let i = 0;
carraous();
function carraous() {
    document.poulo.src = tabImg[i];
    if (i < taille - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout(carraous, 5000)
}

samaDroite.addEventListener('click', function () {
    i++;
    carraous();
    if (i == taille - 1) {
        i = 0
    }
})
samaGauche.addEventListener('click', function () {
    carraous();
    i--;
    if (i < 0) {
        i = taille - 1;
    }
    carraous();
})

window.onload = carraous;



