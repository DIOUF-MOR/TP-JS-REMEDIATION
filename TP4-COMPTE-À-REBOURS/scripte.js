const compteur = () => {
    const coumpteurDate = new Date("December 31, 2021 00:00:00").getTime();
    const maintenant = new Date().getTime();
    const dif = coumpteurDate - maintenant;

    const seconde = 1000;
    const minute = seconde * 60;
    const heure = minute * 60;
    const jour = heure * 24;

    const textjour = Math.floor(dif / 1000 / 60 / 60 / 24);
    const textheure = Math.floor(dif / 1000 / 60 / 60) % 24;
    const textminute = Math.floor(dif / 1000 / 60) % 60;
    const textseconde = Math.floor(dif / 1000) % 60;

    document.querySelector(".jour").innerText = textjour;
    document.querySelector(".heure").innerText = textheure;
    document.querySelector(".minute").innerText = textminute;
    document.querySelector(".seconde").innerText = textseconde;

};
setInterval(compteur, 1000);