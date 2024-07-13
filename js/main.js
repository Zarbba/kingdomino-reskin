/*

CONST
An array containing all the game tiles. (Tiles themselves will be objects I think)

LET
A player object for each player containing information like colour and board ID
A board object that tracks game state. I will need one of these for each player and it needs an ID that links to the player
An array that determines the order of the tile deck
An array that contains the available tiles (could also be a sub-array of deck. Might need to be an object)

Function
A render function to make the game state display. It will need to inteliigently determine player turn and display the appropriate board
An init function that takes player input and then creates the deck, determines first player and calls render
A turn/click function that calls all the helper functions for completing a turn and then render
A helper function for tile selection. It will need to update the tile display array to contain player order
A helper function for tile placement. It will need to understand how the dynamic board size works as well as placement rules
Some kind of gamestate check that checks remaining tiles for the end game state and behaves accordingly
I'll probably need more stuff but I can't think of anything right now

Event listeners
A click (accessibility? how do I make it work with keyboard. Need to investigate) for tile seleciton and placement

Cached elements
All the tiles will need to be cached or perhaps the tile display itself
Need to cache the board as well














*/