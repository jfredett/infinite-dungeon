A `Trait` is a specific modification to the chargen process for a specific player. 
# Structure of a Trait

A `Trait` has the following parts:

- Name, e.g., "Veteran"
- Description/"Rule-text":  "New Characters improve their hit die 1 step (e.g., d4 -> d6 -> d8, ...)"
- Cost: 1m
- Activation: 1m, compounding.
- Restrictions:
	- Applies to: 5e, PF2e
		``` XOR ```
	- Banned from: Dungeon World

This example shows a simple trait that allows characters of this [[Orders|Order]] to improve their hit die by one step (`d4 -> d6`, etc).  It costs 1 minute of [[Campaigns/Infinite Dungeon/09. Subplots/System/Fame|Fame]] to purchase, and requires spending an additional minute of fame at chargen to 'activate' the trait. This trait is marked with 'compounding', which means that every character that activates it doubles the cost of activation, resetting when a character skips activation. This is intended as a failsafe to prevent an accidental runaway powerspike. It may allow for one such character to get through, but judicious fame economy management can help a GM wrangle things back, and also gives bargaining chips to soften nerfs (remove compounding, or even the activation cost, of weaker traits in return for permanently refunding another).

Traits, by their nature, are open ended negotiations, it behooves all parties to remember part of the GM's job is maintaining balance, and therefore fundamentally any trait may be revoked by the GM for any reason, refund or no. These additional items are there to help ease the pain. Traits that break the game should be enshrined, the player who managed to find them should be granted additional fame and accolades, and their [[Orders|Order]] should be regaled for the triumph. The point of [[Infinite Dungeon (System)|Infinite Dungeon]] to some extent is to find fun ways to make deeply broken characters that can then be placed in the Great Hall and their stories told for many years to come. It is explicitly the opinion of this system that breaking the game is the point of the game.

After such accolades are provided, the GM should determine which traits need to be banned to avoid similar breakage, ban them, and return to play.

GMs, aim to have traits start with deliberate weaknesses/guardrails, but be liberal with disabling them for players/allowing rule bending here. The point of traits is to aid negotiation of the character creation process, in all reality, that process should have no fixed rules, it should always be a simple negotiation -- Traits are not a fixed, rigid system, it is an ongoing conversation about what _kinds_ of characters a player wants to play. In keeping with the old maxim, _Be a fan of your PCs_, you should be aiming to help them, and using traits to enable that while maintaining game balance and narrative motion.

Finally, Traits may be restricted-from/apply-only-to specific systems. Traits may be wildly different across systems, again -- it's a negotiation, so work through it.

## Example traits

```yaml
name: "Heirloom"
description: |
	For the next character generated; equip them with a simple magic item from a table approved by your GM. When they die, there is a chance (at GM discretion) the heirloom is lost. A subsequent character of this order may recover it to recieve it's benefits and half the Fame spent to create it, they are then subject to the same condition (loss on death, etc). If the item is not lost, no fame gain to the next character, but they get the weapon. If _another character_ (PC or otherwise) gets the heirloom, they do not gain the fame, but they do gain a copy of this trait to their order if they choose. If they destroy the item, they gain the fame, and this trait cannot be activated again. If you gain your vengenance, gain invested fame times the number of successful transfers to subsequent characters (by inheritance or recovery)
cost: 15m
activation: As described above
restrictions: none
chosen-item: Short Sword
item-table: SIMPLE_MAGIC_ITEMS
```

Here I'm just inventing some extra keys to notate the specific table, this may be generic or per character.

```yaml
name: Swap Die
description: |
	Gain an advantage die, you may swap this die with any die of equivalent size during chargen _once_, you may take this trait multiple times. Each time you gain either one additional swap, or one additional die. Once a die has been swapped, it _may_ be swapped again, but you may not exceed the total number of swaps.
cost: 1m, doubling per instance. (e.g., 1m + 2m + 6m for 3 instances)
upkeep: 0m for the first three, +1m compounding thereafter
restrictions: 
	applies-to: 5e, OSR-stuff.
	banned-from: Dungeon World (overpowered)
```

This is a strictly-better-than-advantage dice rolling. Since you get to choose where you use it, and you can use it to do some limited sorting (two instances is enough to turn a 3d6 from a 13 to an 18 if you're lucky). Note this doesn't affect the in-order roll component of this. The restrictions/bans here are also pretty freeform, the point isn't to be prescriptive, just to find interesting chargen mechanics; good traits should be let past an initial ban, bad ones should be restricted even if they were designed to apply. Err on the side of saying "Yes" if you can.

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "c0305948-7ee0-4c2e-94c6-6ace9c7c1fce"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Traits"
    type: "creation"
    status: "proposed"
```

[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]
[[Campaigns/Infinite Dungeon/09. Subplots/System/Infinite Dungeon (System).md|]]
[[Campaigns/Infinite Dungeon/09. Subplots/System/Guilds.md|]]
[[Campaigns/Infinite Dungeon/09. Subplots/System/Fame.md|]]