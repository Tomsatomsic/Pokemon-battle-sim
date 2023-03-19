const play = document.getElementById("play")
const pokelogo = document.getElementById("pokelogo")
const lobby = document.getElementById("lobby")
const pokemon = document.getElementById("pokemon")
const battle = document.getElementById("battle")
const menu = document.getElementById("menu")
const pokemans = document.getElementById("pokemans")




function start() {
    pokelogo.style.display = "none";
    play.style.display = "none";
    lobby.style.display = "flex";
    menu.style.display="flex";
}

function pokemon(){
pokemans.style.display="flex";
}


