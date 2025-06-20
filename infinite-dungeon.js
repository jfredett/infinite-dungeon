import { UsageDieRollParser } from './usage-die-parser.js'; // if in separate file

Hooks.on("init", function() {
    console.log("Welcome to the I N F I N I T E   D U N G E O N");
});


Hooks.once('ready', () => {
  console.log("Infinite Dungeon | Registering custom UsageDieRollParser");

  // OPTIONAL: Expose to global for macro usage or debugging
  game.infiniteDungeon = {
    usageParser: new UsageDieRollParser()
  };

  // Example: override some global parsing behavior, or hook into chat
  Hooks.on("chatMessage", (chatLog, message, chatData) => {
    if (message.startsWith("/d ")) {
      const parser = new UsageDieRollParser();
      const expr = message.slice(3);
      parser.parse(expr).then(result => {
        ChatMessage.create({
          speaker: ChatMessage.getSpeaker(),
          content: `<p><strong>Usage Die Result:</strong><br>${result}</p>`
        });
      });
      return false; // Prevent default handling
    }
  });
});

