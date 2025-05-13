# Items, Equipment, Loot, and the like

Brennan Lee Mulligan once opined that the reason he used 5e was because it, to paraphrase, 'solved combat for him',
allowing for him to focus on the parts of the game that were more interesting to him, since combat was rich and varied
and well-handled by the system.

I have similar feelings, but no solution -- my problem isn't with combat, it's with loot. It is difficult to know how
much and what kind of loot to give to the party. I often want to provide them interesting objects for which I have yet
to have a use or mechanics. I want to represent value to them in a way more interesting than "There is 10,000gp in the
treasure horde" or whatever. I want to loot to be _interesting_ and I want it to represent _meaningful change_ to a
character, but also I don't ever want to think about it beyond what is useful to the narrative I'm trying to carve.

To that end, _Infinite Dungeon_ has it's own custom item management and loot generation tools. It already has more
resource types, but we need some way of calculating how much of it should be provided to the players after accomplishing
something worthy of a pile of loot. Using the resources the _ID_ provides, you can generate loot using standard OTS loot
systems, and then split the total value into actual items, vesper, and coin.

## Item types and Fame Items

Items are taken from the parent system whole-sale, you can also create custom items. Importantly, if using the _ID_ item
management system, you will likely need to assign a weight and a size to the item. Generally this will be a 1x1 or 2x1,
but for especially powerful or interesting items, you can give them differently shaped blocks, or impose adjacency
restrictions (don't put the bottled flame next to the lampoil).

Items can be mundane items like swords and bows, they can be simple magic items (+1 crossbow) or complex (A staff that
turns to a snake when you throw it to the ground). They can be cursed items (with the mechanics up to the GM), and
importantly they can also be "Fame Items"

Fame Items are items which have no mechanical value, but grant the owner bonus Fame while in possession of the item. For
instance, capturing the banner of an enemy faction would have little mechanical value, but would probably be a pretty
'famous' object, and various people and entities would want it and be willing to pay for it.

These items can be traded to willing NPCs for permanent fame, or gold, or vesper, or a mix of the three, but while
holding them the bearer has access to extra fame to use. If they chose to spend fame for temporary benefits, the fame
MAY be drawn out of the object itself. This _does not change it's value to NPCs_ -- it is now famous because _you used
it_, but it can't grant you any additional benefit. The exception is that a fame item expending it's last minutes of
fame will disintegrate and thus not be tradable.

Who you give the item too will also influence what you get for it. Selling a fame item to a trader gives you little fame
but may give lots of gold or vesper; donating it to a museum or institution of learning might give more fame but less
money. You might also find some NPCs who will trade for other items, really up to you.

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
| Clothing           | 1kg - 3kg     | This may vary much more if the player is in a very warm/cold climate |
| Light Armor        | 3kg - 5kg     | Padded Armor, could be used for winter clothes as well.              |
| Medium Armor       | 5kg - 15kg    | Leathers on the low end, Studded Leather/Mail Leather on the high    |
| Heavy Armor        | 12.5kg - 40kg | Ring/Chain Mail - Full Plate                                         |
| Bag of Concrete    | 35kg          | Useful Reference Point                                               |

You can use this to estimate other objects, think of the size, add more if the material is heavy, make a guess. The
internet exists, these are real-world weight ranges, so you can just search for it.

## Generating Loot

Loot can be generated using your standard system tools, your job is to replace some of that loot with vesper and fame.
Where normally a loot would be generated as something like:

1. Roll for gold for each creature
2. Tally up the experience that the players earned for defeating the encounter
3. Do some amount of rolling/work to turn the gold into gems, art objects or magic items
4. Distribute to players

Now the process is:

1. Roll for gold as before
2. Tally XP as before
3. Sum all of that into the `total reward`
4. Distribute as you see fit.

In particular, when players level up, they should get proportionally less XP for a session or so so they can settle into
their new level, then as players become bored, you can dial up the XP or Fame reward proportionally.

Rolling items on the ID Item tables will provide a 'reward cost', each Boss should have an item table, and there exist
generic encounter tables. These will generate various 'fame' objects, as well as both mundane and complex magic items.

You'll roll a number of items based on the number of players who have just defeated the boss. The remaining reward can
be split out into different types or optionally into 'lesser items' from the boss.


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

----

For tracking ammo, I might borrow an idea from the Black Hack -- the Usage Die. Essentially it's a dice chain that you
descend as you 'use up' a resource. If someone owes you a non-specific favor, you might use a usage die for that. In the
original you would downgrade on a 1 or 2, and if you downgraded off the end, you lost the resource.

It's intended for abstracting resources, and I like it for spaces where I would want to say 'less' instead of 'fewer' --
arrows you might as well just count, but charges on a wand seem like this, and especially _durability_ feels like this,
and that gives a natural sink to items for players.

I think I might experiment with durability die for items, I kind of like the idea of making it a little bit of tedium
for the players, tracking durabilities for every item is maybe overkill, but I think simplifying the system to something
like:

Roll `1d<Durability>`, on a 1, `Durability -= 1`, when durability is 0, the item is destroyed.

Alternatively, an 'equipment durability' die, when it downgrades you lose some AC, maybe at first you gain a bit? So
it's more of a condition die.

So if you spend time at camp taking care of your armor, roll and on `DC<20 - relevant-skill>` _upgrade_ the die. The
chain would be a simple D20,12,10,8,6,4. If your condition die is 20, then gain +1 AC, +1 to hit, or +1 damage at your
option. D12 you lose that, D10 is -1 AC, -1 to hit, or -1 damage at your option, ditto 8 and 6, on a d4 you take all
three again, and if you fail you lose a piece of equipment until can't lose anymore.


```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "4abe2ddc-551d-4ad2-94d7-3243727c9c7a"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Items and Equipment"
    type: "creation"
    status: "proposed"
```

[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]