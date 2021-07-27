
document.getElementById("menu").addEventListener('click', onClickMenu)
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change"); //toggle == "troca" uma class por outra
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg")
}
