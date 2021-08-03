import './data.js';
import { filterCaracters } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;

function getCaracters(movies) {
    let caracters = []
    for (let movie of movies) {
        for (let person of movie.people) {
            person.movie_title = movie.title
            caracters.push(person)
        }
    }
    return caracters
}

function print(caracters) {
    let card = "";

    for (let person of caracters) {
        card += `
            <div class="card flexBox">
                <div class="card-content">
                 <h3 class="card-title">${person.name}</h3>
                    
                    <div class="card-body">
                        
                        <h4>Movie: ${person.movie_title}</h4>
				        <h4>Age: ${person.age}</h4>
				        <h4>Specie: ${person.specie}</h4>
                        
                     </div>
                </div>
                
			</div>
        `
    }
    document.getElementById("caracters").innerHTML = card;
    let cards = document.getElementsByClassName("card")
    let index = 0;
    for (let person of caracters) {
        cards[index].style.backgroundImage = "url('" + person.img + "')";
        index++
    }


}
print(getCaracters(movies));

function populeteMoviesSelection(movies) {
    let options = ""
    for (let movie of movies) {
        options += `
        <option class="option" value="${movie.title}">${movie.title}</option>

        `
    }
    document.getElementById("order").innerHTML += options

}
populeteMoviesSelection(movies)



document.getElementById("order").addEventListener("change", (option) => {
    let caracters = getCaracters(movies)
    let filter = option.target.value;
    let order = filterCaracters(caracters, filter);
    print(order);
});