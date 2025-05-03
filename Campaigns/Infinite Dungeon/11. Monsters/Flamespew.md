
# Introduction

```statblock
# config
layout: Basic 5e Layout
dice: false

# stats
name: Flamespew (Intro)
size: Huge
ac: 19
cr: 7
stats: [ 25, 10, 25, 10, 10, 10 ]
speed: "stationary"
damage_resistances: "Cold, Radiant, Physical"
damage_immunities: "Fire, Necrotic"
condition_immunities: "Charmed, Grappeled, Frightened, Paralyzed, Petrified, Poisoned, Prone, Restrained"
Weaknesses: "Bludgening to stuff _around_ Flamespew, attacking parts of the arena itself"
saves:
  - dexterity: 5
  - strength: 7
  - constitution: 12
  - intelligence: 3
  - wisdom: 10
  - charisma: 10
hit_dice: 15d8 
hp: 172
type: Elemental
actions:
  - name: Steam Vent Activation
    desc: At the end of each its turns, Flamespew rolls a d{CW,CCW} to determine which way to swing it's scythe next turn. Steam vents activate in the direction in which it will travel
  - name: Wither
    desc: At the end of each of it's turns, it withers by 5d8. Flamespew dies if it has less than 10HP remaining.
  - name: Flame Jet
    desc: 1d10 Fire damage, +5 to hit, reach the whole arena.
legendary_actions:
  - name: Flame Jet
    desc: as the action, on a won coinflip each turn
  - name: Flame Scythe
    desc: Rotate a Wall of Flame in the currently indicated direction

```
## Strategy

- Firebolts on a won coinflip after each PC's turn, targeting that PC
- On it's turn, cast Flame Jet on the PC with highest HP.
- Does not use Cherry Bomb
- Each turn it rotates the scythe of flame toward the steaming vents the floor.
- Each turn it withers by 30% of remaining health. It dies at <5% remaining.

# Normal

```statblock
# config
layout: Basic 5e Layout
dice: false

# stats
name: Flamespew
size: Huge
ac: 20
cr: 8
stats: [ 25, 10, 25, 10, 10, 10 ]
speed: "stationary"
damage_resistances: "Cold, Radiant, Physical"
damage_immunities: "Fire, Necrotic"
condition_immunities: "Charmed, Grappeled, Frightened, Paralyzed, Petrified, Poisoned, Prone, Restrained"
Weaknesses: "Bludgening to stuff _around_ Flamespew, attacking parts of the arena itself"
saves:
  - dexterity: 5
  - strength: 7
  - constitution: 12
  - intelligence: 3
  - wisdom: 10
  - charisma: 10
hit_dice: 17d8 
hp: 182
type: Elemental
actions:
  - name: Steam Vent Activation
    desc: At the end of each of its turns, Flamespew rolls a d{CW,CCW} to determine which way to swing it's scythe next turn. Steam vents activate in the direction in which it will travel.
  - name: Flame Whip
    desc: 3d6 Fire Damage, +7 to hit, reach the whole arena.
  - name: Cherry Bomb
    desc: 2d6 in a 15' radius, save Dex for Half
legendary_actions:
  - name: Flame Jet
    desc: 1d10 + 5, +7 to hit, reach the whole arena
  - name: Flame Scythe
    desc: Rotate a Wall of Flame in the currently indicated direction

```

## Strategy

- Firebolts on after each PC's turn, targeting that PC
- On it's turn, cast Flame Jet on the PC with highest HP.
- On it's turn, on a won coinflip, launch a Cherry Bomb at the largest cluster of PCs
- At the beginning of combat, roll `d{Number of Players}`, Flamespew will activate it's Flame Scythe after this many turns have been taken. So if you roll `3`, then your turn + next players turn + next players turn, activate at the end of that players turn.
# Heroic

