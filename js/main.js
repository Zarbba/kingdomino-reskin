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

const horizontalValidationSquares = {
    forbiddenSquares: [0, 5, 10, 15, 20],
    allSquares: [7, 8, 13, 17, 18],
    udrSquares: [6, 11, 16],
    udlSquares: [9, 14, 19],
    ldrSquares: [2, 3],
    lurSquares: [22, 23],
    drSquare: [1],
    ldSquare: [4],
    urSquare: [21],
    luSquare: [24],
}

const verticalValidationSquares = {
    forbiddenSquares: [0, 1, 2, 3, 4],
    allSquares: [11, 13, 16, 17, 18],
    udrSquares: [10, 15],
    udlSquares: [14, 19],
    ldrSquares: [6, 7, 8],
    lurSquares: [21, 22, 23],
    drSquare: [5],
    ldSquare: [9],
    urSquare: [20],
    luSquare: [24],
}

const gameState = {
    round: 0,
    playerCount: 4,
    isPenultimateRound: false,
    isEndGame: false,
    isGameOver: false,
    currentPlayer: 0,
    phase: ``,
    playersActed: 0,
    tilePlacementModifier: 1,
    verticalTile: false,
    validationSquares : horizontalValidationSquares,

}

const boardCoef = 25 //  This number is used to modify the class of tile selectors in html to match them with indexes in JS
const tileTypes = [`bl`, `b`, `pg`, `dg`, `y`, `br`] // This array lists all the possible tile types in the game
// REVIEW - Change tile types to variables for easier maintence
// REVIEW - Refactor boards to be 2D arrays instead of 1D

// -----Variables-----
let deck
let message
let availableTiles
let claimedTiles
let scoringZoneSizeCounter = 0
let scoringZoneMultiplierCounter = 0
let scoringArray

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

function rotateTile() {
    currentTileEl.classList.toggle(`current-tile-vert`)
    if (gameState.verticalTile === false) {
        gameState.tilePlacementModifier = 5
        gameState.verticalTile = true
        gameState.validationSquares = verticalValidationSquares
    } else if (gameState.verticalTile === true){
        let tileFlipCache
        gameState.tilePlacementModifier = 1
        gameState.verticalTile = false
        gameState.validationSquares = horizontalValidationSquares
        tileFlipCache = {
            map: claimedTiles[claimedTiles.findIndex(findOwner)].leftMap,
            score: claimedTiles[claimedTiles.findIndex(findOwner)].leftScore,}
        claimedTiles[claimedTiles.findIndex(findOwner)].leftMap = claimedTiles[claimedTiles.findIndex(findOwner)].rightMap
        claimedTiles[claimedTiles.findIndex(findOwner)].leftScore = claimedTiles[claimedTiles.findIndex(findOwner)].rightScore
        claimedTiles[claimedTiles.findIndex(findOwner)].rightMap = tileFlipCache.map
        claimedTiles[claimedTiles.findIndex(findOwner)].rightScore = tileFlipCache.score
    }
} //Tiles and placement

function calculateScoringZones(board, x, y, type) {
    if (checkForValidBoardPositio(x, y) === false) {
        return scoringZoneSizeCounter
    }
    if (checkForMatchingTiles(board, x, y, type) === false) {
        return scoringZoneSizeCounter
    }
    setTileToCounted(board, x ,y)
    calculateScoringZones(board, x + 1, y, type)
    calculateScoringZones(board, x - 1, y, type)
    calculateScoringZones(board, x , y + 1, type)
    calculateScoringZones(board, x , y - 1, type)
} //Endgame

function setTileToCounted (board, x, y) {
    board[y][x][0] = `d`
    scoringZoneSizeCounter ++
    scoringZoneMultiplierCounter += board[y][x][1]
} //Endgame

function checkForMatchingTiles (board, x, y, type) {
    return board[y][x][0] === type
} //Endgame

function checkForValidBoardPositio (x, y) {
    return x >= 0 && x <= 4 && y >= 0 && y <= 4
}//Endgame

function findValidTarget(board, targetList) {
    let target
    board.forEach((row) => { 
        row.forEach((sqr) => {
            targetList.includes(`${sqr[0]}`) ? target = sqr[0] : target = ``
        })
    })
    return target
} //Endgame

function generateScoringArray(board) {
    scoringArray = []
    while (findValidTarget(board, tileTypes) !== ``) {
    board.forEach((row, i) => {
        row.forEach((sqr, k) => {
            calculateScoringZones(board, i, k, findValidTarget(board, tileTypes))
            if (scoringZoneSizeCounter !== 0) {
                scoringArray.push({
                    size: scoringZoneSizeCounter,
                    multi: scoringZoneMultiplierCounter
            })
                scoringZoneSizeCounter = 0
                scoringZoneMultiplierCounter = 0
            }
        })
    })
    }
} //Endgame

