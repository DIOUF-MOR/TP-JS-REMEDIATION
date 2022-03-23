
data = [

    {
        icone: "nav-icon fas fa-tachometer-alt",
        titre: "Dashborrd",
        news: "",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Dashborrd v1"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Dashborrd v2"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Dashborrd v3"
            }
        ]
    },

    {
        icone: "nav-icon fas fa-th",
        titre: "Widgets",
        news: "",
        fleche: "new",
        div2: [
            {
                iconeRonde: "",
                nom: ""
            }
        ]

    },
    {
        icone: "nav-icon fas fa-copy",
        titre: "Layout Options",
        news: "number",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Top Navigation"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Top Navigation + Sidebar"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Boxed"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Fixed Sidebar"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Fixed Sidebar + Custom Area"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Fixed Navbar"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Fixed Footer"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Callopset Sidebar"
            },
        ]
    },
    {
        icone: "nav-icon fas fa-chart-pie",
        titre: "Charts",
        news: "",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "ChartJS"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Flot"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Inline"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "uPlot"
            },

        ]
    },
    {
        icone: "nav-icon fas fa-tree",
        titre: "UI Elements",
        news: "",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "General"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Icons"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Buttons"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Sliders"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Modals & alerts"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Navebar & Tabs"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Timeline"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Ribbons"
            },
        ]
    },
    {
        icone: "nav-icon fas fa-edit",
        titre: "Forms",
        news: "",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "General Elements"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Advanced Elements"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Editors"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "Validation"
            },

        ]
    },
    {
        icone: "nav-icon fas fa-table",
        titre: "Tables",
        news: "",
        fleche: "right fas fa-angle-left",
        div2: [
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "SimpleTables"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "DataTables"
            },
            {
                iconeRonde: "far fa-circle nav-icon",
                nom: "JsGrid"
            },


        ]
    },
]

const nav = document.querySelector('.navigator')
const contentEntete = document.querySelector('.contentEntete')
const El_hadji_sy = document.querySelector('.fa-bars');
const conteneur = document.querySelector('.conteneur')
const serche = document.querySelector('.conteneur');


for (let i = 0; i < 3; i++) {
    ajoutDiv(contentEntete);
}
addElements(nav);

const image=document.createElement('img');
const image2=document.createElement('img');
const text=document.createElement('p');
const text2=document.createElement('p');
const input=document.createElement('input');input.type="search";
const searche=document.createElement('i');searche.className="fas fa-search fa-fw";
input.className="input"
image.src="./AdminLTELogo.png";
text.innerHTML="AdminLTE 3";
image2.src="./user.jpg";
text2.innerHTML="Alexander Pierce ";
contentEntete.children[0].firstChild.appendChild(image);
contentEntete.children[0].lastChild.appendChild(text);

contentEntete.children[1].firstChild.appendChild(image2);
contentEntete.children[1].lastChild.appendChild(text2);

contentEntete.children[2].lastChild.appendChild(input);
contentEntete.children[2].lastChild.appendChild(searche);
contentEntete.children[2].className='suprimer';

function ajoutDiv(parent){
    const contentMenu=document.createElement('div');
    const contentImg=document.createElement('span');
    const contentInfo=document.createElement('span');

    contentMenu.className="contentMenu";
    contentInfo.className="contentInfo";
    contentImg.className="contentImg";
    
    contentMenu.append(contentImg,contentInfo);
    parent.appendChild(contentMenu);
}

function creatElement() {
    const divParent = document.createElement('div');
    const divContent = document.createElement('div');
    const divIcone = document.createElement('div');
    const divElements = document.createElement('div');
    const spanIcone = document.createElement('span');
    const spanText = document.createElement('span');
    const spanNumber = document.createElement('span');
    const spanDownLeft = document.createElement('span');
    const sousMenu = document.createElement('ul');


    divIcone.appendChild(spanIcone);
    divIcone.className = 'divIcone';
    divElements.append(spanText, spanNumber, spanDownLeft);
    divElements.className = 'divElements';
    divContent.append(divIcone, divElements);
    divContent.className = 'cellule';
    divParent.append(divContent, sousMenu);
    divParent.className = 'divParent';
    sousMenu.className = 'sousMenu';

    divContent.addEventListener('click', function () {
        if (spanDownLeft.className == "right fas fa-angle-left" || spanDownLeft.className == "right fas fa-angle-left rotation") {
            spanDownLeft.classList.toggle('rotation')
            sousMenu.classList.toggle('sousMenuRotate')
        }
    })
    return divParent;
}

function addElements(parent) {
    for (let i = 0; i < data.length; i++) {
        parent.appendChild(creatElement());

        parent.children[i].firstChild.firstChild.firstChild.className = data[i].icone;
        parent.children[i].firstChild.lastChild.firstChild.innerHTML = data[i].titre;
        parent.children[i].firstChild.lastChild.children[1].className = data[i].news;
        parent.children[i].firstChild.lastChild.lastChild.className = data[i].fleche;

        for (let j = 0; j < data[i].div2.length; j++) {
            parent.children[i].lastChild.appendChild(creatElement());
            parent.children[i].lastChild.children[j].firstChild.firstChild.firstChild.className = data[i].div2[j].iconeRonde;
            parent.children[i].lastChild.children[j].firstChild.lastChild.firstChild.innerHTML = data[i].div2[j].nom;
        }
    }
    parent.children[1].firstChild.lastChild.lastChild.innerHTML = "New";
    parent.children[2].firstChild.lastChild.children[1].innerHTML = "6";
}

El_hadji_sy.addEventListener('click', function () {
    document.querySelectorAll('.divElements').forEach(Element => {
        Element.classList.toggle('hidden');
    })
    contentEntete.children[0].lastChild.classList.toggle('hidden');
    contentEntete.children[0].firstChild.classList.toggle('centerContent');

    contentEntete.children[1].lastChild.classList.toggle('hidden');
    contentEntete.children[1].firstChild.classList.toggle('centerContent');

    contentEntete.children[2].classList.toggle('hidden');
    

})