```statblock
# config
layout: Basic 5e Layout
dice: false

# stats
name: Flamespew (Heroic)
size: Huge
ac: 22
cr: 10
stats: [ 25, 10, 25, 10, 10, 10 ]
speed: "stationary"
damage_resistances: "Cold, Radiant, Physical"
damage_immunities: "Fire, Necrotic"
condition_immunities: "Charmed, Grappeled, Frightened, Paralyzed, Petrified, Poisoned, Prone, Restrained"
Weaknesses: "Bludgening to stuff _around_ Flamespew, attacking parts of the arena itself"
saves:
  - dexterity: 5
  - strength: 7
  - constitution: 12
  - intelligence: 3
  - wisdom: 10
  - charisma: 10
hit_dice: 20d8 
hp: 230
type: Elemental
actions:
  - name: Multiattack
    desc: Attacks the two PCs with the highest HP w/ Flame Whip
  - name: Steam Vent Activation
    desc: At the end of each of its turns, follow the 'Scythe Movement' below
  - name: Flame Whip
    desc: 6d6  Fire Damage, +7 to hit, reach the whole arena.
  - name: Cherry Bomb
    desc: 6d6 in a 15' radius, save Dex for Half
legendary_actions:
  - name: Flame Jet
    desc: 3d10 + 5, +7 to hit, reach the whole arena
  - name: Flame Scythe
    desc: Rotate a Wall of Flame in the currently indicated direction

```


## Strategy

- Firebolts on after each PC's turn, target is random

## Scythe Movement:

After every turn, check DC18, if pass, flip a coin, on heads, rotate the scythe CW, on tails, CCW. This takes 1d3 player
turns. For instance, if initiative is:

1. Flamespew
2. PC1
3. PC2
4. PC3

after PC1's turn, you pass DC18, and win the coinflip and roll a 1 on your number of turns. You start by at the end of
PC1's turn lighting the sigil, and at the end of PC2's turn you rotate the flame towards the sigil. It's telegraphed by
less than a whole turn.

The sigil should be different for each roll of the d3, your choice on how hard to telegraph the countdown.

# Mythic

```statblock
# config
layout: Basic 5e Layout
dice: false

# stats
name: Flamespew (Mythic)
size: Huge
ac: 24
cr: 14
stats: [ 25, 10, 25, 10, 10, 10 ]
speed: "stationary"
damage_resistances: "Cold, Radiant, Physical"
damage_immunities: "Fire, Necrotic"
condition_immunities: "Charmed, Grappeled, Frightened, Paralyzed, Petrified, Poisoned, Prone, Restrained"
Weaknesses: "Bludgening to stuff _around_ Flamespew, attacking parts of the arena itself"
saves:
  - dexterity: 5
  - strength: 7
  - constitution: 12
  - intelligence: 3
  - wisdom: 10
  - charisma: 10
hit_dice: 25d8 
hp: 287
type: Elemental
actions:
  - name: Multiattack
    desc: Attacks the two PCs with the highest HP w/ Flame Whip, casts a Cherry Bomb at the largest cluster of PCs
  - name: Steam Vent Activation
    desc: At the end of each of its turns, follow the 'Scythe Movement' below
  - name: Flame Whip
    desc: 12d6  Fire Damage, +12 to hit, reach the whole arena.
  - name: Cherry Bomb
    desc: 8d6 in a 30' radius, save Dex for Half
legendary_actions:
  - name: Flame Jet
    desc: 5d10 + 5, +12 to hit, hits 3 targets, reach the whole arena
  - name: Flame Scythe
    desc: Rotate a Wall of Flame in the currently indicated direction

```

## Strategy

- Two Firebolts on after each PC's turn, targets are random
## Scythe Movement:

As in Heroic, but DC13 and 1d4-1 turns.


----



```RpgManager4
id: 
  type: "monster"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "82a62d18-0ea2-42d4-ab03-6f415384b659"
    priority: 1
    name: "Complete Monster"
    description: "Complete Monster Flamespew"
    type: "creation"
    status: "proposed"
data: 
  description: "A tall, spindly, whirling flame coallesces out of various outlets in the floor of the room, finally conjoining into a\nwhite-hot flame elemental in the middle of the room. It swings a long hooked lash of flame and smoke around the room and\nover your heads, scything the air and leaving the stink of fuel and flame in your nose."
```

[[Campaigns/Infinite Dungeon/Infinite Dungeon.md|]]