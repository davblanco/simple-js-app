pokemonlist = [
  { name: "Bulbasaur", height: ".7", type: ["grass", "poison"] },

  {
    name: "Charizard",
    height: 1.7,
    type: ["fire"],
  },

  {
    name: "Squirtle",
    height: 0.5,
    type: ["water"],
  },

  {
    name: "Pidgey",
    height: 0.3,
    type: ["normal , flying"],
  },
];

for (let i = 0; i < pokemonlist.length; i++) {
  document.write(
    pokemonlist[i].name + ": Height: " + pokemonlist[i].height + "<br>"
  );

  if (pokemonlist[i].height > 1.0)
    document.write("  : Wow, thats big!" + "<br>");
}
