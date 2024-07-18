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

const players = [
    {
        id: 0,
        name: ``,
        board: [
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
        ],
        score: 0,
    },
    {
        id: 1,
        name: ``,
        board: [
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
        ],
        score: 0,
    },  
    {
        id: 2,
        name: ``,
        board: [
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
        ],
        score: 0,
    },  
    {
        id: 3,
        name: ``,
        board: [
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
        ],
        score: 0,
    },
]

const availableTiles = []
const claimedTiles = []

const gameState = {
    round: 0,
    playerCount: 4,
    isEndGame: false,
    currentPlayer: 0,
    phase: ``,
    playersActed: 0,
}
// -----Variables-----
let deck
let message

// -----Cached DOM Elements-----
const gameSpaceEl = document.querySelector(`.game-space`)
const boardSquareEls = document.querySelectorAll(`.sqr`)
const tileSquareEls = document.querySelectorAll(`.ts-sqr`)
const tsTilesEls = document.querySelectorAll(`.ts-tile`)
const messageEl = document.querySelector(`.message`)
const playerEl = document.querySelector(`.player`)

// -----Event Listeners-----
gameSpaceEl.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`sqr`) || e.target.classList.contains(`ts-sqr`)) {
        handleClick(e)
    } else {
        return
    }
})

// -----Functions-----
function makeDeck() {
    deck = [...tiles]
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
        claimedTiles.push(availableTiles[0],availableTiles[1],availableTiles[2],availableTiles[3],)
    }
    availableTiles.splice(0, 4)
    availableTiles.push(deck[0], deck[1], deck[2], deck[3])
    sortTiles(availableTiles)
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
    players[gameState.currentPlayer].board.forEach((sqr, i) =>{
        boardSquareEls[i].classList = (`sqr`)
        boardSquareEls[i].classList += (` ${sqr[0]}`)
        boardSquareEls[i].textContent = `${sqr[1]}`
    })
}

function renderMessages() {
    messageEl.textContent = message
    playerEl.textContent = `It is player ${gameState.currentPlayer+1}'s turn`
}

function renderTileSelector() {
    availableTiles.forEach((sqr, i) =>{
        tileSquareEls[i*2].classList = `ts-sqr left`
        tileSquareEls[i*2].classList += (` ${sqr.leftMap}`)
        tileSquareEls[i*2].textContent = `${sqr.leftScore}`
        tileSquareEls[i*2+1].classList = `ts-sqr right`
        tileSquareEls[i*2+1].classList += (` ${sqr.rightMap}`)
        tileSquareEls[i*2+1].textContent = `${sqr.rightScore}`
    })        
    claimedTiles.forEach((sqr, i) =>{
        tileSquareEls[i*2+8].classList = `ts-sqr left`
        tileSquareEls[i*2+8].classList += (` ${sqr.leftMap}`)
        tileSquareEls[i*2+8].textContent = `${sqr.leftScore}`
        tileSquareEls[i*2+9].classList = `ts-sqr right`
        tileSquareEls[i*2+9].classList += (` ${sqr.rightMap}`)
        tileSquareEls[i*2+9].textContent = `${sqr.rightScore}`
    })
}

function render() {
    renderBoard()
    renderMessages()
    renderTileSelector()
}


function init() {
    makeDeck()
    chooseStartPlayer()
    updateTileSelector()
    reduceDeck()
    message = `Please choose a tile to claim.`
    gameState.round = 1
    gameState.isEndGame = false
    gameState.phase = `selection`
    render()
}

function endRound() {
    gameState.round ++
    updateTileSelector()
    reduceDeck()
    gameState.playersActed = 0
    gameState.currentPlayer = claimedTiles[0][`owner`]
    gameState.phase = `placement`
    message = `Please chose where to place your tile.`
}

function claimTile(player, tile) {
    gameState.playersActed ++
    availableTiles[tile][`owner`] = player.id
    if (gameState.round > 1) {
        gameState.currentPlayer = claimedTiles[gameState.playersActed][`owner`]
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

function checkValidPlacement(square) {
    // if (/* check target square || check target square - 1*/) {
        return true
    // } else {
    //     return false
    // }
}

function findOwner(tile) {
    return tile[`owner`] === gameState.currentPlayer
}

function placeTile(tile, id) {
    players[gameState.currentPlayer].board[tile] = [claimedTiles[id].rightMap, claimedTiles[id].rightScore]
    players[gameState.currentPlayer].board[tile-1] = [claimedTiles[id].leftMap, claimedTiles[id].leftScore]
    message = `Please choose a tile to claim.`
    gameState.phase = `selection`
}

function handleClick (e) {
    if (gameState.phase === `selection` && e.target.classList.contains(`ts-sqr`)) {
        if (availableTiles[e.target.parentNode.id-25][`owner`] === undefined) {
            claimTile(players[gameState.currentPlayer], e.target.parentNode.id-25)
        } else {
            message = `That tile has already been claimed by player ${availableTiles[e.target.parentNode.id-25][`owner`]+1}. Please choose a different tile.`
        }
    } else if (gameState.phase === `placement` && e.target.classList.contains(`sqr`)) {
        if (checkValidPlacement(e) === true) {
            placeTile(e.target.id, claimedTiles.findIndex(findOwner))
        } else {
            message = `That tile placement is not legal. Please choose another location.`
        }
    }
    console.log(`CP: ${gameState.currentPlayer}, PA: ${gameState.playersActed}`)
    render()
}

init()
// -----References-----
// Grabbed Fisher-Yates from here: https://www.squash.io/how-to-shuffle-a-javascript-array/
