//button and img 
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

//poke info pokemon images
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

//Hp
let venusaurHpcka= 1000;

const venusaurHp = document.getElementById("venusaurHp")
let snorlaxHP = 1000;

const player = document.getElementById("player")
const venuHp = document.getElementById("venuHp")

//pokeStats
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

//pokeon small pixel icons
const squirtleSmall = document.getElementById("squirtleSmall")
const wartortleSmall = document.getElementById("wartortleSmall")
const blastoiseSmall = document.getElementById("blastoiseSmall")

const bulbasaurSmall = document.getElementById("bulbasaurSmall")
const ivysaurSmall = document.getElementById("ivysaurSmall")
const venusaurSmall = document.getElementById("venusaurSmall")

const charmanderSmall = document.getElementById("charmanderSmall")
const charmeleonSmall = document.getElementById("charmeleonSmall")
const charizardSmall = document.getElementById("charizardSmall")

const piplupSmall = document.getElementById("piplupSmall")
const prinplupSmall = document.getElementById("prinplupSmall")
const empoleonSmall = document.getElementById("empoleonSmall")

const snorlaxSmall = document.getElementById("snorlaxSmall")

const pikaSmall = document.getElementById("pikaSmall")

const pokeChooser = document.getElementById("pokeChooser")


//pokemon battle icons
const squirtleBattle = document.getElementById("squirtleBattle")
const wartortleBattle = document.getElementById("wartortleBattle")
const blastoiseBattle = document.getElementById("blastoiseBattle")

const bulbasaurBattle = document.getElementById("bulbasaurBattle")
const ivysaurBattle = document.getElementById("ivysaurBattle")
const venusaurBattle = document.getElementById("venusaurBattle")

const charmanderBattle = document.getElementById("charmanderBattle")
const charmeleonBattle = document.getElementById("charmeleonBattle")
const charizardBattle = document.getElementById("charizardBattle")

const piplupBattle = document.getElementById("piplupBattle")
const prinplupBattle = document.getElementById("prinplupBattle")
const empoleonBattle = document.getElementById("empoleonBattle")

const snorlaxBattle = document.getElementById("snorlaxBattle")
const pikaBattle = document.getElementById("pikaBattle")


//attacks of pokemon
const pikAttacks = document.getElementById("pikAttacks")
const snorAttacks = document.getElementById("snorAttacks")

const squirtAttacks = document.getElementById("squirtAttack")
const wartAttacks = document.getElementById("wartAttacks")
const blastAttacks = document.getElementById("blastAttacks")

const bulbAttacks = document.getElementById("bulbAttacks")
const ivyAttacks = document.getElementById("ivyAttacks")
const venusAttacks = document.getElementById("venusAttacks")

const charmanAttacks = document.getElementById("charmanAttacks")
const charmelAttacks = document.getElementById("charmelAttacks")
const charAttacks = document.getElementById("charAttacks")

const pipAttacks = document.getElementById("pipAttacks")
const prinpAttacks = document.getElementById("prinpAttacks")
const empoAttacks = document.getElementById("empoAttacks")

//"enemy" pokemon

const venusaurBattleTwo = document.getElementById("venusaurBattleTwo")





//play button
 start=()=>{
    pokelogo.style.display = "none";
    play.style.display = "none";
    lobby.style.display = "flex";
    menu.style.display="flex";
    inf.style.display = "none";
}

