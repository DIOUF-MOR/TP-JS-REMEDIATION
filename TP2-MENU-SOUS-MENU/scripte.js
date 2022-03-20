const tabMenus = [
    {
        icon1: "nav-icon fas fa-tachometer-alt",
        p: "Dashboard",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "",
        p: "",
        icon2: "",
        icon3: "far fa-circle nav-icon",
        p2: "Dashboard v1",
    },
    {
        icon1: "",
        p: "",
        icon2: "",
        icon3: "far fa-circle nav-icon",
        p2: "Dashboard v2",
    },
    {
        icon1: "",
        p: "",
        icon2: "",
        icon3: "far fa-circle nav-icon",
        p2: "Dashboard v3",
    },
    {
        icon1: "nav-icon fas fa-th",
        p: "Widgets",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "nav-icon fas fa-copy",
        p: "layout Options",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "nav-icon fas fa-chart-pie",
        p: "Charts",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "nav-icon fas fa-tree",
        p: "UI Elements",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "nav-icon fas fa-edit",
        p: "Forms",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },
    {
        icon1: "nav-icon fas fa-table",
        p: "Tables",
        icon2: "right fas fa-angle-left",
        icon3: "",
        p2: "",
    },

]

tabMenus.forEach(function (objet) {
    valIcon1 = objet["icon1"]
    valP = objet["p"]
    valicon2 = objet["icon2"];
    valicon3 = objet["icon3"];
    valP2 = objet["p2"]




    const nav = document.querySelector('.conteneurPrincipal');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const icon1 = document.createElement('i');
    const icon2 = document.createElement('i');
    const icon3 = document.createElement('i');

    icon1.className = valIcon1
    icon2.className = valicon2
    icon3.className = valicon3
    p.innerText = valP;
    p2.innerText = valP2;
    p.className = "paragraphe"
    p2.className = "paragraphe"
    div.className = 'cellule';
    div.append(icon1, p, icon2);
    div.append(icon3, p2);
    nav.appendChild(div);
   

    icon2.addEventListener('click', function () {

        if (icon2.className == "fa-solid fa-angle-down") {
            icon2.className = "right fas fa-angle-left"

        } else if (icon2.className == "right fas fa-angle-left") {
            icon2.className = "fa-solid fa-angle-down";
            dive.style.visibility = visibled;
        }
    })
});


