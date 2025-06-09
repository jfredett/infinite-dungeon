
```RpgManager4
id: 
  type: "object"
  campaign: "Campaigns/Infinite Dungeon/Infinite Dungeon.md"
tasks: 
  - id: "a5d730b9-3cfa-4b29-a05a-6b82bf34452f"
    priority: 1
    name: "Macro"
    description: "Write Foundry Macro for all this"
    type: "creation"
    status: "proposed"
```
For Players:

> In the corner, you see a shelf filled with vials, flasks, flagons, baubles, and other containers with a variety of potions, tinctures, powders, pills, and other "medicinal" supplements. Above this shelf is a logo of a snake forming an ampersand, connecting the words "Dents" and "Dings". The prices seem quite reasonable, but a warning sits below the logo:
> 
> "Potions of unknown provenance, effect, and safety below, now on offer for the low price of {2d6}d each!"

Brave adventurers roll a d20 and 3d100 when purchasing a potion, the DM will describe it's appearance including information about the maker's mark and the potion's appearance itself. All potions are stored in transparent bottles and have arbitrary shelf-life while sealed, but will only last for `24d60 - 23` minutes after opening. Expired potions have no effects.


----

Use the following table to determine an effect of a dent-and-ding potion. D&D potions cost `2d6`, half on a CHA save, ducats each. When a player buys it, roll on the `Maker` table below to determine the brand and general appearance. It will instruct you on how to roll on the d100 table(s). Each roll follows a general pattern:

1. Determine the total number of effects (based on maker)
2. Determine what kinds of effects they have
3. Determine how each effect styles the potion.

For instance, the process might be like:

```
Roll d6, if the result is 4+, the potion has two positive effects and a negative effect, the lower number positive effect determines the appearance, the higher the taste, and the negative effect the smell.
If the result is 3, the potion has one positive, one negative, one weird, and choose appearance/taste/smell in order accordingly
if the result is 2-, the potion has 1 positive, two negatives, and choose taste/smell according to the lesser die roll.
```

Each maker is consistent, but two makers can make the same potion without having the same appearance, effect, etc.

