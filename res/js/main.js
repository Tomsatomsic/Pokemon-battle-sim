const play = document.getElementById("play")
const pokelogo = document.getElementById("pokelogo")
const lobby = document.getElementById("lobby")

const pokemon = document.getElementById("pokemon")
const battle = document.getElementById("battle")
const menu = document.getElementById("menu")

const battleback = document.getElementById("battleback")
const pokemans = document.getElementById("pokemans")
const inf = document.getElementById("inf")

const backbutton = document.getElementById("backbutton")
const woods = document.getElementById("woods")


const empoleon = document.getElementById("empoleon")
const piplup = document.getElementById("piplup")
const prinplup = document.getElementById("prinplup")
const squirtle = document.getElementById("squirtle")
const wartortle = document.getElementById("wartortle")
const blastoise = document.getElementById("blastoise")
const charmander = document.getElementById("charmander")
const charmeleon = document.getElementById("charmeleon")
const charizard = document.getElementById("charizard")
const bulbasaur = document.getElementById("bulbasaur")
const ivysaur = document.getElementById("ivysaur")
const venusaur = document.getElementById("venusaur")
const snorlax = document.getElementById("snorlax")
const pikachu = document.getElementById("pikachu")







function start() {
    pokelogo.style.display = "none";
    play.style.display = "none";
    lobby.style.display = "flex";
    menu.style.display="flex";
    inf.style.display = "none";
}


function battles(){
    battleback.style.display = "flex";
    lobby.style.display = "none";
    menu.style.display="none";
    backbutton.style.display = "flex";

    empoleon.style.display = "none";
    piplup.style.display = "none";
    prinplup.style.display = "none";
    squirtle.style.display = "none";
    wartortle.style.display = "none";
    blastoise.style.display = "none";
    bulbasaur.style.display = "none";
    ivysaur.style.display = "none";
    venusaur.style.display = "none";
    charmander.style.display = "none";
    charmeleon.style.display = "none";
    charizard.style.display = "none";
    snorlax.style.display = "none";
    pikachu.style.display = "none1";
}
function back(){
    lobby.style.display = "flex";
    menu.style.display="flex";
    battleback.style.display = "none";
    backbutton.style.display = "none";
    woods.style.display = "none";

    empoleon.style.display = "none";
    piplup.style.display = "none";
    prinplup.style.display = "none";
    squirtle.style.display = "none";
    wartortle.style.display = "none";
    blastoise.style.display = "none";
    bulbasaur.style.display = "none";
    ivysaur.style.display = "none";
    venusaur.style.display = "none";
    charmander.style.display = "none";
    charmeleon.style.display = "none";
    charizard.style.display = "none";
    snorlax.style.display = "none";
    pikachu.style.display = "none";
}

function pokeInfo(){
    empoleon.style.display = "flex";
    piplup.style.display = "flex";
    prinplup.style.display = "flex";
    squirtle.style.display = "flex";
    wartortle.style.display = "flex";
    blastoise.style.display = "flex";
    bulbasaur.style.display = "flex";
    ivysaur.style.display = "flex";
    venusaur.style.display = "flex";
    charmander.style.display = "flex";
    charmeleon.style.display = "flex";
    charizard.style.display = "flex";
    snorlax.style.display = "flex";
    pikachu.style.display = "flex";

    backbutton.style.display = "flex";
    battleback.style.display = "none";
    lobby.style.display= "none";
    menu.style.display = "none";
    woods.style.display = "flex";
}

function back2(){
    backbutton.style.display = "none";
    lobby.style.display = "flex";
    menu.style.display="flex";
    woods.style.display = "none";
}
