import data from './data/ghibli/ghibli.js';

const movies = data.films;

function print(movies) {
    let card = "";

    for (let movie of movies) {
        for (let person of movie.people) {
            card += `
			<div class="card flexBox">
                <h3>${person.name}</h3>
                <img class="imgCard" src=${person.img}>
                 <h4>Movie: ${movie.title}</h4>
				<h4>Age: ${person.age}</h4>
				<h4>Specie: ${person.specie}</h4>
			</div>
        `
        console.log(person)
        }
    }
    document.getElementById("caracters").innerHTML = card;

}
print(movies);