// Give to targeted player
let fame_obj = {}
const DENSITY_OF_FAME = 100; // g/square

await Dialog.prompt({
    content: `
Fame amount: <input id="amt" type="number" value=1>
Fame size: <span><input id="x" type="number" value=1> x <input id="y" type="number" value=1></span>
`,
    callback: (html) => fame_obj = { 
      fame: html.find('input#amt').val(), 
      size_x: html.find('input#x').val(), // would be better to draw these from a table of pentominoes or w/e
      size_y: html.find('input#y').val() }, 
})


let weight = fame_obj.fame * fame_obj.size_x * fame_obj.size_y * DENSITY_OF_FAME / 1000; // grams
fame_obj.weight = weight;



let form = await game.tables.getName("IM-Form").draw({rollMode: CONST.DICE_ROLL_MODES.BLIND});
let desc = await game.tables.getName("IM-Descriptor").draw({rollMode: CONST.DICE_ROLL_MODES.BLIND});
let flavor = await game.tables.getName("IM-Flavor").draw({rollMode: CONST.DICE_ROLL_MODES.BLIND});
let name = desc.results[0].text + " " + form.results[0].text;

const data = [ {
  name: name, 
  type: "loot",
  folder: game.folders.getName("Fame"),
  system: {
    description: {
      value: flavor.results[0].text + "<br/><br/>Worth: " + fame_obj.fame + "m of fame, <br/><br/>Takes: " + fame_obj.size_x + "x" + fame_obj.size_y + "squares of inventory space."
    },
    weight: { value: fame_obj.weight, units: "kg" },
    type: { value: "Treasure" },
  },
}];
const created = await Item.implementation.create(data);

console.log(created);


// Print Item in Chat
/*
ChatMessage.create({
    content: created
});
*/
