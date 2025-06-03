## Summary 
The purpose of this area is to load Vesper that is delivered at the bottom of the map up to the top. The players enter from the midpoint. Ornithopters haul in large tanks to giant receptacles, smaller, six-legged robot-like creatures manage and connect these tanks, other similar creatures load smaller vessels and transport it to one of several ports where the tanks disappear into some assembly line.

Around these workers, larger versions with mandible-like protrusions coming from what you assume is their head pace and peer toward the players, observing intently, but not making any particular move or action towards them.

Each barrel contains {500mL, 1L, 2L, 5L} of Vesper (depending on difficulty). Which doesn't sound like a lot, but will do {4,8,16,40}d6 damage if breached.

All bots become hostile if:

1. The players attempt to steal any vesper
2. The players attempt to interfere with their work in any way
3. The players attempt to interact with the control panels

This can be bypassed if the players first went to the [[Skybridge]] and found [[Proper Identification]] and a [[Infernal Machine Uniform]] from the depth crawl. These will cause the various bots to assume the player is a member of the staff. They will prompt to scan the identification with a graphic on their CRT-tv-looking faces and upon successful scanning they will present a menu that can be interacted with to give them instructions. They will happily deliver as much Vesper as the players like to the front entrance, but if the players try to abscond with it, they will become immediately hostile and start to recklessly attack them and prevent them from the theft.

For every liter of vesper delivered, the IM will have additional fuel to spend in the fight later on.

The encounter itself is designed based on the following block (values in `{}` represent the value used in `{Intro, Normal, Heroic, Mythic}`, respectively):




```statblock
# config
layout: Basic 5e Layout
dice: false

# stats
name: Loading Docks (Area)
size: Room
ac: N/A
cr: 10
stats: [ 50, 1, 50, 1, 1, 2 ]
speed: "stationary"
damage_resistances: "All"
damage_immunities: "Immune to direct damage except where narratively appropriate"
condition_immunities: "All"
Weaknesses: "None"
saves:
  - dexterity: 0
  - strength: 15
  - constitution: 15
  - intelligence: 0
  - wisdom: 0
  - charisma: 1
hit_dice: "{50,75,100,150}d10"
hp: "{275,413,550,825}"
type: Architecture
legendary_actions:
  - name: Spawn Loaders
    desc: Spawn \{1,2,3,4\}d6 Loaders, rolling their hitpoints, subtract the total from this monster's hitpoints.
  - name: Spawn Defenders
    desc: Spawn \{1,2,3,4\}d3 Defenders, rolling their hitpoints, subtract the total from this monster's hitpoints.
```


One this 'encounter' monster 'dies' (runs out of HP), the deliveries stop, any remaining undelivered Vesper can attempt to be delivered by the remaining loaders, and once all remaining monsters are defeated the players are free to explore the aftermath. They find fame items and plenty of vesper to loot, but not a lot of money or magic items. The Ornithopters stop delivering as well, but whatever remains may be transferred to the other side. Record the total quantity of Vesper transported.

The goal of the encounter is to overwhelm the players with very weak enemies that are more or less uninterested in them. The Loaders attempt to load, and only defend themselves if explicitly attacked. They will otherwise aim to scuttle away and leave the work to the defenders. If there is no more work to do, they retreat.

## Statblocks


```statblock
name: Loader (I, N)
source: 5e SRD Hack
size: Large
type: construct
subtype: ""
alignment: unaligned
ac: 14
hp: 27
hit_dice: 3d10 + 4
speed: 30 ft.
stats:
  - 20
  - 9
  - 18
  - 3
  - 8
  - 1
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine
condition_immunities: charmed, exhaustion, frightened, paralyzed, petrified, poisoned
cr: 1
actions:
  - name: Slam
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: {10,14} (2d{4,8} + 5) bludgeoning damage."
  - name: Haste
    desc: "Until the end of its next turn, the loader magically gains a +2 to it's AC, has advantage on Dex throws, can use it's Slam attack as a Bonus Action, and increases it's movement by 10ft (3m)"
```
```statblock
name: Defender (I)
source: 5e SRD Hack
size: Large
type: construct
subtype: ""
alignment: unaligned
ac: 17
hp: 27
hit_dice: 3d10 + 15
speed: 30 ft.
stats:
  - 20
  - 9
  - 18
  - 3
  - 8
  - 1
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine
condition_immunities: charmed, exhaustion, frightened, paralyzed, petrified, poisoned
cr: 2
actions:
  - name: Slam
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d8 + 5) bludgeoning damage."
  - name: Haste
    desc: "Until the end of its next turn, the loader magically gains a +2 to it's AC, has advantage on Dex throws, can use it's Slam attack as a Bonus Action, and increases it's movement by 10ft (3m)"
```
```statblock
name: Defender (N)
source: 5e SRD Hack
size: Large
type: construct
subtype: ""
alignment: unaligned
ac: 17
hp: 27
hit_dice: 4d10 + 20
speed: 30 ft.
stats:
  - 20
  - 9
  - 18
  - 3
  - 8
  - 1
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine
condition_immunities: charmed, exhaustion, frightened, paralyzed, petrified, poisoned
cr: 2
actions:
  - name: Slam
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 5) bludgeoning damage."
  - name: Haste
    desc: "Until the end of its next turn, the loader magically gains a +2 to it's AC, has advantage on Dex throws, can use it's Slam attack as a Bonus Action, and increases it's movement by 10ft (3m)"
```

