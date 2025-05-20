A raid ("Repeatable, Action-oriented, Interesting Dungeon") is a dungeon which is highly focused on a few boss fights, it is intended to be completed in a few sessions in any given 'instance', and focus heavily on movement mechanics and non-combat or even out-of-character problem solving.

Raids are additionally intended to be repeated, even farmed, by players. The goal is to mimic _World of Warcraft_ or similar MMORPG-style fights, but with the benefit that TTRPGs allow for much more freedom in tactics.

# Repeatability

Raids generally have around four flavors, using [[The Infernal Machine]] raid as an example:

1. Intro -- I'm using this as an intro to the mechanics of ID, so the first version is actually probably going to be
   'easy' by comparison. I'll pivot these fights to be on timers, and make most of the combat about movement and
    survival mechanics. The result will be a fixed amount of fame, xp, and gold taken; and without the end escape set
    piece.
2. Normal -- This is the experience as above, with the set piece and full mechanics, fights still have a timer, but it's
   an enrage timer. Killing during an enrage timer should give a Fame bonus.
3. Heroic -- A souped up version of the above, add more mechanics, increase damage output, increase health.
4. Mythic -- Absolutely unfair mechanics, death a certainty, tpk likely, overtune everything. Beating this -- even
   surviving it -- is an act of unbelievable fame.
# Requirements

Raids may have _requirements_ to enter various stages, they come in several standard flavors and whatever else your GM decides
## Simple Completion Requirements

These are any 'defeat X prior' type requirements, e.g., "Defeat the previous difficulty level" or "Be level 10" or whatever.
## Order-Fame

Some raids are unavailable until some amount of fame has been spent on the PC's [[Orders]], the fame is per player, but the total is per-party, so if a dungeon requires 75m of fame, that's 5 15m-orders, or 2 ~40m orders.
## Character-Fame

Similar to Order-Fame, this is Fame _currently acquired by the PC_, if you don't have sufficient Fame to meet the minimum, the _character_ is not allowed in. So a 15m requirement means the character must have 15m of unspent fame before entering.

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "e7a21fa3-b02b-4840-b104-0efdb5024882"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Raid"
    type: "creation"
    status: "proposed"
```
Higher levels of raids generally require some amount of invested [[Campaigns/Infinite Dungeon/09. Subplots/System/Fame]] or other narrative requirements if a raid is part of a larger adventure, this can be used to manage pace. As always, ignore rules you don't like.
[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]
[[Orders]]
[[Campaigns/Infinite Dungeon/09. Subplots/System/Fame]]e.md|]]
[[Campaigns/Infinite Dungeon/02. Sessions/02. Tower of the Mad Wizard - S01 - Get Rich and Die Trying/Scenes/Introduction]]
[[The Infernal Machine]]
[[Campaigns/Infinite Dungeon/01. Adventures/Climbing The Tower of the Mad Wizard/Chapters/The Machineworks]]