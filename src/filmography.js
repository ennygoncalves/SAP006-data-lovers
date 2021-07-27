
import './data.js';
import { filmFilter } from './data.js';
import {meanAge} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;

function print(movies) {
	let card = "";

	for (let property of movies) {
		card += `
		<div class="card flexBox">
			
			<div class="card-content">
					
				<h3 class="card-title">${property.title}</h3>
					
					<div class="card-body">
						
						<h4>Sinopse: ${property.description}</h4>
						<h4>Director: ${property.director}</h4>
						<h4>Producer: ${property.producer}</h4>
						<h4>Release Date: ${property.release_date}</h4>
						<h4>Score: ${property.rt_score}</h4>
						<h4>Mean Age of caracters:${meanAge(property)}</h4>
					</div>
			</div>
		</div>
		`
	}
	document.getElementById("movies").innerHTML = card;
	let index = 0;

	for (let card1 of document.getElementsByClassName("card")) {

		card1.style.backgroundImage = "url('" + movies[index].poster + "')";
		index++
	}
}
print(movies);

document.getElementById("order").addEventListener("change", (option) => {
	let filter = option.target.value;
	let order = filmFilter(movies, filter);
	print(order);
});

