These rules are a combination of rules from Mystic Arts, a variety of hexcrawl books I have, and my own insane machinations.


# Maps and Scales

## Units

The primary unit of measurement is a League, which is the size of a single [[#Area Hexes|Area Hex]]. A party can easily cover 8 leagues (about 24mi) in a single day on good terrain or on roads, but 

## World Map

[[Eret]] is a big place, we are playing in a small part of it, but we may visit others. These are points in a big point-crawl map, each point of which is a [[#Region Hexes|Region]].
## Region Hexes

A Region is a 5x5 hexmap showing the overall terrain of a large region. Each hex in this map is 21mi, 35km, or 7 leagues across. The terrain shown in each hex is the majority terrain of the underlying [[#Area Hexes|Area]]

[[Upper Carpathia]] is an example of a Region.
## Area Hexes

An Area is a 7x7 hexmap showing a more detailed view of the local terrain. You'll find individual towns, dwellings, dungeons, and so on on this map.

[[Iskavi]] is an example of an Area.

# Travel Times:

One always travels an entire hex, even at the Regional scale. Follow the 'Entering a hex' rule from below.

| Terrain Type          | Travel time (Region) | Travel Time (Area) |
| --------------------- | -------------------- | ------------------ |
| Flat, open terrain    | 8h                   | 1h                 |
| Flat, hostile terrain | 16h                  | 2h                 |
| Lightly Forested      | 16h                  | 2h                 |
| Dense Forest/Jungle   | 32h                  | 4h                 |
| Swamp/Bog             | 32h                  | 4h                 |
| Hills                 | 32h                  | 4h                 |
| Mountains             | 64h                  | 8h                 |
| has Road?             | /2 time, minimum 1h  | ibid               |
# Navigating Hexes

## Entering

The party must always have a character _Scouting_.

The _Scout_ is responsible for making the initial Navigation check. This check may be any appropriate skill used by the Scout to navigate. The Scout is responsible for determining the party direction and while it is encouraged that they lead the party to a consensus location, only the GM and Scout communicate about the actual direction of the party and do so via secret message.

The Navigation check is done against a hidden DC set by the GM, it should correspond to how much the players know about the area, it's relative danger, etc. Generally less than DC20, more than DC10.

The party _should_ have a _Cartographer_, who is responsible for maintaining a map. The GM map _is not provided_ to players until they have _fully_ tamed an area hex (completing a significant number of quests/activities, etc).

When entering a new, unexplored Area from a Region, roll a Navigation check as normal, but place the party randomly inside a new Area map. It's good to have a couple of these keyed and at the ready, but you can always improvise things if you like. When they fail the navigation check, put them in a predicament immediately.
## Exploring

## Resting

```ad-note

This is heavily inspired by Mystic Arts' rules, with a bunch of tweaks by me.

```

A short rest can be taken once every 24 hours; it takes 8 hours. 6 hours must be spent sleeping, 2 hours can be for any light activity (a watch, chores, etc, no [[Projects]] except where allowed by the GM).

A long rest can only be done by taking:

1. 3 consecutive short rests in the same location with no interruption.
2. Resting in a known Safe Zone
	1. The [[Pleasantly Finite]] is one such safe zone.

Rests (short or long) are interrupted when:

1. You Roll Initiative for any reason
2. Casting a non-cantrip spell
3. Taking damage

Benefits from a rest apply _after the rest has been completed_, if you are interrupted, _you have not completed the rest_ and thus _recieve no benefits_.

## Getting Lost

When the Scout fails the navigation check, they may get lost. There are three ways to manage this, you should switch between them periodically:

1. Choose a random adjacent hex it would make sense for the party to end up in, describe it as if nothing happened.
2. Roll d6 with every navigation check in secret (I roll a physical die), number adjacent hexes as you prefer, travel in rolled direction.
3. If it's a d20 check, take the value of the d20. If the value was <18, then take the value mod 6, if its 18+, they accidentally go the right way. This gives a slightly more forgiving chance to generally head in the right direction anyway, since their intended direction is represented by 5 possible values, and all unintended directions are represented by 3. It's handy if you forgot to roll the d6 and you don't want to choose by hand/all surrounding hexes are unexplored.

## Trailblazing

When players arrive in a square they have been before, make a mark. Starting at DC20, subtract the number of marks and compare against passive perception. If there are notable features, or if a player remarks on notable features, subtract additional values from the DC. When the DC is <5, someone recognizes the hex, and the players simply know the area well enough to not need to navigate. All travel in this hex is 25% quicker. Does not stack with roads.

# Resources

There are two resources while crawling, time and provisions.

There are 24 hours in a day, this is split into 8 hour chunks. One of those chunks must be spent resting (or else take a point of Exhaustion or similar mechanic). 8 hours is generally the most that can be spent exploring before Exhaustion occurs, of the remaining 8 hours, 4 are spent doing daily personal activities (eating, making camp, general chores). The remaining time is free.

Players can spend any unspent time on any [[Projects]] they might have. Additionally they can spend time Foraging for Provisions, making an appropriate skill check. On a success, you cannot fail your provision check, on a fail, nothing happens.

Every day you must roll your Provisions Die. Well-equipped players start with a d10 provision die, and may spend extra foraging rolls to attempt to upgrade the die, or buy an upgrade from a vendor. The provision die is a [[Condition Die]] which degrades on a `2-` and upgrades when Foraging/Hunting on a critical success on that roll. A set of provisions may be shared by more than one player, but you _must roll_ for each player using the provisions. You roll provisions twice per day (once in the morning, once in the evening), if your characters skip a meal, CON save against a level of exhaustion. If you have not rolled provisions that day, you must roll your provisions die to see if any provisions have spoiled.

When your die degrades, you have some spoilt food, ruined equipment, or other narratively appropriate thing happen.



```

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "fd0a3415-2066-40d5-8841-21d3b6b051e2"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Hexcrawling"
    type: "creation"
    status: "proposed"
```

[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]