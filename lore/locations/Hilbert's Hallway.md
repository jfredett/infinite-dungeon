# Hilbert's Hallway


A long hallway, seemingly endless, but looping back to the start after reaching the end.

Players can enter a door, rolling on the `Door Effects` table or lead them to a subadventure/hook to another
adventure/encounter set piece.

The Hallway is part of Hilbert's Hotel, which is contained within the Infinite Dungeon. In fact, there are Infinitely
many different Hilbert's Hotels in the ID, and in each of them an infinite number of Hallways with an infinite number of
rooms. Each hallway is numbered with a prime, and each room is a prime power. The design of the room is persistent with
respect to that prime number. To generate a Hilbert's Hallway, first generate a large prime number, then use it as a
seed in the included script which uses a deterministic random number generator to accomplish this for you. You can also
use this to map the doors, if you like, but the door connections need not be persistent if the players don't bother to
map them.

See [[Hilbert's Hotel]] for details about the sorts of things you might run into in the Hallway.

## Door Effects

1. The Door leads to another door in the hallway, 3d20 doors away, you can flip coins to decide which way and which side
   of the hall the door leads to. The effect is persistent while in the room, but it's not necessarily reflexive (that
   is, if Door A leads to Door B, it is not necessarily the case that Door B leads to Door A)
2. Perform a `Go Deeper` in the Infinite Dungeon, the result is on the other side of the door.
3. Leads to a Save-or-Run Blindly event, if save, nothing happens and the danger is avoided.
4. You run into a Hotelier's cart with some luggage on it. You may loot it.
8. You run into a member or members of [[Hilbert's Hotel#The Staff]]
9. A door back to the Foyer of [[Hilbert's Hotel]]
10. A random hotelroom, bedroom, or other place of rest and relaxation, somewhere in the world.


