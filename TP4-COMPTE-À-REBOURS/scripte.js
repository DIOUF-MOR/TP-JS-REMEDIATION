const compteur = () => {
    const coumpteurDate = new Date("December 31, 2021 00:00:00").getTime();
    const maintenant = new Date().getTime();
    const dif = coumpteurDate - maintenant;

    const seconde = 1000;
    const minute = seconde * 60;
    const heure = minute * 60;
    const jour = heure * 24;

    const jours = Math.floor(dif / 1000 / 60 / 60 / 24);
    const heures = Math.floor(dif / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(dif / 1000 / 60) % 60;
    const secondes = Math.floor(dif / 1000) % 60;

    document.querySelector(".jour").innerText = jours;
    document.querySelector(".heure").innerText = heures;
    document.querySelector(".minute").innerText = minutes;
    document.querySelector(".seconde").innerText = secondes;

};
setInterval(compteur, 1000);