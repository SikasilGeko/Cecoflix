let APIKEY = `https://api.themoviedb.org/3/movie/popular?api_key=c53e8c4003b4b86e426aaba51940db7d&language=bg-US&page=1`;
let img = `https://image.tmdb.org/t/p/w1280`;

let api2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=c53e8c4003b4b86e426aaba51940db7d&language=bg-US&page=1`;

let api3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=c53e8c4003b4b86e426aaba51940db7d&language=bg-US&page=1`;

let api4 = `https://api.themoviedb.org/3/movie/now_playing?api_key=c53e8c4003b4b86e426aaba51940db7d&language=bg`





let masiv = [];

let searchbar = document.querySelector(`.search`);

searchbar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = masiv.filter(character => {
        return character.title.toLowerCase().includes(searchString) || character.original_title.toLowerCase().includes(searchString);
    });
    displayCharacters(filteredCharacters);
});

async function loadCharacters() {
    try {
        const res = await fetch(APIKEY);
        const data = await res.json();
        masiv = data.results;
        displayCharacters(masiv);
    } catch (err) {
        console.error(err);
    }
}

const displayCharacters = (characters) => {
    const htmlString = characters.map(i => {
        return `
        <div class="movie-list-item pb-5  col-xl-2 col-lg-3 col-mg-4 col-sm-3 col-3  ">
        <img class="movie-list-item-img" src="${img + i.poster_path}" alt="">
        <span class="movie-list-item-title">${i.title}</span>
       
        <button class="movie-list-item-button">Гледай</button>
    </div>`;
    }).join('');
    document.getElementById("movie-list-1").innerHTML = htmlString;
};

loadCharacters();








async function getMovies2() {

    let resp = await fetch(api2);
    let masiv = await resp.json();




    let html = ``


    masiv.results.forEach((i) => {

        html += `
        
                        <div class="movie-list-item pb-5   col-xl-2 col-lg-3 col-mg-4 col-sm-3 col-3">
                            <img class="movie-list-item-img" src="${img + i.poster_path}" alt="">
                            <span class="movie-list-item-title">${i.title}</span>
                           
                            <button class="movie-list-item-button">Гледай</button>
                        </div>
    `

    })

    document.getElementById("movie-list-2").innerHTML = html;


}




getMovies2();

getMovies3();



async function getMovies3() {

    let resp = await fetch(api3);
    let masiv = await resp.json();




    let html = ``


    masiv.results.forEach((i) => {

        html += `
        
                        <div class="movie-list-item pb-5 col-xl-2 col-lg-3 col-mg-4 col-sm-3 col-3">
                            <img class="movie-list-item-img" src="${img + i.poster_path}" alt="">
                            <span class="movie-list-item-title">${i.title}</span>
                           
                            <button style="text-align: center;" class="movie-list-item-button">Гледай</button>
                        </div>
    `

    })

    document.getElementById("movie-list-3").innerHTML = html;

}


