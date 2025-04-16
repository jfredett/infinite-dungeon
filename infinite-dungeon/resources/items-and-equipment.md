# Items, Equipment, Loot, and the like

Brennan Lee Mulligan once opined that the reason he used 5e was because it, to paraphrase, 'solved combat for him',
allowing for him to focus on the parts of the game that were more interesting to him, since combat was rich and varied
and well-handled by the system.

I have similar feelings, but no solution -- my problem isn't with combat, it's with loot. It is difficult to know how
much and what kind of loot to give to the party. I often want to provide them interesting objects for which I have yet
to have a use or mechanics. I want to represent value to them in a way more interesting than "There is 10,000gp in the
treasure horde" or whatever. I want to loot to be _interesting_, but also I don't ever want to think about it beyond
what is useful to me.

To that end, _Infinite Dungeon_ has it's own custom item management and loot generation tools. It already has more
resource types, but we need some way of calculating how much of it should be provided to the players after accomplishing
something worthy of a pile of loot.

For the most part, off-the-shelf generation tools for random encounters and the like should be fine, replace some amount
of the gold value with vesper, and off you pop.

## Weight and Space

A standard backpack is a 6x9 grid of 'slots'. Almost every item is a 1x1 or 2x1 (rotatable) 'block'. Items may be of
other sizes at the GM's discretion.

The purpose here is to manage encumberance via the slots.

Players in _Infinite Dungeon_ should also track weight of equipment using the system-local definitions. GMs should
adjust these weights if players have a hard time filling their pack, just add a blanket weight reduction spell on the
backpack or something.

If you prefer, _Infinite Dungeon_ offers it's own system that can be used independently.

### Weight

Identify the average _strength_ measurement in your system. The average individual can carry a total of 100kg of items.
This value needs to account for all worn and held items. Items have their normal, real-world weight associated with
them. Identify additionally the _standard deviation_ of strength among generated characters. Usually this corresponds to
the proficiency bonus associated with a strength stat. In 5e, the roll is 4d6k3, and the std deviation is +/- 3, the mean
strength value is 13, so characters with 10-16 Strength can carry 100kg. Characters with 16-19 strength can carry 20%
more, and an additional 20% for every 3 strength after (additive, for simplicity, so a 21 strength character can carry
140kg, not 144kg).

Similarly, weaker characters can carry less. I'd say the average out-of-shape Dad type (of which I have some passing
familiarity) could probably haul around 40kg without much trouble, 30kg if it's wiggling. So an adventurer, being
somewhat more in-shape than said Dad, could easily carry a bit more.

#### Table of common items forms and their weight ranges

   | Item               | Weight Range  | Examples                                                             |
   | ----               | ------------  | --------                                                             |
   | Pocket Weapon/Tool | 0.1kg - 1kg   | Pocketknife, brass knuckles, small baton                             |
   | Belt Weapon/Tool   | 0.5kg - 3kg   | Small axe/hatchet, long knife, cudgel, framing hammer                |
   | Short Weapon/Tool  | 2kg - 5kg     | Short Sword, Small Battleaxe, Buckler                                |
   | Long Weapon/Tool   | 4kg - 15kg    | Long Sword, Battleaxe, Small-Medium Shield                           |
   | Great Weapon/Tool  | 10kg - 30kg   | Claymore, Large Axe, Polearm, Large Shield                           |
   | Bag of Concrete    | 35kg          | Useful Reference Point                                               |
   | Clothing           | 1kg - 3kg     | This may vary much more if the player is in a very warm/cold climate |
   | Light Armor        | 3kg - 5kg     | Padded Armor, could be used for winter clothes as well.              |
   | Medium Armor       | 5kg - 15kg    | Leathers on the low end, Studded Leather/Mail Leather on the high    |
   | Heavy Armor        | 12.5kg - 40kg | Ring/Chain Mail - Full Plate                                         |

You can use this to estimate other objects, think of the size, add more if the material is heavy, make a guess. The
internet exists, these are real-world weight ranges, so you can just search for it.

## Generating Loot


# Disorganized Notes

Players have a backpack with some number of slots, every item takes up a slot and some amount of weight.

Speaking of, Every player has a Backpack. The standard backpack all adventurers start with is a 6x9 backpack. Common
items such as magic purses, rations, health potions, and simple tools (including torches) take up 1x1 slots. Weapons
(including wands, staves, etc) and armor are 2x1. Other items have shapes as dictated by the GM. You cannot carry what
you cannot fit in your backpack or hold in your hands. You may not strap any additional items to your pack, the slots
account for all such clever feats.

Players may carry an amount of weight based on their relevant stats, items, and so on. The GM should adjust the weight
of things to align with their chosen system, the values given here may be used with the weights given in this document.

Weight is the primary means by which to avoid the 'rob a whole vault into your pocket' problem, a better way may be
preferable, maybe just a hard wallet limit like LoZ?

----

For custom encounters/raids/etc, the structure is inspired by WoW. Each boss of a raid has a small loot pool and drops
items for roughly 25% of the party (1-2 items in a party of 6). These items should be rolled from the boss pool. Boss
pool items are tailored to serve at least two classes, ideally very different classes (A magic sword that a fighter can
use as a +1 Long Sword, and the Wizard can use as a spell focus and gives them a free cast of some spell), and they all
are worth a reasonable amount of Fame (depending on the difficulty of the boss, you should raise the amount of fame
relative to the number of times they have failed to defeat the boss).

For the end boss of a raid, you should reward closer to 40% of the party (2-4 items for a party of 6)

Bosses should also generate a small amount of Gold/Vesper and small Fame objects.

The goal should not to be to reward _more_ stuff, but _better_ stuff.
