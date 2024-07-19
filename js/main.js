// -----Constants-----
const tiles = [
{id: 1, leftMap: `y`, rightMap: `y`, leftScore: 0, rightScore: 0,},
{id: 2, leftMap: `y`, rightMap: `y`, leftScore: 0, rightScore: 0,},
{id: 3, leftMap: `dg`, rightMap: `dg`, leftScore: 0, rightScore: 0,},
{id: 4, leftMap: `dg`, rightMap: `dg`, leftScore: 0, rightScore: 0,},
{id: 5, leftMap: `dg`, rightMap: `dg`, leftScore: 0, rightScore: 0,},
{id: 6, leftMap: `dg`, rightMap: `dg`, leftScore: 0, rightScore: 0,},
{id: 7, leftMap: `b`, rightMap: `b`, leftScore: 0, rightScore: 0,},
{id: 8, leftMap: `b`, rightMap: `b`, leftScore: 0, rightScore: 0,},
{id: 9, leftMap: `b`, rightMap: `b`, leftScore: 0, rightScore: 0,},
{id: 10, leftMap: `pg`, rightMap: `pg`, leftScore: 0, rightScore: 0,},
{id: 11, leftMap: `pg`, rightMap: `pg`, leftScore: 0, rightScore: 0,},
{id: 12, leftMap: `br`, rightMap: `br`, leftScore: 0, rightScore: 0,},
{id: 13, leftMap: `y`, rightMap: `dg`, leftScore: 0, rightScore: 0,},
{id: 14, leftMap: `y`, rightMap: `b`, leftScore: 0, rightScore: 0,},
{id: 15, leftMap: `y`, rightMap: `pg`, leftScore: 0, rightScore: 0,},
{id: 16, leftMap: `y`, rightMap: `br`, leftScore: 0, rightScore: 0,},
{id: 17, leftMap: `dg`, rightMap: `b`, leftScore: 0, rightScore: 0,},
{id: 18, leftMap: `dg`, rightMap: `pg`, leftScore: 0, rightScore: 0,},
{id: 19, leftMap: `y`, rightMap: `b`, leftScore: 1, rightScore: 0,},
{id: 20, leftMap: `y`, rightMap: `b`, leftScore: 1, rightScore: 0,},
{id: 21, leftMap: `y`, rightMap: `pg`, leftScore: 1, rightScore: 0,},
{id: 22, leftMap: `y`, rightMap: `br`, leftScore: 1, rightScore: 0,},
{id: 23, leftMap: `y`, rightMap: `bl`, leftScore: 1, rightScore: 0,},
{id: 24, leftMap: `dg`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 25, leftMap: `dg`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 26, leftMap: `dg`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 27, leftMap: `dg`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 28, leftMap: `dg`, rightMap: `b`, leftScore: 1, rightScore: 0,},
{id: 29, leftMap: `dg`, rightMap: `pg`, leftScore: 1, rightScore: 0,},
{id: 30, leftMap: `b`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 31, leftMap: `b`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 32, leftMap: `b`, rightMap: `dg`, leftScore: 1, rightScore: 0,},
{id: 33, leftMap: `b`, rightMap: `dg`, leftScore: 1, rightScore: 0,},
{id: 34, leftMap: `b`, rightMap: `dg`, leftScore: 1, rightScore: 0,},
{id: 35, leftMap: `b`, rightMap: `dg`, leftScore: 1, rightScore: 0,},
{id: 36, leftMap: `y`, rightMap: `pg`, leftScore: 0, rightScore: 1,},
{id: 37, leftMap: `b`, rightMap: `pg`, leftScore: 0, rightScore: 1,},
{id: 38, leftMap: `y`, rightMap: `br`, leftScore: 0, rightScore: 1,},
{id: 39, leftMap: `pg`, rightMap: `br`, leftScore: 0, rightScore: 1,},
{id: 40, leftMap: `bl`, rightMap: `y`, leftScore: 1, rightScore: 0,},
{id: 41, leftMap: `y`, rightMap: `pg`, leftScore: 0, rightScore: 2,},
{id: 42, leftMap: `b`, rightMap: `pg`, leftScore: 0, rightScore: 2,},
{id: 43, leftMap: `y`, rightMap: `br`, leftScore: 0, rightScore: 2,},
{id: 44, leftMap: `pg`, rightMap: `br`, leftScore: 0, rightScore: 2,},
{id: 45, leftMap: `bl`, rightMap: `y`, leftScore: 2, rightScore: 0,},
{id: 46, leftMap: `br`, rightMap: `bl`, leftScore: 0, rightScore: 2,},
{id: 47, leftMap: `br`, rightMap: `bl`, leftScore: 0, rightScore: 2,},
{id: 48, leftMap: `y`, rightMap: `bl`, leftScore: 0, rightScore: 3,},
]

