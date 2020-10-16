const HashMap = require("./HashMap");

function main() {
  const lotr = new HashMap();

  let MAX_LOAD_RATIO = 0.5;
  let SIZE_RATIO = 3;
  console.log(lotr.set("Hobbit", "Bilbo"));

  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr);
  console.log(lotr.get("Hobbit[1]"));
  console.log(lotr.get("Maiar"));
}
main();
