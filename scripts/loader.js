Hooks.on("init", function() {
    console.log("Welcome to the I N F I N I T E   D U N G E O N");
});

Hooks.once("ready", () => {
  game.usageDie = {
    rollUsageDie
  };

  Hooks.on("chatMessage", (chatLog, message, chatData) => {
    if (!message.startsWith("/ud ")) return;
    const args = message.slice(4).trim();
    const result = rollUsageDie(args, false);
    ChatMessage.create({ content: result.message });
    return false;
  });
});


