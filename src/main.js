// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);
document.getElementById("menu").addEventListener('click', onClickMenu)
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change"); //toggle == "troca" uma class por outra
	document.getElementById("nav").classList.toggle("change");
	console.log(document.getElementById("menu-bg").classList)
	document.getElementById("menu-bg").classList.toggle("change-bg")
	console.log(document.getElementById("menu-bg").classList)
}