| d100 | Positive Effect                                                            | Negative Effect                                                                        | Weird Effect                                                                | Appearance                                                              | Taste                                                    | Smell                                      |
| ---- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------ |
| 1    | You gain darkvision 60 ft. for 1 hour.                                     | You are frightened of the next creature you see for 1 minute (DC 13 Wis save negates). | You can speak fluent goat for 1 hour.                                       | Milky white with floating silver specks that orbit slowly.              | Sweet like overripe plums.                               | Wet earth after a thunderstorm.            |
| 2    | You can understand all spoken languages for 10 minutes.                    | Disadvantage on all Wisdom checks for 1 hour.                                          | Your skin turns bark-like and creaks when you move.                         | Deep crimson, thick as syrup, with gold veins that pulse faintly.       | Bitter as wormwood.                                      | Smoked paprika and old leather.            |
| 3    | Gain resistance to cold damage for 1 hour.                                 | You shed bright light in a 20 ft. radius for 10 minutes — no way to dim it.            | You taste in colors and smell in numbers.                                   | Murky green with tiny leaves drifting slowly inside.                    | Thick and salty, like blood.                             | Garlic-heavy stew simmering in a cauldron. |
| 4    | You heal 2d4 + 2 hit points over the next minute.                          | You become poisoned for 1 hour (no damage, just condition).                            | You can hear plants whispering, but they mostly gossip.                     | Looks like candle wax melting and reforming.                            | Smoky, like pine tar.                                    | Beeswax and wildflowers.                   |
| 5    | Your skin hardens slightly; +1 AC for 10 minutes.                          | You are unable to speak any language for 1 hour.                                       | You float 1 inch off the ground and bob like a balloon.                     | Jet black, absorbs all light near it.                                   | Sour as fermented cabbage.                               | Dried blood and burnt feathers.            |
| 6    | You can speak to birds until dawn.                                         | Your movement speed is halved for 10 minutes.                                          | You involuntarily sing everything you say (no spellcasting disruption).     | Clear with tiny bubbles that pop with tiny sparks.                      | Sharp and citrusy, like lemon and vinegar.               | Rotten wood in a damp forest.              |
| 7    | You are immune to poison for 1 hour.                                       | You fall prone unless you succeed on a DC 10 Dex save.                                 | A spectral fish swims in the air around your head — harmless, lasts 1 hour. | Pale lavender mist swirling in liquid form.                             | Cloying and floral, like eating perfume.                 | Old incense and iron.                      |
| 8    | You glow softly, shedding 10 ft. of light for 1 hour.                      | You forget the last hour of your life.                                                 | You are surrounded by harmless illusory moths.                              | Oily yellow with a greasy rainbow sheen.                                | Earthy, like raw beets pulled from the soil.             | Coal smoke and pine resin.                 |
| 9    | You gain advantage on Insight checks for 1 hour.                           | You become vulnerable to one random damage type for 1 hour.                            | Your shadow detaches and mirrors your actions independently.                | Transparent with a coiled hair inside (still writhes).                  | Cold and clean, like melted snow.                        | Crushed mint and hay.                      |
| 10   | You gain +5 movement speed for 1 hour.                                     | Your AC decreases by 2 for the next 10 minutes.                                        | You grow tiny antlers; they remain permanently unless removed.              | Looks like melted bone and fog.                                         | Rich and spicy, like mulled wine.                        | Faint lavender and candle soot.            |
| 11   | You have advantage on one saving throw of your choice (use within 1 hour). | Your Strength score is reduced by 2 for 1 hour (minimum 1).                            | You swap voices with the nearest creature for 10 minutes.                   | Glows faintly blue when shaken, goes dim when still.                    | Musty, like a damp cellar.                               | Moldy bread and mushrooms.                 |
| 12   | You can breathe underwater for 1 hour.                                     | You take 1d6 psychic damage as disturbing visions cloud your mind.                     | You smell strongly of mushrooms for 24 hours.                               | Appears solid until uncorked, then instantly liquefies.                 | Sweet and medicinal, like cough syrup.                   | Sulfur and hot stone.                      |
| 13   | You can jump three times your normal distance for 1 hour.                  | You hiccup small fire sparks uncontrollably (1d4 fire to flammable objects).           | When you speak, your words appear as glowing runes in the air.              | Swirling violet with dancing motes like fireflies.                      | Faintly metallic, like licking a copper coin.            | Ashes from a hearth long cold.             |
| 14   | The next time you drop to 0 HP, you're instead at 1 HP.                    | You cannot cast spells with somatic components for 10 minutes.                         | Your reflection acts 2 seconds out of sync.                                 | Murky brown with something that looks like an eye suspended inside.     | Hot and peppery, burns the tongue.                       | A whiff of grave soil and violets.         |
| 15   | You emit a calming aura; allies within 10 ft. have advantage vs. fear.     | You are blinded for 1 minute (DC 15 Con save ends early).                              | Your tears are tiny gemstones (1 copper each, vanish after 24 hours).       | Translucent green that hisses faintly when uncorked.                    | Creamy and bland, like goat’s milk.                      | Pickled cabbage and vinegar.               |
| 16   | You always know true north for 24 hours.                                   | All spoken words come out reversed for 10 minutes.                                     | All of your clothing turns plaid.                                           | Thick red liquid with golden flakes that never settle.                  | Sour milk with a hint of cinnamon.                       | Warm honey and sweat.                      |
| 17   | You can cast *Mending* at will for 1 hour.                                 | Disadvantage on your next three ability checks.                                        | You grow a third eye on your forehead; it’s cosmetic but blinks.            | Smoky black swirls move on their own inside pale green fluid.           | Ash and honey.                                           | Copper coins and singed hair.              |
| 18   | You are immune to exhaustion for 8 hours.                                  | Your hands become spectral and can’t interact with physical objects for 1 minute.      | You can whistle like a nightjar, which scares wolves.                       | Shifts color every few seconds, never the same hue twice.               | Faintly briny, like seaweed or sweat.                    | Wild garlic blooming in spring.            |
| 19   | Gain advantage on Dexterity checks for 1 hour.                             | You smell of sulfur; disadvantage on Stealth for 1 hour.                               | You can smell lies for 10 minutes, but they smell like rotting milk.        | Looks like molten bronze, sloshes slowly.                               | Tastes like stale bread and iron.                        | Cat fur and crushed berries.               |
| 20   | Re-roll one failed ability check in the next hour.                         | You attract undead within 300 ft. for 1 hour (DM’s discretion).                        | Your voice echoes as though in a cave, no matter the surroundings.          | A cloudy gray fog that rolls like a thunderhead inside the bottle.      | Bubbly and sweet, like fermented apple soda.             | Charred herbs and dried blood.             |
| 21   | You smell like spring air; friendly beasts are non-hostile.                | Your spell save DC is reduced by 2 for 10 minutes.                                     | A halo of buzzing bees follows you, but they don't sting.                   | Yellow liquid with floating teeth-shaped lumps.                         | Burnt sugar and clove.                                   | Damp wool and moldy straw.                 |
| 22   | Detect undead within 60 ft. for 10 minutes.                                | You become frightened of magical light sources for 10 minutes.                         | Your feet leave glowing footprints for 1 hour.                              | Clear with one tiny fish that vanishes when drunk.                      | Like chewing on old leather.                             | Faint perfume and grave dust.              |
| 23   | Move silently for 10 minutes.                                              | You gain a level of exhaustion.                                                        | You gain minor telekinesis (can lift objects up to 5 lbs) for 10 minutes.   | Glittering copper dust suspended in murky white.                        | Faintly savory, like broth without salt.                 | Burned herbs and pine needles.             |
| 24   | Levitate 1 inch off the ground, ignoring difficult terrain.                | You’re deafened for 1 hour.                                                            | A tiny spectral bear cub follows you around for 1 day.                      | Bubbling violently but cold to the touch.                               | Sickly sweet and syrupy.                                 | Rotten eggs and wet stone.                 |
| 25   | Understand all written languages for 1 hour.                               | Your hit point maximum is reduced by 1d4 for 24 hours.                                 | You can speak backwards fluently, and sometimes do so unintentionally.      | Pale gold, emits warm light in a 5 ft. radius.                          | Bright and herbal, like fresh nettle tea.                | Mildew and tallow candles.                 |
| 26   | Immune to night-blindness.                                                 | Your next attack roll automatically misses.                                            | You gain the *Mage Hand* cantrip, but the hand looks like a frog's foot.    | Green liquid that fizzes like soda.                                     | Tastes like cold fog.                                    | Ozone before a storm.                      |
| 27   | Voice becomes melodic; +2 to Performance checks.                           | You fall asleep for 1 minute unless you succeed on a DC 12 Con save.                   | Your voice causes nearby flowers to bloom.                                  | Looks like liquefied shadow, tendrils coil toward glass.                | Bitter almonds and crushed stone.                        | Old paper and dried ink.                   |
| 28   | Mimic any voice or sound for 10 minutes.                                   | Your armor rusts slightly — -1 AC until repaired.                                      | Your sneeze casts *Prestidigitation*.                                       | Blood-red, forms words on the glass when shaken.                        | Tastes like fresh basil and fear.                        | Wet leaves and iron nails.                 |
| 29   | Your touch mends cracked or broken stone.                                  | Your voice turns into an annoying buzz; disadvantage on Persuasion for 1 hour.         | All coins on you turn into leaves (still worth the same).                   | Deep purple, but becomes pink under moonlight.                          | Smoked paprika and vinegar.                              | Ashwood smoke and honeycomb.               |
| 30   | See through solid objects (1 ft.) for 10 minutes.                          | You become cursed: you cannot benefit from healing magic for 10 minutes.               | Your shadow dances when you hear music.                                     | Colorless but thicker than water, pours in slow motion.                 | Sharp as pickled onion.                                  | Rosewater and burnt meat.                  |
| 31   | Your next ranged attack automatically hits.                                | Your weapon becomes nonmagical for 1 hour.                                             | Your breath fogs even in warm air and smells like cinnamon.                 | Vibrant orange with floating eye-shaped seeds.                          | Chalky and bland.                                        | A strong horse barn after rain.            |
| 32   | Invisible to vermin for 1 hour.                                            | You float 1 ft. in the air, but can't move normally — speed is 0 for 1 minute.         | You randomly switch to a Transylvanian accent for 1 hour.                   | Silvery foam that never quite settles.                                  | Fruity and artificial, like children’s candy.            | Smoked meat and dried apples.              |
| 33   | Temporary proficiency in Herbalism Kit.                                    | All coins on your person scream when touched.                                          | All nearby cats suddenly like you — a lot.                                  | Dense black ichor with bright yellow pinpricks.                         | Tastes of hot bread and soot.                            | Stale ale and forgotten cellars.           |
| 34   | Immune to cold weather effects.                                            | Your next Concentration spell automatically fails.                                     | You can see magic auras as glitter for 10 minutes.                          | Turquoise, with tiny jellyfish-like shapes swimming inside.             | Sharp, pungent garlic with something... wrong.           | Dusty velvet and grave wax.                |
| 35   | All food you touch becomes purified.                                       | You lose the ability to read any writing for 1 hour.                                   | All small animals treat you as royalty for 1 day.                           | Transparent, but filled with tiny floating feathers.                    | Fizzy, like river rocks dissolving.                      | Licorice and burning linen.                |
| 36   | +2 to Nature checks for 1 hour.                                            | You glow with radiant light and are visible through walls to undead.                   | Your fingernails glow when danger is near.                                  | Smells of iron and old wood, faintly steaming.                          | Like dirt and rain.                                      | Milky sap and crushed bark beetles.        |
| 37   | Gain advantage on Initiative for next combat.                              | You are polymorphed into a sheep (as per the spell) for 1 minute (DC 15 Wis negates).  | A translucent hand claps whenever you finish a sentence.                    | Mud-brown sludge, moves on its own even at rest.                        | Tastes like roasted chestnuts and tobacco.               | Spilled wine and wet stone.                |
| 38   | Gain +1 Intelligence for 1 hour.                                           | You are silenced (as per *Silence*) for 10 minutes.                                    | For the next hour, all spoken language sounds like music.                   | Translucent violet with smoky tendrils curling upward.                  | Spicy and acrid, makes your eyes water.                  | Chimney soot and singed beard.             |
| 39   | Hear through 1-foot-thick walls for 10 minutes.                            | All potions on your person become water.                                               | You can read any language — but only if it’s written in chalk.              | Looks like liquid quicksilver — unnaturally reflective.                 | Bitter green walnut and honey.                           | Rust and stagnant pond water.              |
| 40   | Double movement speed for 1 minute.                                        | You become invisible to allies only — can't be targeted by beneficial effects.         | Every food item you eat tastes like borscht for 24 hours.                   | Red-orange with suspended ash motes.                                    | Flavorless — but leaves your tongue numb.                | Sweet decay and marigolds.                 |
| 41   | *Feather Fall* effect for 1 hour.                                          | Your weapon cries out in agony every time you swing it.                                | A mysterious wind constantly ruffles your hair.                             | Appears to contain a tiny thunderstorm.                                 | Like old cheese and rotten pear.                         | Faint brimstone and blackberries.          |
| 42   | Your next crafted item is flawless.                                        | You can’t regain hit points for 1 minute.                                              | A small bell rings whenever you lie.                                        | Clear blue liquid with ice crystals floating, never melting.            | Blueberries, pine, and ash.                              | Goat hair and smoked cheese.               |
| 43   | Nails glow faint blue; +1 Arcana checks.                                   | Your next short rest provides no benefits.                                             | Your tongue turns blue and you speak with a lisp.                           | Yellow fluid with buzzing fly wings trapped inside.                     | Like strong black tea mixed with ink.                    | Rotten fruit and midnight air.             |
| 44   | Immune to magical illusions for 10 minutes.                                | You are vulnerable to psychic damage for 10 minutes.                                   | Your voice changes to mimic that of someone you recently met.               | Frosted glass contains glowing honey-like fluid.                        | Oily and stale, like cooking grease.                     | A child’s toy chest left in an attic.      |
| 45   | Speak to trees for 10 minutes.                                             | You have disadvantage on all Dexterity saving throws for 10 minutes.                   | You speak in rhyme for 1 hour.                                              | Smells faintly of ozone and charred leaves.                             | Like biting into a cold onion.                           | Sweat-soaked linen and bay leaf.           |
| 46   | Instinctively identify herbs and poisons for 1 hour.                       | You randomly teleport 10 ft. in a random direction (roll d8) each turn for 1 minute.   | You leave wet footprints even on dry ground.                                | Pink fizzing liquid with foam that tries to escape.                     | Taste of hot iron and stale wine.                        | Moldy parchment and dried cloves.          |
| 47   | Thunderous voice once per use (120 ft. audible).                           | You become illiterate for 1 hour.                                                      | Every time you snap your fingers, faint sparkles appear.                    | Black with shifting constellations moving across its surface.           | Like smoked sausage — very specific and odd.             | Burnt honey and spoiled cream.             |
| 48   | Glowing blood; count as celestial for 1 hour.                              | Every creature within 10 ft. hears you as if you’re shouting.                          | You smell like a thunderstorm.                                              | Muddy green with the consistency of mashed peas.                        | Honey and sawdust.                                       | Dusty bones and dried figs.                |
| 49   | Instantly cure one disease.                                                | You are cursed to always speak in riddles for 24 hours.                                | Your laughter echoes with the voices of a choir.                            | Clear with rainbow sheen — tastes like metal.                           | Like licorice left in a musty drawer.                    | Sun-dried hay and animal musk.             |
| 50   | Regain 1 spent hit die.                                                    | You uncontrollably mimic the voice of the last person who spoke to you.                | You hum involuntarily while concentrating.                                  | Crimson mist trapped under clear liquid.                                | So sweet it makes your teeth hurt.                       | Rainwater on stone and sulfur.             |
| 51   | Ask the DM 1 yes/no question (divine inspiration).                         | You cast *Minor Illusion* involuntarily whenever you speak.                            | Your reflection waves at you independently.                                 | Pale gray with coiling shapes like smoke under glass.                   | Like dust and old candle wax.                            | Damp ash and bitter herbs.                 |
| 52   | Advantage on Constitution saves for 1 hour.                                | You grow small horns — no effect, but people may react poorly.                         | When casting a spell, butterflies erupt from your sleeves.                  | Glowing red, faintly pulses like a heartbeat.                           | Like sour cherries soaked in vinegar.                    | Leather boots and candle grease.           |
| 53   | Magical +1 unarmed strike once.                                            | You are slowed (as per the *Slow* spell) for 1 minute (DC 14 Wis negates).             | You sprout harmless glowing mushrooms on your shoulders.                    | Yellow-orange liquid that glows when danger is near.                    | A strange mix of burnt cinnamon and snow.                | Sweet pipe smoke and burning sage.         |
| 54   | Next social check counts as a 15.                                          | You hear whispers in your head that distract you (disadvantage on Concentration).      | You speak with the voice of a child for 1 hour.                             | Slime green and sparkles like mica.                                     | Very spicy, then immediately cold.                       | Chalk dust and cold metal.                 |
| 55   | Sense magical currents or ley lines nearby.                                | You become translucent; disadvantage on Charisma checks.                               | All candles within 30 ft. flare up when you enter a room.                   | Thick, viscous black goo with swirling flecks of bone-white.            | Like salted mushrooms and coal smoke.                    | Rotten meat and sour wine.                 |
| 56   | Find the safest path instinctively.                                        | Your skin peels slightly — purely cosmetic, but horrifying.                            | Your shadow randomly poses dramatically.                                    | Frosted green glass with frost on the inside.                           | Sour cream and pickled egg.                              | Salt pork and ashes.                       |
| 57   | Leave no tracks for 1 hour.                                                | Your nose grows 6 inches; disadvantage on Stealth.                                     | You develop a harmless but itchy phantom tail.                              | Soft pastel liquid that turns dark when observed.                       | Tastes like moonlight and pine needles.                  | Wild thyme and muddy boots.                |
| 58   | Emit firelight glow in darkness.                                           | Your clothes become permanently damp.                                                  | You gain an extra (illusory) finger on each hand.                           | Pale blue fog swirls in an otherwise empty bottle.                      | Burnt herbs and old sweat.                               | Moldy oranges and camphor.                 |
| 59   | Next door or lock opens without a check.                                   | You see all creatures as skeletons for 1 minute.                                       | You can speak fluently with toads.                                          | Looks like smoke underwater.                                            | Rich and gamey, like venison stew.                       | Crisp snow and old pine.                   |
| 60   | Sense invisible creatures for 1 minute.                                    | Your feet stick to surfaces — speed is reduced by half.                                | A tiny illusory rain cloud appears over your head, raining only on you.     | Appears solid obsidian until uncorked.                                  | Sour apple and fermented dough.                          | Bread oven and burnt flour.                |
| 61   | Cannot be grappled or restrained for 10 minutes.                           | You become afraid of fire, magical or otherwise.                                       | You can summon the smell of pine forest once per day.                       | Transparent except for a swirling rune at the center.                   | Tastes like frozen metal.                                | Musty blankets and dried sweat.            |
| 62   | Slowed heartbeat; advantage on Stealth.                                    | You speak in a long-dead language no one understands.                                  | Your reflection sometimes winks at you.                                     | Glass appears cracked from within — not actually damaged.               | Like sap and ironwood.                                   | Faint perfume masking rot.                 |
| 63   | Your next failed saving throw becomes a success.                           | Your reflection winks at you and then vanishes.                                        | You have a second heartbeat that’s audible when it’s quiet.                 | Bubblegum pink with scent of meat.                                      | Warm like broth, but bitter like old herbs.              | Damp cellar and ancient mildew.            |
| 64   | A spectral lantern floats near you for 1 hour.                             | You are mute for 1d4 hours.                                                            | Every book you touch flutters its pages like wings.                         | Clear fluid with a glowing rune that floats and spins.                  | Tastes like wet stones.                                  | Sunflower oil and iron filings.            |
| 65   | Commanding voice; +2 Intimidation checks.                                  | All food tastes like ash for 24 hours.                                                 | Your ears stretch slightly and twitch like an elf’s.                        | Glows faint green and emits faint whispers when shaken.                 | Tastes like candle wax and rose petals.                  | Apple cider gone sour.                     |
| 66   | Detect lies for 1 minute.                                                  | You grow fur and cannot wear armor properly for 1 hour.                                | You glow like a firefly when scared.                                        | Murky red with floating bone fragments.                                 | Oily with a touch of nutmeg.                             | Wax seal smoke and crushed rose petals.    |
| 67   | Radiate protection; allies get +1 AC for 1 round.                          | You gain the *Confused* condition (as *Confusion* spell) for 1 round.                  | You gain the ability to hover 6 inches for 1 minute — only when you sneeze. | Golden syrup with delicate runes etched inside the liquid.              | Tastes like sadness and licorice.                        | Juniper berries and singed goat wool.      |
| 68   | Advantage on Survival checks for 24 hours.                                 | You gain a fear of magic items for 1 hour.                                             | Your hair floats upward like you’re underwater.                             | Appears empty but sloshes when shaken.                                  | Cold, minty, and oddly emotional.                        | Faint lavender and sickly sweetness.       |
| 69   | Immune to scrying for 1 hour.                                              | Your spell slots cost double to cast for the next hour.                                | Your footprints shimmer faintly for 10 minutes.                             | Smells of roses, but looks like swamp water.                            | Like cobwebs and lavender.                               | Wet fur and wine vinegar.                  |
| 70   | Shout once to knock small creatures prone (10 ft.).                        | You can’t use bonus actions for 10 minutes.                                            | Your clothes change color every hour.                                       | Softly glowing amber with suspended threads of silver.                  | Black currant and grave soil.                            | Copper blood and peppercorn.               |
| 71   | Not affected by difficult terrain for 1 hour.                              | All creatures you meet think you’re lying.                                             | You hear eerie violins in the distance — no one else does.                  | Deep green with floating thorns.                                        | Bland and forgettable — you forget it instantly.         | Bone marrow stew and moldy basil.          |
| 72   | Auto-stabilize when dying.                                                 | You hallucinate that your hands are spiders.                                           | You can only speak in questions for 10 minutes.                             | Smoky pink fluid that tastes like salt and violets.                     | Dusty and sweet, like sugar left too long in a cupboard. | Overripe pears and clove.                  |
| 73   | Grow fangs; next bite deals +1d6.                                          | A haunting melody plays around you — can't be silenced.                                | Any food you touch for 1 hour tastes like raw onions.                       | Crimson wine that bubbles gently.                                       | Burnt wood and bitter almond.                            | Ice, fur, and woodsmoke.                   |
| 74   | Shadow guides around traps for 1 hour.                                     | You hiccup loudly every time you cast a spell.                                         | Your pupils become cat-like and glow in the dark.                           | Fluorescent yellow and slightly warm to the touch.                      | Like dandelion sap and old parchment.                    | Burnt feathers and owl pellets.            |
| 75   | Radiant smile; +2 Persuasion.                                              | Your eyes turn to marble — blinded until cured.                                        | You randomly swap eye color with someone nearby.                            | Thick indigo jelly with bubbles that never rise.                        | Savory like roast meat but clearly artificial.           | Grave mold and wild honey.                 |
| 76   | Cannot lie, but truths are charming.                                       | You feel as if something is behind you (paranoia).                                     | A third hand appears from your chest — only visible to you.                 | Feels colder than ice — turns to fog when poured.                       | Tastes like singing in a church.                         | Curdled milk and thyme.                    |
| 77   | No fall damage; always land on feet.                                       | You age 1d10 years.                                                                    | A small crow follows you silently for the next day.                         | Clear liquid that casts no reflection.                                  | Faint taste of milk and fear.                            | Sulfur, nettles, and old pews.             |
| 78   | Telepathy with one creature for 10 minutes.                                | You regress to a childlike mental state for 1 hour.                                    | Your tears run upwards.                                                     | Blood-colored with black veins swirling.                                | Earthy, with a long peppery aftertaste.                  | Dog breath and pickled beetroot.           |
| 79   | Reflect moonlight in your eyes; +2 Navigation.                             | You gain vulnerability to force damage for 1 hour.                                     | You hear distant howling even when indoors.                                 | Pale fluid that clings to the sides of the bottle.                      | Thick, bitter, and earthy, like mushroom broth.          | Burnt paper and candle wax.                |
| 80   | Whistle tune summons local bird.                                           | Your touch extinguishes nonmagical flames.                                             | You can see 10 seconds into the past, but only when confused.               | Dark blue with flashes of lightning in it.                              | Sparkling and sweet like plum wine.                      | Lavender soap and old iron keys.           |
| 81   | Protective breeze blocks one arrow.                                        | You constantly sweat cold blood.                                                       | You are surrounded by the faint sound of bells.                             | Green fluid with bubbles shaped like skulls.                            | Tastes like coal and regret.                             | Rancid butter and nettle tea.              |
| 82   | Glow when undead are nearby (30 ft.).                                      | You can’t willingly move closer to clerics for 1 hour.                                 | You leave a trail of faint frost wherever you walk.                         | Translucent gold with slow-moving swirls like sand.                     | Medicinal and bitter, but oddly refreshing.              | Oily wool and dried chamomile.             |
| 83   | Silent footsteps for 1 hour.                                               | Your laugh echoes unnaturally and frightens animals.                                   | You randomly smell campfire smoke.                                          | Appears as liquid glass, refracting light strangely.                    | Like boiled cabbage and sweat.                           | Carpathian plum brandy and moss.           |
| 84   | Smell of incense; +2 Religion checks.                                      | You shed a layer of skin like a snake.                                                 | You forget the word for "left" for 24 hours.                                | Liquid darkness — dim light nearby flickers.                            | Overripe peaches and blood.                              | Cooked garlic and smoldering peat.         |
| 85   | +1 to your next attack roll.                                               | You develop a forked tongue (disadvantage on speech).                                  | You whistle constantly when breathing through your nose.                    | Smells of earth after rain, glows when poured on stone.                 | Strong horseradish and ghost pepper.                     | Smoked herring and dried dill.             |
| 86   | Spectral herbalist gives advice.                                           | All attempts to lie fail — you blurt the truth.                                        | You cannot feel your own heartbeat (still functions normally).              | Thin, silver fluid that leaves no trace on surfaces.                    | Cold wine, hot pepper, and distant thunder.              | Beeswax polish and rust.                   |
| 87   | Scratch-resistant skin (immune to thorns).                                 | You are haunted by a minor spirit (DM’s discretion).                                   | You grow long eyebrows that sway dramatically.                              | Pale yellow with swirling black ink spirals.                            | Like berries from a bush that shouldn’t exist.           | Wild mushrooms and rotting wood.           |
| 88   | Auto-pass next Concentration check.                                        | You dream of being buried alive next time you sleep.                                   | Your clothes occasionally ripple like they're underwater.                   | Looks like ink mixed with fireflies.                                    | Like eating the scent of old wood polish.                | Animal fur and scorched rosemary.          |
| 89   | Blink 5 ft. once as bonus action.                                          | You cannot close your eyes for 1 hour.                                                 | Your nose glows red when you lie.                                           | Glowing green with illusionary eyes staring out.                        | Fresh parsley and baked clay.                            | Tanned leather and clove cigarettes.       |
| 90   | Always land on your feet.                                                  | Your shadow moves independently.                                                       | You glow faintly under moonlight.                                           | Clear, but smells of burning pine and old coins.                        | Tastes like grief and wild strawberries.                 | Horse sweat and autumn leaves.             |
| 91   | Touch unjams a stuck mechanism.                                            | You scream uncontrollably for 1 round.                                                 | All liquids you touch briefly turn to mist.                                 | Coppery liquid with ghostly faces floating in it.                       | Like pond water with a hint of rosemary.                 | Freshly dug earth and crushed basil.       |
| 92   | Clothes self-repair over 1 hour.                                           | You gain a false memory that contradicts party history.                                | When you speak, your lips don’t move.                                       | Fizzes gently and smells like ancient tombs.                            | Tastes like you just told a lie.                         | Cold ash and fennel.                       |
| 93   | Your next spell is silent (no verbal component).                           | You taste nothing but metal and rot.                                                   | You taste metal every time someone casts a spell nearby.                    | Swirls of fog constantly churn in the sealed vial.                      | Cold garlic soup and raw coin.                           | Dry hay and singed oak leaves.             |
| 94   | +1 to History checks (ancestral memory).                                   | You smell strongly of wet dog.                                                         | You’re trailed by harmless fireflies.                                       | Icy blue with tiny frost patterns on the inside of the glass.           | Sour cherry and scorched wheat.                          | Anise, soot, and must.                     |
| 95   | Detect nearest spring within 1 mile.                                       | You are turned upside-down (gravity-reversed) for 1 minute.                            | Your shadow flinches when you’re startled.                                  | Milky with a floating blood-red core.                                   | Buttered bread with something unsettling.                | Sour ale and wood varnish.                 |
| 96   | Hum repels rodents and insects.                                            | Your hair falls out and regrows rapidly in a cycle.                                    | A small bell tolls whenever you roll a natural 1.                           | Emits gentle harp music when shaken.                                    | Like you’re being watched by a tree.                     | Onion, vinegar, and pine tar.              |
| 97   | +1 save vs. enchantment.                                                   | You can only crawl for 1 minute.                                                       | You feel like you're being watched — and might be.                          | Black with stars inside — looks like a vial of night sky.               | Like moth wings and hot wax.                             | Elderflower, vinegar, and bone dust.       |
| 98   | Spectral wolf companion (cosmetic).                                        | Your next successful attack does 0 damage.                                             | You glow green while sneaking (dim light).                                  | Viscous orange-red liquid with spicy scent.                             | Bitter as betrayal.                                      | Musty tome pages and rat musk.             |
| 99   | Cast *Druidcraft* at will for 1 hour.                                      | You radiate necrotic energy — plants wither around you.                                | You can't say your own name for 1 hour.                                     | Glows blue under moonlight only.                                        | Bright and citrusy, like orange zest and danger.         | Burning grass and bitter cherry bark.      |
| 100  | Evil creatures instinctively avoid you.                                    | You forget how to use one weapon you’re proficient with for 1 day.                     | You speak in the voice of an old Carpathian grandmother.                    | Appears ordinary until opened — then changes to match user’s eye color. | Completely tasteless — unnervingly blank.                | Nothing at all — unnervingly scentless.    |