//battle button function
 battles=()=>{
    battleback.style.display = "flex";
    lobby.style.display = "none";
    menu.style.display="none";
    backbutton.style.display = "flex";

    
    squirtleSmall.style.display = "flex";
    wartortleSmall.style.display = "flex";
    blastoiseSmall.style.display = "flex";

    bulbasaurSmall.style.display = "flex";
    ivysaurSmall.style.display = "flex";
    venusaurSmall.style.display = "flex";

    charmanderSmall.style.display = "flex";
    charmeleonSmall.style.display = "flex";
    charizardSmall.style.display = "flex";

    piplupSmall.style.display = "flex";
    prinplupSmall.style.display = "flex";
    empoleonSmall.style.display = "flex";

   snorlaxSmall.style.display = "flex";

   pikaSmall.style.display = "flex";

   venusaurBattleTwo.style.display = "flex";
   
   venusaurHp.style.display = "flex";
   venuHp.style.display = "flex";
  player.style.display = "flex";
  
}
//back button battle
 back=()=>{
    lobby.style.display = "flex";
    menu.style.display="flex";
    venuHp.style.display = "none"
    player.style.display = "none";
    venusaur.style.display = "none";
    venusaurBattleTwo.style.display = "none";
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
    squirtleSmall.style.display = "none";
    wartortleSmall.style.display = "none";
    blastoiseSmall.style.display = "none";
    bulbasaurSmall.style.display = "none";
    ivysaurSmall.style.display = "none";
    venusaurSmall.style.display = "none";
    charmanderSmall.style.display = "none";
    charmeleonSmall.style.display = "none";
    charizardSmall.style.display = "none";
    piplupSmall.style.display = "none";
    prinplupSmall.style.display = "none";
    empoleonSmall.style.display = "none";
   snorlaxSmall.style.display = "none";
   pikaSmall.style.display = "none";
   charmeleonBattle.style.display = "none";
   charmanderBattle.style.display = "none";
   venusaurBattle.style.display = "none";
   ivysaurBattle.style.display = "none";
   bulbasaurBattle.style.display = "none";
   blastoiseBattle.style.display ="none";
   wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";
squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";
bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";
charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";
pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";
snorAttacks.style.display = "none";
pikAttacks.style.display = "none";

}

