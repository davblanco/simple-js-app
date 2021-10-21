let pokemonlist = [
  {
    name: "Bulbasaur",
    height: ".7m",
    type: ["grass", "poison"],
  },

  {
    name: "Carmander",
    height: ".6m",
    type: ["fire"],
  },

  {
    name: "Squirtle",
    height: ".5m",
    type: ["water"],
  },

  {
    name: "pidgey",
    height: ".3m",
    type: ["normal , flying"],
  },
];

for (i = 0; pokemonlist < pokemonlist.length; i++) {
  document.write(
    pokemonlist[i].name + " Height: " + pokemonlist[i].height + "<br>");
}
