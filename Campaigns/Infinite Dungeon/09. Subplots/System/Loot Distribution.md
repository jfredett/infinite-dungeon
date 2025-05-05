When defeating an encounter, sum up the total XP of the encounter, then distribute as follows:

30% -> Fame Items per player. Your encounter should have a fixed amount of Fame-per-player already, so this is simply a tax.
20% -> Item Table Rolls, each item reduces the XP pool by some amount, any leftover goes into the ducats/vesper section
50% + spare -> Ducats and Vesper, 5 Ducats/XP, 1 Vesper/XP. `50 + (d20 - 10)`%  of the XP should be Ducats, the rest Vesper.

All items can then be distributed to players evenly.

## Example

Take a 10000XP encounter with the following Item Pool:

- A: 1000XP
- B: 500XP
- C: 100XP
- D: 200XP
- E: 600XP

`30% = 3000XP` is taxed,  `20% = 2000XP` is used for rolling from the table, so we roll 1d5 and subtract the total XP, let's say we roll a 1, 5, and a 2, then this generates _only two items_, `A` and `E`, then the roll of 2 would put us overbudget, so the remaining 400XP is added to the  `50% = 5000XP + 400XP = 5400XP`, which is split into `50 + (d20 - 10)`% piles, let's say for simplicity we roll a 50/50 split, then 2700XP is given as Vesper, and `2700*5 = 13.5k` Ducats are given to the party (1 Ducat is generally 1 unit of the smallest currency in the given system, so this is about 13gp)

```RpgManager4
id: 
  type: "subplot"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "90b934a3-2340-41f0-913f-521efe6c3296"
    priority: 1
    name: "Complete Subplot"
    description: "Complete Subplot Loot Distribution"
    type: "creation"
    status: "proposed"
```
