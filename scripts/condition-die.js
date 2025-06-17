let dice_chain = [
    "d4", "d6", "d8", "d10", "d12", "d20"
];
let params = await Dialog.prompt({
    content: `size: <input id="size" value="" type="text"><br/>downgrade:<input id="downgrade" type="text" value="1">`,
    callback: (html) => dummy = { size: html.find('input#size').val(), downgrade: html.find('input#downgrade').val() }
});
let size_idx = dice_chain.find((e) => e == params.size);

let roll = await new Roll(`${params.size}`).roll();
if (roll.total <= params.downgrade) {
    if (size_idx == 0) {
        ChatMessage.create({
            content: "Usage die exhausted!"
        });
    } else {
        ChatMessage.create({
            content: `Downgrade to ${dice_chain[size_idx - 1]}`
        });
    }
} else {
    ChatMessage.create({
        content: "Usage die unchanged"
    });
}


// usage-die.js

/**
 * Rolls a usage die with syntax: UD<X, Y-, Z+>
 * @param {string} input - The usage die command (e.g. "UD<d8, 2-, 8+>")
 * @returns {Object} result info and chat message string
 */
function rollUsageDie(input) {
  const regex = /UD<\s*(d\d+)\s*(?:,\s*(\d+)-)?\s*(?:,\s*(\d+)\+)?\s*>/i;
  const match = input.match(regex);

  if (!match) {
    return { message: `⚠️ Invalid Usage Die syntax. Use: UD<die, downgrade-, upgrade+>` };
  }

  const die = match[1];
  const downgradeThreshold = match[2] ? parseInt(match[2]) : null;
  const upgradeThreshold = match[3] ? parseInt(match[3]) : null;

  const dieSize = parseInt(die.slice(1));
  const roll = new Roll(`1${die}`);
  roll.roll({ async: false });

  const rollResult = roll.total;

  let outcome = `🎲 <strong>${die}</strong> rolled: <strong>${rollResult}</strong>`;
  let nextDie = die;

  // Determine downgrade
  if (downgradeThreshold && rollResult <= downgradeThreshold) {
    nextDie = downgradeDie(die);
    outcome += ` 🔻 Downgrade to <strong>${nextDie}</strong>`;
  }

  // Determine upgrade
  if (upgradeThreshold && rollResult >= upgradeThreshold) {
    nextDie = upgradeDie(die);
    outcome += ` 🔺 Upgrade to <strong>${nextDie}</strong>`;
  }

  return {
    die,
    rollResult,
    nextDie,
    message: outcome
  };
}

const diceOrder = ["d4", "d6", "d8", "d10", "d12", "d20"];

function downgradeDie(current) {
  const idx = diceOrder.indexOf(current.toLowerCase());
  return idx > 0 ? diceOrder[idx - 1] : current;
}

function upgradeDie(current) {
  const idx = diceOrder.indexOf(current.toLowerCase());
  return idx < diceOrder.length - 1 ? diceOrder[idx + 1] : current;
}


// main.js
//
Hooks.once("init", () => {
  console.log("BlackHack Usage Die | Initializing");
});

Hooks.once("ready", () => {
  game.blackHackUD = {
    rollUsageDie
  };

  // Optional: Add UI chat command handler
  Hooks.on("chatMessage", (chatLog, message, chatData) => {
    if (!message.startsWith("/ud ")) return;
    const args = message.slice(4).trim();
    const result = rollUsageDie(args);
    ChatMessage.create({ content: result.message });
    return false;
  });
});


