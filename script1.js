var goGame=$(".goGameBut")

// console.log(goGame)

var listOfGames = [".Mine",".Among",".AD",".AR",".Cod",".CC",".CR",".DTI",".EM",".FF",".Fort",".GI",".Gran",".MC",".MK",".ND",".Pig",".Pok",".SS",".MM",".FG",".BW"]

// `.{$listOfGames[..] `
// var Title=$(".Info-container")
goGame.on("click",displayGame)


function displayGame(){
  var randomIndex=Math.floor(Math.random()*listOfGames.length);
  var randomGameImg=listOfGames[randomIndex];
  console.log(randomGameImg);


  if(randomGameImg == ".Mine"){
    $(".Image-container").attr("src","Games/minecraft.webp")
      $(".titleNames").text("Minecraft")
    // Title.append(`<p>Minecraft.</p>`)
     $(".Information").text("Minecraft is a sandbox game where players can explore a blocky, procedurally-generated 3D world, crafting tools and building structures with various blocks. It offers multiple game modes including survival, creative, and multiplayer.")
  
    
  }
  else if(randomGameImg == ".Among"){
   $(".Image-container").attr("src","Games/amongus.png")
    $(".titleNames").text("Among Us")
    $(".Information").text("Among Us is a social deduction game where players work together on a spaceship, completing tasks to win. However, some players are impostors trying to sabotage and eliminate the crew without being caught.")
   
    }
   else if(randomGameImg == ".AD"){
    $(".Image-container").attr("src","Games/adoptme.webp")
     $(".titleNames").text("Adopt Me")
     $(".Information").text("Adopt Me is a popular role-playing game on Roblox where players can adopt virtual pets and build homes. Players can earn in-game currency by participating in various activities like taking care of pets, decorating homes, or trading with other players.")
 
      }
  else if(randomGameImg == ".AR"){
 $(".Image-container").attr("src","Games/arsenal.png")
    $(".titleNames").text("Arsenal")
    $(".Information").text("Arsenal is a first-person shooter game on Roblox where players engage in fast-paced matches, earning new weapons with each elimination. The goal is to be the first to reach a set number of kills or complete the objective.")
  
     }
  else if(randomGameImg == ".Cod"){ $(".Image-container").attr("src","Games/call of duty.webp")
  $(".titleNames").text("Call of Duty")
$(".Information").text("Call of Duty is a popular first-person shooter franchise known for its intense multiplayer modes, campaign stories, and cooperative gameplay. Players engage in combat scenarios based on real-world or fictional military operations.")
 
 }
 else if(randomGameImg == ".CC"){
   $(".Image-container").attr("src","Games/candycrushsaga.png")
    $(".titleNames").text("Candy Crush")
   $(".Information").text("Candy Crush Saga is a puzzle game where players match colorful candies in combinations of three or more to clear levels and earn points. It features hundreds of levels with increasing difficulty and occasional special events")

            }
   else if(randomGameImg == ".CR"){
   $(".Image-container").attr("src","Games/clashroyale.jpg")
      $(".titleNames").text("Clash Royale")
     $(".Information").text("Clash Royale is a real-time strategy game where players collect cards featuring characters from the Clash of Clans universe. They build decks and deploy units strategically to destroy their opponent's towers and win battles.")
    
              }
  else if(randomGameImg == ".DTI"){
      $(".Image-container").attr("src","Games/dresstoimpress.jpeg")
    $(".titleNames").text("Dress to Impress")
    $(".Information").text(" Dress to Impress is a fashion-focused game on Roblox where players create stylish outfits to compete in fashion shows and earn rewards based on votes from other players.")
    
    }
  else if(randomGameImg == ".EM"){
    $(".Image-container").attr("src","Games/epicminigames.png")
    $(".titleNames").text("Epic Mini Games")
    $(".Information").text("Epic Minigames is a collection of short and fast-paced minigames on Roblox where players compete or collaborate to complete various challenges and earn rewards.")
  
  }
  else if(randomGameImg == ".FF"){
    $(".Image-container").attr("src","Games/fleethefacility.png")
     $(".titleNames").text("Flee the Facility")
    $(".Information").text("Flee the Facility is a teamwork based game on Roblox. Players consist of 2-4 players called survivors who hack computers to escape the facility and avoid getting captured by the player designated as a beast.")
   
  }
  else if(randomGameImg == ".Fort"){
    $(".Image-container").attr("src","Games/fortnite.png")
    $(".titleNames").text("Fortnite")
    $(".Information").text("Fortnite is a battle royale game where players skydive onto an island, gather resources, and battle to be the last one standing. It features building mechanics and regular updates with new gameplay elements and challenges.")
  
  }
  else if(randomGameImg == ".GI"){
    $(".Image-container").attr("src","Games/genshinimpact.png")
    $(".titleNames").text("Genshin Impact")
    $(".Information").text("Genshin Impact is an action RPG where players explore an open-world fantasy realm, battling monsters and solving puzzles. They can switch between characters with unique abilities and team up in multiplayer mode.")

  }
  else if(randomGameImg == ".Gran"){
    $(".Image-container").attr("src","Games/granny.png")
    $(".titleNames").text("Granny")
    $(".Information").text("Granny is a horror game where players must escape from a creepy house while evading the pursuit of Granny, an AI-controlled character who listens for any noises the player makes.")
    
  }
  else if(randomGameImg == ".MC"){
    $(".Image-container").attr("src","Games/madcity.png")
    $(".titleNames").text("Mad City")
    $(".Information").text("Mad City is an open-world action game on Roblox where players can choose to be a superhero, supervillain, or a police officer. They can engage in various activities such as robbing banks, completing missions, or arresting criminals.")
    
  }
  else if(randomGameImg == ".MK"){
    $(".Image-container").attr("src","Games/mariokart.png")
     $(".titleNames").text("Mario Kart")
    $(".Information").text("Mario Kart is a racing game series featuring characters from the Mario universe. Players race against each other on colorful tracks, using items and power-ups to gain an advantage and win races.")
 
  }
  else if(randomGameImg == ".ND"){
    $(".Image-container").attr("src","Games/naturaldisastersurvival.png")
    $(".titleNames").text("Natural Disaster")
    $(".Information").text(" Natural Disaster Survival is a Roblox game where players must survive random natural disasters such as earthquakes, floods, and tornadoes by finding shelter and avoiding environmental hazards.")
  
  }
  else if(randomGameImg == ".Pig"){
    $(".Image-container").attr("src","Games/piggy.png")
    $(".titleNames").text("Piggy")
    $(".Information").text("Piggy is a survival horror game on Roblox where players must solve puzzles and escape a map while avoiding being caught and killed by an AI-controlled character known as Piggy.")
    $(".titleNames").text("Piggy")
  }
  else if(randomGameImg == ".Pok"){
    $(".Image-container").attr("src","Games/pokemon go.png")
     $(".titleNames").text("Pokemon Go")
    $(".Information").text("Pokemon Go is an augmented reality game where players explore the real world to find and catch virtual creatures called Pokémon. Players can battle other trainers and participate in events to collect rare Pokémon.")
    $(".titleNames").text("Pokemon Go")
  }
  else if(randomGameImg == ".SS"){
    $(".Image-container").attr("src","Games/subwaysurfers.png")
    $(".titleNames").text("Subway Surfers")
    $(".Information").text("Subway Surfers is an endless runner game where players control characters running through subway tracks, avoiding obstacles and collecting coins and power-ups. The goal is to achieve the highest score possible.")
    
  }
  else if(randomGameImg == ".MM"){
    $(".Image-container").attr("src","Games/murder mystery.jpeg")
     $(".titleNames").text("Murder Mystery")
    $(".Information").text("Murder Mystery 2 is a Roblox multiplayer game where players are either innocent, the sheriff, or the murderer. Innocents try to survive and identify the murderer, while the sheriff protects them. The murderer aims to eliminate everyone without getting caught.")
   
  }
  else if(randomGameImg == ".FG"){
    $(".Image-container").attr("src","Games/fallguys.png")
     $(".titleNames").text("Fall Guys")
    $(".Information").text("Fall Guys is a chaotic multiplayer party game where up to 60 players compete in colorful obstacle courses. Players control cute characters and navigate various challenges, aiming to be the last one standing. The game features hilarious physics and unpredictable gameplay.")
    
  }
  else if(randomGameImg == ".BW"){
    $(".Image-container").attr("src","Games/Bedwars.jpeg")
     $(".titleNames").text("Bed Wars")
    $(".Information").text("BedWars is a Roblox team-based game where players protect their bed and destroy others' beds. Teams gather resources, build defenses, and fight opponents. Players respawn as long as their bed is intact, and the last team standing wins.")
    
  }
}

