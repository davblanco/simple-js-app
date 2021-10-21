pokemonlist = [
  // pokemon objects
{ name: "Bulbasaur", height: .7, type: ["grass", "poison"] },
{ name: "Charizard", height: 1.7, type: ["fire"] },
{ name: "Squirtle", height: 0.5, type: ["water"] },
{ name: "Pidgey", height: 0.3, type: ["normal , flying"] },
];

pokemonlist2 = [
  {name: "ninetales", height: 1.2, type: ["fire"] },
  {name: "nidoking", height: 1.4, type: ["poison ,  ground"] },
  {name: "seadra", height: 1.2, type: ["water"] },
  {name: "ditto", height: 0.3, type: ["normal"] }
]

function printArrayDetails(list){
  for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height > 1.1) {
  
      document.write("<p>"+
        pokemonlist[i].name + " height: " + pokemonlist[i].height + "  : Wow, thats a big pokemon!" + "<p>");
    } 
    
    else if (pokemonlist[i].height < 1.0 && pokemonlist[i].height > 0.4) {
      document.write("<p>"+
        pokemonlist[i].name + " height: " + pokemonlist[i].height + "<p>");
    }
     
    else {
      document.write("<p>"+ pokemonlist[i].name + " height: " +
          pokemonlist[i].height + "  : Wow, thats a small pokemon!" + "<p>");
    }
  }
  for (let i = 0; i < pokemonlist2.length; i++) {
    if (pokemonlist2[i].height > 1.1) {
      document.write("<p>"+
        pokemonlist2[i].name + " height: " + pokemonlist2[i].height + "  : Wow, thats a big pokemon!" + "<p>");
    } 
    
    else if (pokemonlist2[i].height < 1.0 && pokemonlist2[i].height > 0.4) {
      document.write("<p>" +
        pokemonlist2[i].name + " height: " + pokemonlist2[i].height + "<p>");
    }
     
    else {
      document.write("<p>"+ pokemonlist2[i].name + " height: " +
          pokemonlist2[i].height + "  : Wow, thats a small pokemon!" + "<p>");
    }
  }
  }
  printArrayDetails(pokemonlist);
  