----

```ad-warning

Old notes

```

# Loading Docks

An open air section overlooks a massive sprawling network of pipes and widgets. These all coalesce to feed their
contents to great machines in the middle distance. tanks to the engine in the center of the facility. Buzzing, pilotless
ornithopters haul man-sized barrels to and fro, setting them down only to pick them up again. There are various pipes and
connection points here, all helpfully labelled, none of them in a language you know. With some effort, it can be worked
out that the fuel is not being delivered to the correct place, due to some obvious subsystem not being active. The
players can activate the subsystem in a few ways.

The easiest is an override button. There are three massive light fixtures, two green and one red. Beneath them are large
buttons. Press button, roll initiative as dozens of mechanical ants rush out to -- at first -- start moving the fuel
barrels, but upon noticing the players, blare a siren and start attaching.

Second is to activate them from the upper control room, this does not work/the players do not find this option until
they've done the ant encounter once.

The ornithopters can be _deactivated_ from the control room as well, this weakens the _Refuel_ phase of the boss
significantly. See the next section.

Everything in this room is explosive. When barrels of various chemical fuels explode, it does a Fireball-like
explosions. There are explosive barrels that roll into and through the room periodically via automation that is still
functional, these can cause chain reactions that continually occur, doing fireball like damage and knocking creatures
back proportional to how close they are to the center of the explosion.

Players are swarmed by the ant-bots, but there are different classes of them, some are soldier-type and directly attack
the players, some are swarmer type that crawl on the players and turn to acid, auto-hitting for small damage and
corroding armor, permanently reducing it's AC. If it hits bare skin, it reduces Constitution.

The players can simply escape the room, the bots will provide enough fuel to power the machine, but several ports are
blocked, and the bots won't bother to unblock them, simply walking up, then turning around. The players can attempt to
clear the debris either through attacks or skill checks. Skill checks are faster, but take an entire turn, reaction
included, if the player passes, the debris is clear.

The ant-bots never stop spawning.

Clearing this debris does several things:

1. If the players do nothing else, it makes the IM fight _harder_. IM uses the extra fuel to make all it's phases
   stronger, narrate the fuel flowing into the IM, bypassing a manifold or something.
2. If the players get to the skybridge, an obvious clue points them to enable some anti-fire emplacements that prevent
   the swinging fire arc and do some damage to the IM. Big sign showing a symbol for 'fire suppression', "There's a sign
   with a little flame and like, a little turret shooting something on it, a red light below it and an unthrown lever."
3. If the players dig around in the archives, they might find other helpful tools that the fuel can power, including
   whatever you like, but maybe something that extends the loot phase, etc. This can be discovered in the Control Room
   Section.

### By Mode

In Intro mode, the Ants are present, but they are 1-shottable and relatively benign, a swarm will kill a player, but
they pay less attention to them overall.

In Normal mode, as described above, should still be 1-2 shots per ant, but the attacks are deadlier, probably borrow a
clay golem block for this or something like

In Heroic, the ants (now "Red Ants") are stronger and tankyer, 3-4 shots to kill, does some lingering damage, maybe a con save against
painful poison, which gives them negative temporary hit points (lowers max health until cured/wears off after 1d4 hours)

In Mythic, the ants (now "Iron Ants") have the fire regen ability like Iron Golems, they are summoned by both Flamespew and IM to assist
them.


----

Stats

like golems, later like fire golems that heal from flame attacks. Relatively weak, on intro 4 should challenge a single
PC, normal 2-3, heroic 1-2, and mythic 1 should be a challenge for 1-2 players.

The swarm in, at least 2 per turn on all levels, but more as the challenge increases.


```RpgManager4
id: 
  type: "location"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "b9a2f53d-48cd-4b7a-b886-2431e1289301"
    priority: 1
    name: "Arena Design (10')"
    description: 
    status: "incomplete"
    type: "custom"
  - id: "1a4cd9ee-053f-4d32-a0ca-9faf4d1668a6"
    priority: 1
    name: "Arena Design (5')"
    description: 
    status: "incomplete"
    type: "custom"
  - id: "6f554c88-3e25-4189-9821-0ca090e516e2"
    priority: 1
    name: "Stat Block(s)"
    description: 
    status: "incomplete"
    type: "custom"
  - id: "4f72d08c-5653-40c0-98d0-92309e6a95b7"
    priority: 1
    name: "Encounter Design"
    description: 
    status: "incomplete"
    type: "custom"
```

[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]
[[Campaigns/Infinite Dungeon/05. Locations/Tower of the Mad Wizard/The Machineworks/The Infernal Machine.md|]]
[[Campaigns/Infinite Dungeon/09. Subplots/The Machineworks/The Machineworks.md|]]
[[Campaigns/Infinite Dungeon/02. Sessions/02. Tower of the Mad Wizard - S01 - Get Rich and Die Trying/Scenes/Raid the Tower.md|]]
[[Campaigns/Infinite Dungeon/02. Sessions/01. Prologue - S3 - I'm just a businessman, eh?/01. Prologue - S3 - I'm just a business man, eh?.md|]]
[[Campaigns/Infinite Dungeon/05. Locations/Tower of the Mad Wizard/The Machineworks/Skybridge.md|]]
[[The Infernal Machine]]