const testBoard = [        
    [`pg`, 0],
    [`pg`, 1],
    [`pg`, 0],
    [`y`, 0],
    [`bl`, 3],
    [`pg`, 0],
    [`dg`, 0],
    [`dg`, 1],
    [`br`, 0],
    [`b`, 1],
    [`b`, 0],
    [`b`, 1],
    [`h`, 0],
    [`pg`, 1],
    [`pg`, 0],
    [`pg`, 1],
    [`br`, 0],
    [`br`, 0],
    [`bl`, 2],
    [`bl`, 0],
    [`br`, 1],
    [`b`, 0],
    [`b`, 2],
    [`b`, 0],
    [`y`, 0],
]

const players = [
    {
        id: 0,
        name: ``,
        score: 0,
    },
    {
        id: 1,
        name: ``,
        score: 0,
    },  
    {
        id: 2,
        name: ``,
        score: 0,
    },  
    {
        id: 3,
        name: ``,
        score: 0,
    },
]

const gameState = {
    round: 0,
    playerCount: 4,
    isEndGame: false,
    isGameOver: false,
    currentPlayer: 0,
    phase: ``,
    playersActed: 0,
}

const boardCoef = 25 //  This number is used to modify the class of tile selectors in html to match them with indexes in JS

// -----Variables-----
let deck
let message
let availableTiles
let claimedTiles

// -----Cached DOM Elements-----
const gameSpaceEl = document.querySelector(`.game-space`)
const boardSquareEls = document.querySelectorAll(`.sqr`)
const tileSquareEls = document.querySelectorAll(`.ts-sqr`)
const tsTilesEls = document.querySelectorAll(`.ts-tile`)
const messageEl = document.querySelector(`.message`)
const playerEl = document.querySelector(`.player`)
const ownerEL = document.querySelectorAll(`.owner`)
const rulesEl = document.querySelector(`.rules`)
const currentSquareEls = document.querySelectorAll(`.c-sqr`)
const currentTileEl = document.querySelector('.current-tile')

// -----Event Listeners-----
gameSpaceEl.addEventListener(`click`, (e) => {
        handleClick(e)
    })