//pokemon info button
pokeInfo=()=>{
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


//back button info
 back2=()=>{
    backbutton.style.display = "none";
    lobby.style.display = "flex";
    menu.style.display="flex";
    woods.style.display = "none"
    
}                                                    

//functions for pokeStats
squirtus=()=>{
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

wartus=()=>{
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

blastus=()=>{
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
bulbus=()=>{
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
ivus=()=>{
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

 venusus=()=>{
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

charmus=()=>{                                 
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

charmeleonus=()=>{
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

 charizardus=()=>{
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
                                                       
 snorlaxus=()=>{
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

 pikachus=()=>{                                   
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

 piplupus=()=>{                            
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

 prinplupus=()=>{                               
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
                                                    
 empoleonus=()=>{
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

//battle imgs
battleSquirt =()=>{
squirtleBattle.style.display = "flex";

wartortleBattle.style.display = "none";
ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    charmanderBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charizardBattle.style.display = "none";
    piplup.style.display = "none";
    prinplupBattle.style.display = "none";
    empoleonBattle.style.display ="none";
    snorlaxBattle.style.display = "none";
    pikaBattle.style.display = "none";

    squirtAttacks.style.display = "flex";
    wartAttacks.style.display = "none";
    blastAttacks.style.display = "none";

    bulbAttacks.style.display = "none";
    ivyAttacks.style.display = "none";
    venusAttacks.style.display = "none";

    charmanAttacks.style.display = "none";
    charmelAttacks.style.display = "none";
    charAttacks.style.display = "none";
    
    pipAttacks.style.display = "none";
    prinpAttacks.style.display = "none";
    empoAttacks.style.display = "none";

    snorAttacks.style.display = "none";
    pikAttacks.style.display = "none";

}

battleWart =()=>{
wartortleBattle.style.display = "flex";
wartAttacks.style.display = "flex";

squirtleBattle.style.display ="none";
blastoiseBattle.style.display = "none";
ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charizardBattle.style.display = "none";
    piplup.style.display = "none";
    prinplupBattle.style.display = "none";
    empoleonBattle.style.display ="none";
    snorlaxBattle.style.display = "none";
    pikaBattle.style.display = "none";

    squirtAttacks.style.display = "none";
    blastAttacks.style.display = "none";

    bulbAttacks.style.display = "none";
    ivyAttacks.style.display = "none";
    venusAttacks.style.display = "none";

    charmanAttacks.style.display = "none";
    charmelAttacks.style.display = "none";
    charAttacks.style.display = "none";
    
    pipAttacks.style.display = "none";
    prinpAttacks.style.display = "none";
    empoAttacks.style.display = "none";

    snorAttacks.style.display = "none";
    pikAttacks.style.display = "none";
}

battleBlast = ()=>{
    blastAttacks.style.display = "flex";
    blastoiseBattle.style.display ="flex";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
bulbasaurBattle.style.display = "none";
ivysaurBattle.style.display = "none";
venusaurBattle.style.display = "none";
charmanderBattle.style.display = "none";
charmeleonBattle.style.display = "none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";


bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleBulb =()=>{
    squirtleBattle.style.display ="none";
    bulbAttacks.style.display = "flex";
    bulbasaurBattle.style.display = "flex";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";

ivysaurBattle.style.display = "none";
charmanderBattle.style.display = "none";
charmeleonBattle.style.display = "none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";


ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleIvy =()=>{
    ivyAttacks.style.display = "flex";
    ivysaurBattle.style.display = "flex";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
charmanderBattle.style.display = "none";
charmeleonBattle.style.display = "none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";

venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleVenus =()=>{
    venusAttacks.style.display = "flex";
    venusaurBattle.style.display = "flex";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
charmanderBattle.style.display = "none";
charmeleonBattle.style.display = "none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";


charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleCharman =()=>{
    charmanAttacks.style.display = "flex";
    charmanderBattle.style.display = "flex";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
charmeleonBattle.style.display = "none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";


charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleCharmel =()=>{
    charmelAttacks.style.display = "flex";
    charmeleonBattle.style.display = "flex";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
charizardBattle.style.display = "none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";

charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleChar =()=>{
    charAttacks.style.display = "flex";
    charizardBattle.style.display = "flex";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
piplup.style.display = "none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";


pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battlePip =()=>{
    pipAttacks.style.display = "flex";
    piplup.style.display = "flex";
    charizardBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
prinplupBattle.style.display = "none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";


prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battlePrinp =()=>{
    prinpAttacks.style.display = "flex";
    prinplupBattle.style.display = "flex";
    piplup.style.display = "none";
    charizardBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
empoleonBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
empoAttacks.style.display = "none";

snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleEmpo =()=>{
    empoAttacks.style.display = "flex";
    empoleonBattle.style.display ="flex";
    prinplupBattle.style.display = "none";
    piplup.style.display = "none";
    charizardBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
snorlaxBattle.style.display = "none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";


snorAttacks.style.display = "none";
pikAttacks.style.display = "none";
}

battleSnor =()=>{
    snorAttacks.style.display = "flex";
    snorlaxBattle.style.display = "flex"
    empoleonBattle.style.display ="none";
    prinplupBattle.style.display = "none";
    piplup.style.display = "none";
    charizardBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
pikaBattle.style.display = "none";

squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";

bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";

charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";

pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";


pikAttacks.style.display = "none";

}

battlePika = ()=>{
    pikAttacks.style.display = "flex";
    pikaBattle.style.display = "flex";
    snorlaxBattle.style.display = "none"
    empoleonBattle.style.display ="none";
    prinplupBattle.style.display = "none";
    piplup.style.display = "none";
    charizardBattle.style.display = "none";
    charmeleonBattle.style.display = "none";
    charmanderBattle.style.display = "none";
    venusaurBattle.style.display = "none";
    ivysaurBattle.style.display = "none";
    bulbasaurBattle.style.display = "none";
    blastoiseBattle.style.display ="none";
    wartortleBattle.style.display = "none";
squirtleBattle.style.display ="none";
squirtAttacks.style.display = "none";
wartAttacks.style.display = "none";
blastAttacks.style.display = "none";
bulbAttacks.style.display = "none";
ivyAttacks.style.display = "none";
venusAttacks.style.display = "none";
charmanAttacks.style.display = "none";
charmelAttacks.style.display = "none";
charAttacks.style.display = "none";
pipAttacks.style.display = "none";
prinpAttacks.style.display = "none";
empoAttacks.style.display = "none";
snorAttacks.style.display = "none";

}

ironTail=()=>{
   venusaurHp--;
}