function translateBoardToTwoDimensions(board) {
    let twoDBoard = [
        [],
        [],
        [],
        [],
        [],
    ]
    board.forEach((sqr, i) => {
        if (i <= 4) {
            twoDBoard[0].push(sqr)
        } else if (i <= 9 ) {
            twoDBoard[1].push(sqr)
        } else if (i <= 14 ) {
            twoDBoard[2].push(sqr)
        } else if (i <= 19 ) {
            twoDBoard[3].push(sqr)
        } else if (i <= 24 ) {
            twoDBoard[4].push(sqr)
        }
    })
    return twoDBoard
} //Utility

function makeDeck() {
    deck = structuredClone(tiles)
    shuffleDeck() 
} //Init

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
} //Init

function chooseStartPlayer() {
    gameState.currentPlayer = Math.floor(Math.random()*gameState.playerCount)
    gameState.playersActed = 0
} //Init

function updateTileSelector() {
    if (gameState.round > 1) {
        claimedTiles.splice(0, 4)
        claimedTiles.push(availableTiles[0],availableTiles[1],availableTiles[2],availableTiles[3],)
    }
    availableTiles.splice(0, 4)
    availableTiles.push(deck[0], deck[1], deck[2], deck[3])
    sortTiles(availableTiles)
} //Tiles and placement

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
} //Players and boards

function sortTiles(array) {
    array.sort((a, b) => {
        return a.id-b.id
        })
} //Tiles and placement

function reduceDeck() {
    deck.splice(0, 4)
} //Tiles and placement

function renderBoard() {
    players[gameState.currentPlayer].board.forEach((sqr, i) => {
        boardSquareEls[i].classList = `sqr`
        boardSquareEls[i].classList += ` ${sqr[0]}`
        boardSquareEls[i].textContent = `${sqr[1]}`
    })
} //Rendering

function renderMessages() {
    messageEl.textContent = message
    playerEl.textContent = `It is player ${gameState.currentPlayer+1}'s turn`
} //Rendering

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
} //Rendering

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
} //Rendering

function resetGameState() {
    playerEl.classList = `player`
    message = `Please choose a tile to claim.`
    gameState.winner = [0]
    gameState.round = 1
    gameState.isPenultimateRound = false,
    gameState.isEndGame = false
    gameState.isGameOver = false
    gameState.phase = `selection`
    availableTiles = []
    claimedTiles = []
    scoringZoneSizeCounter = 0
    scoringZoneMultiplierCounter = 0
    scoringArray = []
    clearPlayerBoards()
    players.forEach((player) => player.score = 0)
} //Init

function render() {
    renderBoard()
    renderMessages()
    renderTileSelector()
    renderCurrentTile()
} //Rendering

function init() {
    resetGameState()
    makeDeck()
    chooseStartPlayer()
    updateTileSelector()
    reduceDeck()
    render()
} //Init

function calculateScores(array, player) {
    array.forEach((zone) => {
        player.score += zone.size * zone.multi
    })
} //Endgame

function checkEndGame() {
    if (deck.length === 0) {
        if (gameState.isPenultimateRound === true) {
            gameState.isEndGame = true
        } else {
            gameState.isPenultimateRound = true
        }
    }
} //Endgame

function endRound() {
    if (gameState.isEndGame === true) {
        players.forEach((player) => {
            generateScoringArray(translateBoardToTwoDimensions(player.board))
            calculateScores(scoringArray, player)
        })
        checkWinner()
        gameState.isGameOver = true
        if (gameState.winner.length === 1) {
            message = `The game ended with a victory for player ${Number(gameState.winner) + 1}`
        } else if (gameState.winner.length > 1) {
            let winners = gameState.winner.map((value) => Number(value) + 1)
            message = `The game ended in a tie between the following players: ${winners.join(`, `)}`
        }
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
} //Midgame

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
} //Tiles and placement

function validateUp(sqr) {
    if (gameState.verticalTile === false) {
        if (
            players[gameState.currentPlayer].board[sqr - 5][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr - 6][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr - 5][0] === `h` ||
            players[gameState.currentPlayer].board[sqr - 6][0] === `h`
        ) {
            return true
        }
    } else if (gameState.verticalTile === true) {
        if (
            players[gameState.currentPlayer].board[sqr - 10][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr - 10][0] === `h`
        ) {
            return true
        }
    } else {
        return false
    }
} //Tiles and placement

function validateDown(sqr) {
    if (gameState.verticalTile === false) {
        if (
            players[gameState.currentPlayer].board[sqr + 5][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr + 4][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr + 5][0] === `h` ||
            players[gameState.currentPlayer].board[sqr + 4][0] === `h`
        ) {
            return true
        } 
        
    } else if (gameState.verticalTile === true) {
        if (
            players[gameState.currentPlayer].board[sqr + 5][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr + 5][0] === `h`
        ) {
            return true
        }
    } else {
        return false
    }
} //Tiles and placement

