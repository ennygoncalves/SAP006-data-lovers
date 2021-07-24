
import './data.js';
import { ordering } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;

function print(movies) {
	let card = "";

	for (let property of movies) {
		card += `
			<div class="card flexBox">
				<h3>${property.title}</h3>
				<br>
                <img class="imgCard" src=${property.poster}>
                <h4> ${property.description}</h4>
				<h4>Director: ${property.director}</h4>
				<h4>Producer: ${property.producer}</h4>
				<h4>Release Date: ${property.release_date}</h4>
                <h4>Score: ${property.rt_score}</h4>
                
			</div>
		`
	}
	document.getElementById("movies").innerHTML = card;

}
print(movies);

document.getElementById("order").addEventListener("change", (option) => {
	let filter = option.target.value;
	let order = ordering(movies, filter);
	print(order);
});