// -----Functions-----
function makeDeck() {
    deck = structuredClone(tiles)
    shuffleDeck() 
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function chooseStartPlayer() {
    gameState.currentPlayer = Math.floor(Math.random()*gameState.playerCount)
    gameState.playersActed = 0
}

function updateTileSelector() {
    if (gameState.round > 1) {
        claimedTiles.splice(0, 4)
        claimedTiles.push(availableTiles[0],availableTiles[1],availableTiles[2],availableTiles[3],)
    }
    availableTiles.splice(0, 4)
    availableTiles.push(deck[0], deck[1], deck[2], deck[3])
    sortTiles(availableTiles)
}

function clearPlayerBoards() {
    players.forEach((player) => {
        player.board = [     
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [`h`, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
            [``, 0],
        ]
    })
}

function sortTiles(array) {
    array.sort((a, b) => {
        return a.id-b.id
        })
}

function reduceDeck() {
    deck.splice(0, 4)
}

function renderBoard() {
    players[gameState.currentPlayer].board.forEach((sqr, i) => {
        boardSquareEls[i].classList = `sqr`
        boardSquareEls[i].classList += ` ${sqr[0]}`
        boardSquareEls[i].textContent = `${sqr[1]}`
    })
}

function renderMessages() {
    messageEl.textContent = message
    playerEl.textContent = `It is player ${gameState.currentPlayer+1}'s turn`
}

function renderTileSelector() {
    availableTiles.forEach((sqr, i) => {
        ownerEL[i].textContent = ``
        if (gameState.isEndGame === false) {
            if (sqr.owner !== undefined) {
                ownerEL[i].textContent = `Claimed by player ${sqr.owner + 1}`
            }
            tileSquareEls[i*2].classList = `ts-sqr left`
            tileSquareEls[i*2].classList += ` ${sqr.leftMap}`
            tileSquareEls[i*2].textContent = `${sqr.leftScore}`
            tileSquareEls[i*2+1].classList = `ts-sqr right`
            tileSquareEls[i*2+1].classList += ` ${sqr.rightMap}`
            tileSquareEls[i*2+1].textContent = `${sqr.rightScore}`
        } else {
            tileSquareEls[i*2].classList = `ts-sqr left`
            tileSquareEls[i*2].textContent = ``
            tileSquareEls[i*2+1].classList = `ts-sqr right`
            tileSquareEls[i*2+1].textContent = ``
        }
    })
}

function renderCurrentTile() {
    if (gameState.phase === `placement`) {
        if (currentTileEl.classList.contains(`hidden`)) {
            currentTileEl.classList.toggle(`hidden`)
        }
        currentSquareEls[0].classList += `c-sqr`
        currentSquareEls[0].classList += ` ${claimedTiles[claimedTiles.findIndex(findOwner)].leftMap}`
        currentSquareEls[0].textContent = ` ${claimedTiles[claimedTiles.findIndex(findOwner)].leftScore}`
        currentSquareEls[1].classList += `c-sqr`
        currentSquareEls[1].classList += ` ${claimedTiles[claimedTiles.findIndex(findOwner)].rightMap}`
        currentSquareEls[1].textContent = ` ${claimedTiles[claimedTiles.findIndex(findOwner)].rightScore}`
    } else {         
        currentTileEl.classList += ` hidden`
    }
}

function resetGameState() {
    message = `Please choose a tile to claim.`
    gameState.winner = 4
    gameState.round = 1
    gameState.isEndGame = false
    gameState.isGameOver = false
    gameState.phase = `selection`
    availableTiles = []
    claimedTiles = []
    clearPlayerBoards()
}

function render() {
    renderBoard()
    renderMessages()
    renderTileSelector()
    renderCurrentTile()
}

function init() {
    resetGameState()
    makeDeck()
    chooseStartPlayer()
    updateTileSelector()
    reduceDeck()
    deck.splice(0, 44)
    render()
}

function calculateScores() {
    players.forEach((player) => {

    })
}

function checkEndGame() {
    if (deck.length === 0) {
        gameState.isEndGame = true
    }
}

function endRound() {
    if (gameState.isEndGame === true) {
        // calculateScores()
        gameState.isGameOver = true
        message = `The game ended with a victory for player ${gameState.winner + 1}`
        playerEl.classList.toggle(`hidden`)
        return
    } else {
        gameState.round ++
        updateTileSelector()
        reduceDeck()
        checkEndGame()
        gameState.playersActed = 0
        gameState.currentPlayer = claimedTiles[0][`owner`]
        gameState.phase = `placement`
        message = `Please chose where to place your tile.`    
    }
}

function claimTile(player, tile) {
        gameState.playersActed ++
    availableTiles[tile][`owner`] = player.id
    if (gameState.round > 1) {
        if (gameState.playersActed < 4) {
            gameState.currentPlayer = claimedTiles[gameState.playersActed][`owner`]
        }
        gameState.phase = `placement`
        message = `Please choose where to place your tile.`
    } else if (gameState.currentPlayer === 3){
        gameState.currentPlayer = 0
    } else {
        gameState.currentPlayer ++
    }
    if (gameState.playersActed === gameState.playerCount) {
        endRound()
     }
}

function validateUp(sqr) {
    if (
        players[gameState.currentPlayer].board[sqr - 5][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
        players[gameState.currentPlayer].board[sqr - 6][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
        players[gameState.currentPlayer].board[sqr - 5][0] === `h` ||
        players[gameState.currentPlayer].board[sqr - 6][0] === `h`
    ) {
        return true
    }
}

function validateDown(sqr) {
    if (
        players[gameState.currentPlayer].board[sqr + 5][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
        players[gameState.currentPlayer].board[sqr + 4][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
        players[gameState.currentPlayer].board[sqr + 5][0] === `h` ||
        players[gameState.currentPlayer].board[sqr + 4][0] === `h`
    ) {
        return true
    }
}

function validateLeft(sqr) {
    if (
        players[gameState.currentPlayer].board[sqr - 2][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
        players[gameState.currentPlayer].board[sqr - 2][0] === `h`
    ) {
        return true
    }
}

function validateRight(sqr) {
    if (
        players[gameState.currentPlayer].board[sqr + 1][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
        players[gameState.currentPlayer].board[sqr + 1][0] === `h`
    ) {
        return true
    }
}

function checkValidPlacement(sqr) {
    if (
        players[gameState.currentPlayer].board[sqr][0] !== `` ||
        players[gameState.currentPlayer].board[sqr - 1][0] !== `` ||
        sqr === 0 ||
        sqr === 5 ||
        sqr === 10 ||
        sqr === 13 ||
        sqr === 15 ||
        sqr === 20
    ) {
        return false
    } else if (
        sqr === 7 ||
        sqr === 8 ||
        sqr === 17 ||
        sqr === 18
    ) {
        return validateUp(sqr) ||
        validateDown(sqr) ||
        validateRight(sqr) ||
        validateLeft(sqr)
    } else if (sqr === 1) {
        return validateDown(sqr) ||
        validateRight(sqr)
    } else if (sqr === 4) {
        return validateDown(sqr) ||
        validateLeft(sqr)
    } else if (sqr === 21) {
        return validateUp(sqr) ||
        validateRight(sqr)
    } else if (sqr === 24) {
        return validateUp(sqr) ||
        validateLeft(sqr)
    } else if (
        sqr === 6 ||
        sqr === 11 ||
        sqr === 16
    ) {
        return validateUp(sqr) || 
        validateDown(sqr) || 
        validateRight(sqr)
    } else if (
        sqr === 9 ||
        sqr === 14 ||
        sqr === 19
    ) {
       return validateUp(sqr) ||
        validateDown(sqr) ||
        validateLeft(sqr)
    } else if (
        sqr === 2 ||
        sqr === 3
    ) {
        return validateRight(sqr) ||
        validateDown(sqr) ||
        validateLeft(sqr)
    } else if (
        sqr === 22 ||
        sqr === 23
    ) {
        return validateRight(sqr) ||
        validateUp(sqr) ||
        validateLeft(sqr)
    }
}

function findOwner(tile) {
    return tile[`owner`] === gameState.currentPlayer
}

function placeTile(tile, id) {
    players[gameState.currentPlayer].board[tile] = [claimedTiles[id].rightMap, claimedTiles[id].rightScore]
    players[gameState.currentPlayer].board[tile-1] = [claimedTiles[id].leftMap, claimedTiles[id].leftScore]
    if (gameState.isEndGame === false) {
        message = `Please choose a tile to claim.`
        gameState.phase = `selection`
    } else {
        gameState.playersActed ++
        if (gameState.playersActed < 4) {
            gameState.currentPlayer = claimedTiles[gameState.playersActed][`owner`]
            gameState.phase = `placement`
            message = `Please choose where to place your tile.`
        }
        if (gameState.playersActed === gameState.playerCount) {
                endRound()            
        }
    }
}

function discardTile() {
    if (gameState.isEndGame === false) {
        message = `Please choose a tile to claim.`
        gameState.phase = `selection`
    } else {
        gameState.playersActed ++
        if (gameState.playersActed < 4) {
            gameState.currentPlayer = claimedTiles[gameState.playersActed][`owner`]
            gameState.phase = `placement`
            message = `Please choose where to place your tile.`
        }
        if (gameState.playersActed === gameState.playerCount) {
                endRound()            
        }
    }
}
    

function handleClick (e) {
    if (e.target.classList.contains(`reset`)) {
        init()
        return
    } else if (gameState.isGameOver === true) {
        return
    } else if (gameState.phase === `placement` && e.target.classList.contains(`discard`)) {
        discardTile()
    } else if (gameState.phase === `selection` && e.target.classList.contains(`ts-sqr`)) {
        if (availableTiles[Number(e.target.parentNode.id)-boardCoef][`owner`] === undefined) {
            claimTile(players[gameState.currentPlayer], Number(e.target.parentNode.id)-boardCoef)
        } else {
            message = `That tile has already been claimed by player ${availableTiles[Number(e.target.parentNode.id)-boardCoef][`owner`] + 1}. Please choose a different tile.`
        }
    } else if (gameState.phase === `placement` && e.target.classList.contains(`sqr`)) {
        if (checkValidPlacement(Number(e.target.id)) === true) {
            placeTile(Number(e.target.id), claimedTiles.findIndex(findOwner))
        } else {
            message = `That tile placement is not legal. Please choose another location.`
        }
    }
    render()
}

init()
// -----References-----
// Grabbed Fisher-Yates from here: https://www.squash.io/how-to-shuffle-a-javascript-array/
// Font found here: https://www.fontspace.com/freedom-font-f14832
// Images found here: https://www.nasa.gov/images/

// -----Code Graveyard-----

// claimedTiles.forEach((sqr, i) =>{
//     ownerEL[i + 4].textContent = `Claimed by player ${sqr.owner + 1}`
//     tileSquareEls[i*2+8].classList = `ts-sqr left`
//     tileSquareEls[i*2+8].classList += ` ${sqr.leftMap}`
//     tileSquareEls[i*2+8].textContent = `${sqr.leftScore}`
//     tileSquareEls[i*2+9].classList = `ts-sqr right`
//     tileSquareEls[i*2+9].classList += ` ${sqr.rightMap}`
//     tileSquareEls[i*2+9].textContent = `${sqr.rightScore}`
// })

// player.board.forEach((space, k) => {
//     // console.log(`space: ${space}`) 
//     // console.log(`k:${player.board[k]}`)
//     if (k !== 12) {
//         space.splice(0, 2)
//         space = [``, 0]   
//     } else {
//         space.splice(0, 2)
//         space = [`h`, 0]
//     }
// })

