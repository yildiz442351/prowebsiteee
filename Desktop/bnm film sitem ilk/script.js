const API UR1 = https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.donanimhaber.com%2Fimages%2Fimages%2Fhaber%2F165421%2Fsrc_340x1912xizlenmesi-gereken-en-iyi-animasyon-filmleri.jpg&tbnid=b-T6DLlWh72qAM&vet=12ahUKEwji-rPJwYCBAxU5i_0HHSvnARsQMygDegQIARBS..i&imgrefurl=https%3A%2F%2Fwww.donanimhaber.com%2Fizlenmesi-gereken-en-iyi-animasyon-filmleri--165421&docid=_emPju6IRjjb1M&w=2000&h=1000&q=film%20%C3%B6nerileri%20animasyon&ved=2ahUKEwji-rPJwYCBAxU5i_0HHSvnARsQMygDegQIARBS

const IMG_Path = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHQvMZspgDopvyT4FqXZaCKV-x-afo83udQ&usqp=CAU

const Search_Url = https://www.oggusto.com/_next/image?url=https%3A%2F%2Fwp.oggusto.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fen-iyi-animasyon-filmleri.webp&w=1920&q=75

const main =document.getElementById('main');
const form =document.getElementById('form');
const search =document.getElementById('search');


getMovies(API_UR1);

async function getMovies(url){
    const res =await fetch(url);
    const data = await res.json

    showMovies(data.results);
}
 function showMovies(movies){

    main.innerHTML ='';
    movies.forEach((movie)=>) {
        const{title, poster_path, vote_average,overview }=movie;
        const movieEl =document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=
        <div class="movie">
        <img src="${IMG_Path + poster_path}" alt="{title}">
        <div class="movie-info">
            <h3>${title}</h3>,
            <span class="green">${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
        <div class="overview"></div>
        ${overview}
        </div>
    </div>


main.appendChild(movieEl);
});
 
}
function getClassByRate(vote){ 
    if(vote >=8){
        return 'green'
    }else if(vote >=5){}

}
.form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const searchTerm = search

    if(searchTerm && searchTerm !==''){
        getMovies(Search_Url + searchTerm)
        search.value ='';
    }else{
        window.location.reload()
    }
});