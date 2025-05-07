
# Care of "Mystic Arts" on Youtube

https://www.youtube.com/@Mystic-Arts-DM

## Objective

1 Deathmatch
    - Fight to the Death (or Morale Save)
2 Stop the Ritual
    - Start a clock, bad things happen if it reaches zero!
3 Daring Escape
    - Run away! Call out a safe point and present overwhelming, insurmountable odds
        - Can become a last stand
4 Hold the Fort
    - Start a clock, good things happen if you can survive till it counts down
5 Waves of Bad Guys
    - A slowly escalating or constant stream of enemies -- find the source and stop them
6 Save the NPC
    - Someone is in danger, save them
7 Sabotage
    - The Enemy is entrenched/has a valuable emplacement, break it
8 Escort the Thing
    - We have something that needs to get somewhere safely to win the fight
9 Base Defense
    - This is our house, we will defend it
10 Yoink and Skedaddle
    - They have a shiny, we want a shiny, we get a shiny and run away
11 Peace Makers
    - If these people fight, we're all doomed. We can't let that happen.
12 The Arrest
    - They need to be stopped, we need to stop them.


## Combat Type

1 Skirmish
    - A plain old brawl
2 Ambush
    - We didn't see them, they came out of nowhere
3 Targeted Strike
    - We know where they are, they don't know we're here, let's make them regret that.
4 Horde
    - There are _so_ many bad guys
5 Elite Team
    - They're the best of the best. That's why there aren't many of them.
6 Stomping Ground
    - They will fall beneath our swords like so much wheat before the harvest.
7 Boss
    - The Big Bad
8 Puzzle, actually
    - The beatings will continue until you solve the riddle.



# TODOs

A script which tracks a weight table and uses an xorshift w/ a known seed, the weight table is used to generate a
random combat w a random objective, then I can up/downvote if I like it, and it will deweight the ones I reject,
deweight the ones I run, and do nothing to ones I skip. That way if I get a weird case ("Boss Peace Maker") which will
only make sense in a narrow narrative space, I can eventually get a weight table which should work, and I can tie the
seed to the hallway the players are currently in.

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "12d76409-31c7-4ba0-9df0-853dd91273b1"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Combat Type and Objective"
    type: "creation"
    status: "proposed"
```