```yaml
makers:
  - name: Baba Zmeya
    mark: "Serpent eating its tail in a pot"
    description: "Reclusive forest witch; brews cure and curse alike in tangled batches."
    algorithm:
      die: d6
      results:
        1:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        2:
          effects: ["positive", "weird", "negative"]
          appearance: "positive"
          taste: "negative"
          smell: "weird"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "higher positive"
          smell: "negative"
        4:
          effects: ["positive", "positive", "weird"]
          appearance: "lower positive"
          taste: "higher positive"
          smell: "weird"
        5:
          effects: ["weird", "negative", "negative"]
          appearance: "lowest negative"
          taste: "weird"
          smell: "highest negative"
        6:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
  - name: Petre of Sibiu
    mark: "Seven-pointed wax seal"
    description: "Austere ex-inquisitor; his brews are judgmental, balanced, and a little cruel."
    algorithm:
      die: constant
      results:
        default:
          effects: ["positive", "weird", "negative"]
          appearance: "negative"
          taste: "weird"
          smell: "positive"
  - name: Birch Twins
    mark: "Two twigs bound in red thread"
    description: "Cheerful roadside witches who finish each other’s brews and curses."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        2:
          effects: ["positive", "positive", "weird"]
          appearance: "weird"
          taste: "lower positive"
          smell: "higher positive"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "negative"
          smell: "higher positive"
        4:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
  - name: Old Man Moroz
    mark: "Black flake on white circle"
    description: "Glacial hermit. Says his potions are 'cold truth, no comfort.'"
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        2:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "higher positive"
          smell: "weird"
        3:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
        4:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: Sister Draja
    mark: "Crow on a crescent moon"
    description: "Nun who guards the graveyard; her brews echo the dead."
    algorithm:
      die: d6
      results:
        1:
          effects: ["negative", "negative", "weird"]
          appearance: "lowest negative"
          taste: "weird"
          smell: "highest negative"
        2:
          effects: ["positive", "negative", "weird"]
          appearance: "negative"
          taste: "weird"
          smell: "positive"
        3:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
        4:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "higher positive"
          smell: "negative"
        5:
          effects: ["positive", "positive", "weird"]
          appearance: "lower positive"
          taste: "weird"
          smell: "higher positive"
        6:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
  - name: Marku the Brined
    mark: "Barrel with squid arms"
    description: "Sea-cave hermit. Potions taste like brine, dreams, and loss."
    algorithm:
      die: d6
      results:
        1:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        2:
          effects: ["positive", "weird", "negative"]
          appearance: "positive"
          taste: "weird"
          smell: "negative"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "negative"
          smell: "higher positive"
        4:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        5:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
        6:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: Irina Vatra
    mark: "Flame blooming from a rose"
    description: "Noblewoman-turned-alchemist; specializes in passion and control."
    algorithm:
      die: d8
      results:
        1:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "highest positive"
          smell: "weird"
        2:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        4:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        5:
          effects: ["weird", "weird", "positive"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        6:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        7:
          effects: ["negative", "negative", "positive"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        8:
          effects: ["negative", "weird", "weird"]
          appearance: "lowest weird"
          taste: "weird"
          smell: "highest negative"
  - name: Cosmin & Co.
    mark: "Snail with trailing stars"
    description: "Wandering merchant duo; their potions are slow to activate but memorable."
    algorithm:
      die: d4
      results:
        1:
          effects: ["weird", "weird", "positive"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        2:
          effects: ["positive", "weird", "weird"]
          appearance: "weird"
          taste: "positive"
          smell: "second weird"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        4:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
  - name: Alin the Whisper
    mark: "Black hand with open eye"
    description: "Urban alchemist whose potions whisper secrets when opened."
    algorithm:
      die: d6
      results:
        1:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "highest weird"
          smell: "negative"
        2:
          effects: ["weird", "positive", "negative"]
          appearance: "positive"
          taste: "weird"
          smell: "negative"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "higher positive"
          smell: "negative"
        4:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        5:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        6:
          effects: ["negative", "negative", "positive"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: Grandma Lupka
    mark: "Herb bundle tied with hair"
    description: "Trusted herbalist of the people. Her brews are strong and homey."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        2:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "weird"
          smell: "highest positive"
        3:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        4:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: The Emberborn
    mark: "Cracked sun with a glowing core"
    description: "Charismatic fire-witch whose brews ignite body and spirit."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "negative", "weird"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        2:
          effects: ["positive", "positive", "negative"]
          appearance: "lower positive"
          taste: "higher positive"
          smell: "negative"
        3:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        4:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
  - name: Masha of the Lake
    mark: "Water lily pierced by a needle"
    description: "Lives on a floating hut; makes potions that feel like dreams."
    algorithm:
      die: d4
      results:
        1:
          effects: ["weird", "weird", "positive"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        2:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "weird"
          smell: "highest positive"
        3:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        4:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: Vasile the Haggler
    mark: "Crossed coins beneath a rose"
    description: "Shady market dealer; his potions come with a price beyond money."
    algorithm:
      die: d6
      results:
        1:
          effects: ["negative", "negative", "negative"]
          appearance: "lowest negative"
          taste: "middle negative"
          smell: "highest negative"
        2:
          effects: ["negative", "negative", "weird"]
          appearance: "lowest negative"
          taste: "weird"
          smell: "highest negative"
        3:
          effects: ["negative", "weird", "weird"]
          appearance: "lowest weird"
          taste: "weird"
          smell: "highest negative"
        4:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        5:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        6:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
  - name: Albrecht the Kindly
    mark: "Open palm holding a sprig"
    description: "A former healer turned alchemist with a gentle touch."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        2:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "weird"
          smell: "highest positive"
        3:
          effects: ["positive", "negative", "weird"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        4:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
  - name: Mad Petro
    mark: "Jagged lightning bolt on a skull"
    description: "Erratic and bold; his potions are wildcards."
    algorithm:
      die: d6
      results:
        1:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        2:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        4:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "higher positive"
          smell: "weird"
        5:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        6:
          effects: ["negative", "negative", "negative"]
          appearance: "lowest negative"
          taste: "middle negative"
          smell: "highest negative"
  - name: Helena of the Hollow
    mark: "Moon with a crack"
    description: "A mysterious figure who works in twilight, crafting subtle potions."
    algorithm:
      die: d4
      results:
        1:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
        2:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        3:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        4:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
  - name: Fyodor the Stoic
    mark: "Stone face cracked in half"
    description: "A mountain hermit known for no-nonsense brews with steadfast effects."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        2:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        3:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        4:
          effects: ["weird", "negative", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest negative"
  - name: Sanya of the Twilight Glade
    mark: "A silver fox amid shadowy leaves"
    description: "Forest witch whose potions dance between charm and danger."
    algorithm:
      die: d6
      results:
        1:
          effects: ["positive", "weird", "negative"]
          appearance: "weird"
          taste: "positive"
          smell: "negative"
        2:
          effects: ["positive", "positive", "negative"]
          appearance: "lowest positive"
          taste: "negative"
          smell: "highest positive"
        3:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        4:
          effects: ["weird", "weird", "positive"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        5:
          effects: ["negative", "negative", "positive"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        6:
          effects: ["weird", "negative", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest negative"
  - name: The Gilded Widow
    mark: "A spider web dripping with gold"
    description: "Exquisite and deadly, her potions promise fortune or fatal folly."
    algorithm:
      die: d4
      results:
        1:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "weird"
          smell: "highest positive"
        2:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        3:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        4:
          effects: ["weird", "weird", "negative"]
          appearance: "lowest weird"
          taste: "negative"
          smell: "highest weird"
  - name: Old Yara
    mark: "A cracked bone tied with red thread"
    description: "A shaman of forgotten rites, crafting potions steeped in ancient spirits."
    algorithm:
      die: d6
      results:
        1:
          effects: ["weird", "weird", "weird"]
          appearance: "lowest weird"
          taste: "middle weird"
          smell: "highest weird"
        2:
          effects: ["positive", "weird", "weird"]
          appearance: "lowest weird"
          taste: "positive"
          smell: "highest weird"
        3:
          effects: ["positive", "positive", "weird"]
          appearance: "lowest positive"
          taste: "weird"
          smell: "highest positive"
        4:
          effects: ["positive", "positive", "positive"]
          appearance: "lowest"
          taste: "middle"
          smell: "highest"
        5:
          effects: ["positive", "negative", "negative"]
          appearance: "lowest negative"
          taste: "positive"
          smell: "highest negative"
        6:
          effects: ["negative", "negative", "negative"]
          appearance: "lowest negative"
          taste: "middle negative"
          smell: "highest negative"


```