function validateLeft(sqr) {
    if (gameState.verticalTile === false) {
        if (
            players[gameState.currentPlayer].board[sqr - 2][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr - 2][0] === `h`
        ) {
            return true
        }
    } else if (gameState.verticalTile === true) {
        if (
            players[gameState.currentPlayer].board[sqr - 1][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr - 6][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr - 1][0] === `h` ||
            players[gameState.currentPlayer].board[sqr - 6][0] === `h`
        ) {
            return true
        }
    } else {
        return false
    }
} //Tiles and placement

function validateRight(sqr) {
    if (gameState.verticalTile === false) {
        if (
            players[gameState.currentPlayer].board[sqr + 1][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr + 1][0] === `h`
        ) {
            return true
        }
    } else if (gameState.verticalTile === true) {
        if (
            players[gameState.currentPlayer].board[sqr + 1][0] === claimedTiles[claimedTiles.findIndex(findOwner)].rightMap ||
            players[gameState.currentPlayer].board[sqr - 4][0] === claimedTiles[claimedTiles.findIndex(findOwner)].leftMap ||
            players[gameState.currentPlayer].board[sqr + 1][0] === `h` ||
            players[gameState.currentPlayer].board[sqr - 4][0] === `h`
        ) {
            return true
        }
    } else {
        return false
    }
} //Tiles and placement

function checkValidPlacement(sqr) {
    if (
        gameState.validationSquares.forbiddenSquares.includes(sqr) ||
        players[gameState.currentPlayer].board[sqr][0] !== `` ||
        players[gameState.currentPlayer].board[sqr - gameState.tilePlacementModifier][0] !== ``
    ) {
        return false
    } else if (gameState.validationSquares.allSquares.includes(sqr)) {
        if (
            validateUp(sqr) ||
            validateDown(sqr) ||
            validateRight(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.drSquare.includes(sqr)) {
        if (
            validateDown(sqr) ||
            validateRight(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.ldSquare.includes(sqr)) {
        if (
            validateDown(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.urSquare.includes(sqr)) {
        if (
            validateUp(sqr) ||
            validateRight(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.luSquare.includes(sqr)) {
        if (
            validateUp(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.udrSquares.includes(sqr)) {
        if (
            validateUp(sqr) || 
            validateDown(sqr) || 
            validateRight(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.udlSquares.includes(sqr)) {
       if (
            validateUp(sqr) ||
            validateDown(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.ldrSquares.includes(sqr)) {
        if (
            validateRight(sqr) ||
            validateDown(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    } else if (gameState.validationSquares.lurSquares.includes(sqr)) {
        if (
            validateRight(sqr) ||
            validateUp(sqr) ||
            validateLeft(sqr)
        ) {
            return true
        } else {
            return false
        }
    }
} //Tiles and placement

function findOwner(tile,) {
    return tile[`owner`] === gameState.currentPlayer
} //Utilities

function placeTile(tile, id, mod) {
    players[gameState.currentPlayer].board[tile] = [claimedTiles[id].rightMap, claimedTiles[id].rightScore]
    players[gameState.currentPlayer].board[tile - mod] = [claimedTiles[id].leftMap, claimedTiles[id].leftScore]
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
}  //Tiles and placement

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
}  //Tiles and placement
    
function checkWinner() {
    players.forEach((player) => {
        if (player.id === gameState.winner[0]) {
            return
        } else if (player.score - players[gameState.winner[0]].score > 0) {
            gameState.winner = [player.id]
        } else if (player.score - players[gameState.winner[0]].score === 0) {
            gameState.winner.push(player.id)
        }
    }) 
} //Endgame

function handleClick (e) {
    if (e.target.classList.contains(`rules-button`)) {
        rulesEl.classList.toggle(`hidden`)
    }
    if (e.target.classList.contains(`reset`)) {
        init()
    } else if (gameState.isGameOver === true) {
        return
    } else if (e.target.classList.contains(`rotate`) && gameState.phase === `placement`) {
        rotateTile()
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
            placeTile(Number(e.target.id), claimedTiles.findIndex(findOwner), gameState.tilePlacementModifier)
        } else {
            message = `That tile placement is not legal. Please choose another location.`
        }
    }
    render()
}
//REVIEW - Move as many functions as is logical into the game object
//REVIEW - Create multiple files to make code more readable
//REVIEW - Investigate elimination of as many magic numbers as possible

// -----Game Start-----
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

// const testBoard = [        
//     [`pg`, 0],
//     [`pg`, 1],
//     [`pg`, 0],
//     [`y`, 0],
//     [`bl`, 3],
//     [`pg`, 0],
//     [`dg`, 0],
//     [`dg`, 1],
//     [`br`, 0],
//     [`b`, 1],
//     [`b`, 0],
//     [`b`, 1],
//     [`h`, 0],
//     [`pg`, 1],
//     [`pg`, 0],
//     [`pg`, 1],
//     [`br`, 0],
//     [`br`, 0],
//     [`bl`, 2],
//     [`bl`, 0],
//     [`br`, 1],
//     [`b`, 0],
//     [`b`, 2],
//     [`b`, 0],
//     [`y`, 0],
// ]

// deck.splice(0, 44)