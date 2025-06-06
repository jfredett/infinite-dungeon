
# (from the basics wrt the GM's role) The GM

The GM's role is similar to other games, and indeed follows all the general rules and advice of whatever underlying system is in use (if not the one provided by _Infinite Dungeon itself_). Additionally, the GM is responsible for managing the total amount of resources in the system. [[04. Loot|Vesper, Ducats, and Fame]] are all "Inflationary" resources, which naturally reduce in value over time; this involves a little more bookkeeping than a typical game, but the result is much better control over the powerlevel of the game, including the ability to both _overpower_ players when you need to, and _depowering_ players after, all by managing the control of the various resources.
## (from the basics wrt orders/chargen) For the GM

Let's look at the broader scenario. In a long-running campaign, especially one that operates on a drop-in/drop-out "West Marches" style of play as is intended by _Infinite Dungeon_, it is likely that you will have at least as many Orders as there are players, if not more. Each order is self-contained, but since they are also likely to be highly specialized, you will find your players gaining lots of power quickly. Traits are designed through negotiation, and an important thing to manage is the inflating cost-to-use the traits players build; this can help reign in the power of any new trait. However, your characters should also be built using their own Orders, and those Orders are _built out of the same traits_ that the players use, and most creation you do should come with a commensurate increase in the amount of resources you give players. This is fleshed out in more detail in the GM's Manual.


# from 02 traits



Activation cost is an anti-cheese mechanism, so the GM should generally try to reduce it to the smallest acceptable value. Fame spent on traits is not destroyed, it returns to the GM's account, and is then used to prepare more and/or higher difficulty content.

# from 04 travel / getting lost

There are three ways to manage this, you should switch between them periodically:

1. Choose a random adjacent hex it would make sense for the party to end up in, describe it as if nothing happened.
2. GM Rolls a d6 with every navigation check in secret, number adjacent hexes as you prefer, travel in rolled direction.
3. If it's a d20 check, take the value of the d20. If the value was <18, then take the value mod 6, if its 18+, they accidentally go the right way. This gives a slightly more forgiving chance to generally head in the right direction anyway, since their intended direction is represented by 5 possible values, and all unintended directions are represented by 3. It's handy if you forgot to roll the d6 and you don't want to choose by hand/all surrounding hexes are unexplored.


# Notes on encounter design.

Every system with at least damage/hp and some kind of action economy boils down to the following calculus:

- Ratio(s) of Expected Damage per Round per group of combatants
- Ratio(s) of Actions per Round per group
- Ratio(s) of HP to Expected Damage per round for each enemy.
- Derivatives of these functions

The first can be generally thought of as a 'DPS balance', values close to 1 mean that the overall damage output at the current stage is equally matched. Values larger than 1 indicate an advantage to the 'left' group and smaller to the 'right', this can be passed through some adjusting function and used to populate a graph of all combatant groups.

We can also consider this values "derivative" per combatant, per attack, etc. Selectively removing/abstracting the effect of the action in terms of damage, we can consider the effect of changing.

Action Ratio indicates a higher probability to turn the advantage. We can see this in the prior ratio 

HP to Expected Damage tells you roughly the number of rounds a combatant is likely to remain in the fight.

These could also be done per action (averaging across all possible actions)

I think a little monte carlo simulation might be interesting here as well

The gradient of whatever model is built is probably a pretty interesting thing to do dimension reduction to.

I suppose it might be possible to build this model in, e.g., SAGE, or even tensorflow, then do DR to it. It would be a presence vector (0/1) * a model of a specific class/gear loadout doing a specific action. Then you simulate across some subset of those presence vectors, but you can DR across all of them. 