# odin-battleships

Test driven development practice implementing the battleships game using javascript, jest, html and css.

[Live Link](https://www.google.com)

// WORK ON THE RECEIVE ATTACK LOGIC next ime

// game phase

    // first turn is random

    // player turn
        player selects a spot on the computers board (spot that has not been tried yet) 
        if its a hit  
            turn that square into a hit square
            update the states of player2s board and rendered board
            unallow clicking on the square another time
            check if that ship that was hit has sunk
            if it has sunk:

    // computer turn
        check if last turn was a hit
            // if it was try and hit an adjacent coordinate
        // check if the last two turns was a hit
            // if it was try and hit an adjacent coordinate in the same direction as the last two hits
        // otherwise pick a random one out of those that have not yet been attacked

once the final ship is placed the game will begin