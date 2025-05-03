
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
    desc: At the end of each turn, Flamespew rolls a d{CW,CCW} to determine which way to swing it's scythe next turn. Steam vents activate in the direction in which it will travel
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

- Spell To Hit: +7
- AC: 20
- HD: 17d8

- Firebolt is 1d10 + 5
- Flamejet is 3d6
- Cherry Bomb is 2d6 in a 15' radius, Save Dex for half

- Firebolts on after each PC's turn, targeting that PC
- On it's turn, cast Flame Jet on the PC with highest HP.
- On it's turn, on a won coinflip, launch a Cherry Bomb at the largest cluster of PCs
- After each turn, it rolls DC18, if it succeeds, it the flamescythe toward the steaming vents the floor. No need to
  be subtle about this, we want to teach the mechanic that the floor movement is not fixed, this will matter for higher
  difficulties.

### Heroic

- Spell To Hit: +9
- AC: 22
- HD: 20d8

- Firebolt is 3d10 + 5 w/ +7 to hit
- Flamejet is 6d6, cast at 2 targets, may split damage as desired before the to hit.
- Cherry Bomb is 6d6 in a 15' radius around a point. Save Dex for half

- Firebolts on after each PC's turn, targets the player who moved last
- On it's turn, cast Flame Jet on the two PCs with highest HP.
- On it's turn, on a won coinflip, launch a Cherry Bomb at the largest cluster of PCs

#### Scythe Movement:

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

### Mythic

- Spell To Hit: +12
- AC: 24
- HD: 25d8

- Firebolt is 5d10 + 5 w/ +7 to hit
- Flamejet is 12d6, cast at 3 targets, may split damage as desired before the to hit.
- Cherry Bomb is 8d6 in a 30' radius around a point. Save Dex for half

- 2 Firebolts on after each PC's turn, targets the player who moved last and the player with the least HP
- On it's turn, cast Flame Jet on the three PCs with highest HP.
- On it's turn, launch a Cherry Bomb at the largest cluster of PCs

#### Scythe Movement:

As in Heroic, but DC13 and 1d4-1 turns.
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
```
