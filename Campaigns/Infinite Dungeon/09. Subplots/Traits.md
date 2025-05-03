A `Trait` is a specific modification to the chargen process for a specific player. 
# Structure of a Trait

A `Trait` has the following parts:

- Name, e.g., "Veteran"
- Description/"Rule-text":  "New Characters improve their hit die 1 step"
- Cost: 1m
- Activation: 1m, compounding.
- Restrictions:
	- Applies to: 5e, PF2e
		``` XOR ```
	- Banned from: Dungeon World

This example shows a simple trait that allows characters of this [[Orders|Order]] to improve their hit die by one step (`d4 -> d6`, etc).  It costs 1 minute of [[Fame]] to purchase, and requires spending an additional minute of fame at chargen to 'activate' the trait. This trait is marked with 'compounding', which means that every character that activates it doubles the cost of activation, resetting when a character skips activation. This is intended as a failsafe to prevent an accidental runaway powerspike. It may allow for one such character to get through, but judicious fame economy management can help a GM wrangle things back, and also gives bargaining chips to soften nerfs (remove compounding, or even the activation cost, of weaker traits in return for permanently refunding another).

Traits, by their nature, are open ended negotiations, it behooves all parties to remember part of the GM's job is maintaining balance, and therefore fundamentally any trait may be revoked by the GM for any reason, refund or no. These additional items are there to help ease the pain. Traits that break the game should be enshrined, the player who managed to find them should be granted additional fame and accolades, and their [[Orders|Order]] should be regaled for the triumph. The point of [[Infinite Dungeon (System)|Infinite Dungeon]] to some extent is to find fun ways to make deeply broken characters that can then be placed in the Great Hall and their stories told for many years to come. It is explicitly the opinion of this system that breaking the game is the point of the game.

After such accolades are provided, the GM should determine which traits need to be banned to avoid similar breakage, ban them, and return to play.

GMs, aim to have traits start with deliberate weaknesses/guardrails, but be liberal with disabling them for players/allowing rule bending here. The point of traits is to aid negotiation of the character creation process, in all reality, that process should have no fixed rules, it should always be a simple negotiation -- Traits are not a fixed, rigid system, it is an ongoing conversation about what _kinds_ of characters a player wants to play. In keeping with the old maxim, _Be a fan of your PCs_, you should be aiming to help them, and using traits to enable that while maintaining game balance and narrative motion.

Finally, Traits may be restricted-from/apply-only-to specific systems. Traits may be wildly different across systems, again -- it's a negotiation, so work through it.

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
