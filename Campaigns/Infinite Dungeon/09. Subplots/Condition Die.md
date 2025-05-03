__DRAFT__

This is a draft, more of a note than an actual subsystem

---------


# Item Condition and Resource Expenditure

ID is mostly about doing dungeons and getting cool loot, this leads to a problem of resource inflation, players will
soon how wardrobes full of old armors and such; this will not do, we must make room for new loot.

In _Black Hack_, there is the Usage Die. Essentially it's a dice chain that you descend as you 'use up' a resource. If
someone owes you a non-specific favor, you might use a usage die for that. In the original you would downgrade on a 1 or
2, and if you downgraded off the end, you lost the resource.

I am a sucker for a dice chain.

For finite resources like Arrows, Darts, etc -- the types of things where pedants would insist you say "fewer" and not
"less", as in, "Robin does not have less arrows than Little John, he has _fewer_" -- it's probably most precise and
maybe easiest to track directly by counting. Roll to recover recoverables, but generally where predictability is
possible it is worth optimizing for.

However, you might want to use a Resource die if the item is a _nonfinite_ resource. Charges on a wand, uses of a health
potion, etc.

Additionally, ID uses it for managine the equipment condition, which is how it will ultimately help manage the item
hoarding issue.

## Equipment Condition

Equipment is managed via condition die. Equipment is specifically the items in use and on your person, but not your coin
or vesper. This includes items in the backpack, items you're wearing, etc.

When you make significant use of your items, i.e., in combat, or in solving a puzzle, or in returning from an adventure,
roll your Condition die. on a 1, downgrade it.

Your default condition die is a d12, on the standard dice chain. This is 'normal' or 'good' condition, and comes with no
benefit or penalty.

When you downgrade, you take a penalty, one of:

-1 to hit
-1 damage dealt
-1 AC

You cannot take the same penalty twice. When you downgrade to a d4, take all of the penalties again. If you downgrade
from a d4, destroy a random item on your person, including weilded weapons or worn armor. When you have nothing left,
your condition die resets.

At downtime, you may attempt to repair and restore your armor. Roll against DCMax, on success upgrade your condition
die. You may aid this roll via the use of relevant tools or skills or the employ of NPCs or PCs with relevant tools or
skills.

You may additionally attempt to upgrade from `good` to improved die, a d14, d16, d18, and d20. When you do, you may add
one of the following bonuses:

+1 to hit
+1 damage dealt
+1 AC
+1 HD Temp HP on long rest

You may not take the same bonus twice. When your condition die downgrades, lose the associated bonus. If you lose a hit
die, you do not immediately lose the associated HP.

## How to Usage Die

Traditionally, usage die are any die on the change of normal polyhedral die. When rolled, on a chosen DC, 'downgrade'
the die to the next size in the chain, e.g., on a 1, downgrade from a D20 to a D12, etc.

More generally, you can roll DCx on an x-sided die, and on a success downgrade the die by setting `x` to be some value
less than `x`. On a modern VTT, you can happily roll any arbitrary sided die, so much of ID is built around a simple
descend-by-one-face model.

This makes it easy to know how long a particular item will last by noting that a X-sided usage die will have a 1/X
chance of downgrading, meaning you just need to solve:

    (1 - 1/x)^n = 0.05

Solving for `n` will give you the number of uses before a downgrade happens with 95% probability. The values from a d1
to d20 are:


 | size | 95%  | 80%  | 50%  |
 | ---- | ---  | ---  | ---  |
 | 2    | 4.3  | 2.3  | 1.0  |
 | 3    | 7.4  | 4.0  | 1.7  |
 | 4    | 10.4 | 5.6  | 2.4  |
 | 5    | 13.4 | 7.2  | 3.1  |
 | 6    | 16.4 | 8.8  | 3.8  |
 | 7    | 19.4 | 10.4 | 4.5  |
 | 8    | 22.4 | 12.1 | 5.2  |
 | 9    | 25.4 | 13.7 | 5.9  |
 | 10   | 28.4 | 15.3 | 6.6  |
 | 11   | 31.4 | 16.9 | 7.3  |
 | 12   | 34.4 | 18.5 | 8.0  |
 | 13   | 37.4 | 20.1 | 8.7  |
 | 14   | 40.4 | 21.7 | 9.4  |
 | 15   | 43.4 | 23.3 | 10.0 |
 | 16   | 46.4 | 24.9 | 10.7 |
 | 17   | 49.4 | 26.5 | 11.4 |
 | 18   | 52.4 | 28.2 | 12.1 |
 | 19   | 55.4 | 29.8 | 12.8 |
 | 20   | 58.4 | 31.4 | 13.5 |

In general, for an `x` sided die, then after `n` rolls you should expect a downgrade with `p` likelihood

    n = log(1-p)/log(x-1/x)

So the traditional usage dice chain would have a 95% chance to fully degrade after `58.4 + 34.4 + 22.4 + 16.4 + 10.4 =
142` uses. This is a little misleading, since it essentially expects 5 low-probability events to occur together. Some
simulation can help here. See [[script/usage-die-probabilities.rb]], but tl;dr:

standard die time-to-degrade (95, 80, 50 ptiles)

| size | 95% | 80% | 50% |
| ---- | --- | --- | --- |
| 2    | 5   | 3   | 1   |
| 3    | 8   | 4   | 2   |
| 4    | 11  | 6   | 3   |
| 5    | 14  | 8   | 4   |
| 6    | 17  | 9   | 4   |
| 7    | 20  | 11  | 5   |
| 8    | 23  | 13  | 6   |
| 9    | 26  | 14  | 6   |
| 10   | 29  | 16  | 7   |
| 11   | 32  | 17  | 8   |
| 12   | 35  | 19  | 8   |
| 13   | 38  | 21  | 9   |
| 14   | 41  | 22  | 10  |
| 15   | 44  | 24  | 11  |
| 16   | 47  | 25  | 11  |
| 17   | 50  | 27  | 12  |
| 18   | 53  | 29  | 13  |
| 19   | 56  | 30  | 13  |
| 20   | 59  | 32  | 14  |

black hack die (2-) ttd

| size | 95% | 80% | 50% |
| ---- | --- | --- | --- |
| 1    | 1   | 1   | 1   |
| 2    | 1   | 1   | 1   |
| 3    | 3   | 2   | 1   |
| 4    | 5   | 3   | 2   |
| 5    | 6   | 4   | 2   |
| 6    | 8   | 4   | 2   |
| 7    | 9   | 5   | 3   |
| 8    | 11  | 6   | 3   |
| 9    | 12  | 7   | 3   |
| 10   | 14  | 8   | 4   |
| 11   | 15  | 9   | 4   |
| 12   | 17  | 9   | 4   |
| 13   | 19  | 10  | 5   |
| 14   | 20  | 11  | 5   |
| 15   | 21  | 12  | 5   |
| 16   | 23  | 13  | 6   |
| 17   | 24  | 13  | 6   |
| 18   | 26  | 14  | 6   |
| 19   | 27  | 15  | 7   |
| 20   | 29  | 16  | 7   |

[ED: I think these might be wrong, the simulation is weird]

d20 chain on 1- time to fully degrade (95, 80, 50)

| size | 95% | 80% | 50% |
| ---- | --- | --- | --- |
| 20   | 11  | 6   | 3   |

d20 chain on 2- time to fully degrade (95, 80, 50)

| size | 95% | 80% | 50% |
| ---- | --- | --- | --- |
| 20   | 5   | 3   | 2   |



```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "ed7b20c1-a1bf-4838-8f32-7abbf71eed09"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Condition Die"
    type: "creation"
    status: "proposed"
```
