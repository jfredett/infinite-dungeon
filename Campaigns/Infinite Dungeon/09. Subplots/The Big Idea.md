TTRPGs (many of them, and all that I have tried) have an economy problem. We have a one-way flow of resources from GMs to Players. GM pulls encounter out of thin air, fills it with loot, the players defeat it, they get the loot, it goes back into the aether when they spend it.

This, broadly, sucks a bit. Personally, I never know quite how much is too much, and it's hard to have a sense of balance. [[Infinite Dungeon (System)]] is the attempt to provide some gamification around the resource management side of TTRPGs, in the same way the 5e is a combat system with some roleplaying mechanics attached, ID intends to be an inventory/resource management system with a slot designed for your favorite RPG.

The goal is fundamentally this:

1. Make Character Generation Extremely Simple, to encourage... rapid iteration on characters
2. When Characters Die, give the player a new resource, [[Fame]].
3. Make other resources simpler and _diegetic_, leading too [[Ducats]] for money and [[Vesper]] for experience.
4. Make lots of ways to spend the new resources to improve character generation

Or, more succinctly, turn every character into a pinata the player really wants to break open.

Consider 5e, which excellently mechanizes combat to the point that it isn't necessary to really think about it. The goal of ID is, on some level, to do the same with loot and rewards. This involves taking over several systems:

1. Inventory Management
2. Level Progression and Character Creation
3. Background/Downtime Projects

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "a7c24275-f3da-4ae7-8430-07c338d68a4c"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot The Big Idea"
    type: "creation"
    status: "proposed"
```