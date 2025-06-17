ChatMessage.create({
    content: "IT'S TIME TO ROLL"
});

let first_triple = await new Roll(`1d1000 - 1`).roll();
let second_double = await new Roll(`1d100 - 1`).roll();
let third_quad = await new Roll(`1d10000 - 1`).roll();
let name = "Adventurer #" + first_triple.total + "-" + second_double.total + "-" + third_quad.total;

let actor = await Actor.implementation.create({
  name: name,
  type: "character",
});

let str = await new Roll(`3d6`).roll();
let dex = await new Roll(`3d6`).roll();
let con = await new Roll(`3d6`).roll();
let int = await new Roll(`3d6`).roll();
let cha = await new Roll(`3d6`).roll();
let wis = await new Roll(`3d6`).roll();

let klass = await game.tables.getName("Class").draw();

actor.update({ 
  "system.abilities.str.value": str.total,
  "system.abilities.dex.value": dex.total,
  "system.abilities.con.value": con.total,
  "system.abilities.int.value": int.total,
  "system.abilities.cha.value": cha.total,
  "system.abilities.wis.value": wis.total,
});

actor.updateSource();

ChatMessage.create({
    content: "Welcome to the...<br/><br/> I N F I N I T E D U N G E O N<br/><br/> " + name
});

ChatMessage.create({
    content: "Apply your level up based on the rolled class by dragging it onto your charactersheet. If you are presented with a choice, you _MUST ROLL_ to determine the choice unless you have a trait which says otherwise. Reroll duplicates."
});
