# 1-MAY-2025

## 1630

I had a minor disaster destroy chunks of my lab; I have yet to fully repair them. I am also moving all this to use
Obsidian (albeit I do plan to try the Obsidian-in-nvim), but the RPGManager plugin is too nice to pass up I think.

I plan to have it backed with a git repo so this should still see use, and I'll continue to use this repo for system
development as well.

## 1651

All imported and uploaded and such. Hopefully should help with organizing a bit.

# 11-MAY-2025

## 0006

I really don't plan on updating this too much, the LOG I mean. I usually do for projects like these, but the whole thing is like a LOG usually is. So I suppose this file is more redundant here than usual.

# 23-MAY-2025

## 1335

I'm starting to set up some export pipeline that will turn the Systems/Player's Guide into a PDF, probably just via
Pandoc for now? I need something I can distribute to players. I've got a `module.json` that I think will be install-able
by Foundry, I borrowed it from the community macros repo and modified it to point at stuff I'll control. The theory is
roughly that I'll:

1. Have a CI job that compiles the thing to a single document that I can load as a Journal, also packs up all my scripts
   and stuff.
2. When the VERSION changes, it generates a module.json with the right version and lets me update my local thing

Then I can happily chug away between sessions, then compile everything and update before I run a game.




