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

let squirtleHp = 150;
let wartortleHp = 225;
let blastoiseHp = 300;
let bulbasaurHp = 150;
let ivysaurHp = 200;
let venusaurHp = 310;
let charmanderHp = 140;
let charmeleonHp = 220;
let charizardHp = 300;
let piplupHp = 130;
let prinplupHp = 200;
let empoleonHp = 280;
let snorlaxHp = 400;
let pikachuHp = 175;

const squirtStats = document.getElementById("squirtstats")
const wartStats = document.getElementById("wartstats")
const blastStats = document.getElementById("blaststats")
const charmanStats = document.getElementById("charmanstats")
const charmStats = document.getElementById("charmstats")
const charStats = document.getElementById("charstats")
const bulbaStats = document.getElementById("bulbastats")
const ivyStats = document.getElementById("ivystats")
const venustats = document.getElementById("venustats")
const snorStats = document.getElementById("snorstats")
const pikaStats = document.getElementById("pikastats")
const pipStats = document.getElementById("pipstats")
const prinpStats = document.getElementById("prinstats")
const empoStats = document.getElementById("empostats")

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
    pikachu.style.display = "none";

    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
    
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

    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
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


function squirtus(){
    squirtStats.style.display = "flex";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
   }           

function wartus(){
    wartStats.style.display = "flex";
    squirtStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}                                                                       

function blastus(){
blastStats.style.display = "flex";   
squirtStats.style.display = "none";
wartStats.style.display = "none";                    
ivyStats.style.display = "none";
venustats.style.display = "none";
charmanStats.style.display = "none";
bulbaStats.style.display = "none";
charStats.style.display = "none";
charmStats.style.display = "none";
snorStats.style.display = "none";
pikaStats.style.display = "none";
pipStats.style.display = "none";
prinpStats.style.display = "none";
empoStats.style.display = "none";                  
} 
        function bulbus()   {
bulbaStats.style.display = "flex";
squirtStats.style.display = "none";
wartStats.style.display = "none";
blastStats.style.display = "none";                      
ivyStats.style.display = "none";
venustats.style.display = "none";
charmanStats.style.display = "none";
charStats.style.display = "none";
charmStats.style.display = "none";
snorStats.style.display = "none";
pikaStats.style.display = "none";
pipStats.style.display = "none";
prinpStats.style.display = "none";
empoStats.style.display = "none";
        }                           
function ivus(){
    ivyStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}                                                  

function venusus(){
    venustats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}

function charmus(){                                 
    charmanStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}

function charmeleonus(){
    charmStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}
                                                    
function charizardus(){
    charStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}
                                                       

function snorlaxus(){
    snorStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}

function pikachus(){                                   
    pikaStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}

function piplupus(){                            
    pipStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    prinpStats.style.display = "none";
    empoStats.style.display = "none";
}

function prinplupus(){                               
    prinpStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    empoStats.style.display = "none";
}
                                                    
function empoleonus(){
    empoStats.style.display = "flex";
    squirtStats.style.display = "none";
    wartStats.style.display = "none";
    blastStats.style.display = "none";                      
    ivyStats.style.display = "none";
    venustats.style.display = "none";
    charmanStats.style.display = "none";
    bulbaStats.style.display = "none";
    charStats.style.display = "none";
    charmStats.style.display = "none";
    snorStats.style.display = "none";
    pikaStats.style.display = "none";
    pipStats.style.display = "none";
    prinpStats.style.display = "none";
}

