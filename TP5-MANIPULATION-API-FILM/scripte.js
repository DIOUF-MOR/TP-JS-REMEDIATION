const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const contener=document.querySelector('.contener')
fetch(APIURL).
    then(response => response.json()).
    then(response => {
        const data = response.results
        data.forEach(element => {
            createBlock(element);
        })
    }
    )
    
    
    
    
function createBlock(objet) {
    if (objet.vote_average<=5) {
        color='red'
    }else if(objet.vote_average<=7){
        color='orange'
    }else {
        color='green'
    }
    const block = `
        <div class="block">
            <span class="spanImg">
                <img src="${IMGPATH+objet.poster_path}" alt="">
            </span>
            <span class="enBas">
                <h6>${objet.title}</h6>
                <small class="${color}">${objet.vote_average} </small>
            </span>
            <span class="overVew">${objet.overview}</span>
        </div>   
    `;
    contener.insertAdjacentHTML("beforeend",block)
}



