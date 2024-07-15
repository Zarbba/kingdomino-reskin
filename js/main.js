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
        [``, 0],
        ],
        score: 0,
    },  
    {
        id: 4,
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
        [``, 0],
        ],
        score: 0,
    },
]

const tileSelector = [
    [],
    [],
]

const gameState = {
    round: 0,
    playerCount: 4,
    isEndGame: false,
}
// -----Variables-----
let deck = []
let message = ``

// -----Functions-----
function init() {
    makeDeck()
    gameState.round = 1
    render()
}

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

function endRound() {
    updateTileSelector()
    updateDeck()
    gameState.round ++
}

function updateTileSelector() {
    tileSelector[1] = tileSelector[0]
    tileSelector[0] = []
    tileSelector[0].push(deck[0], deck[1], deck[2], deck[3])
}

function updateDeck() {
    deck.splice(0, 4)
}

makeDeck()
endRound()
console.log(deck[0].id, deck[1].id, deck[2].id, deck[3].id, deck[4].id)
endRound()
console.log(deck[0].id, deck[1].id, deck[2].id, deck[3].id, deck[4].id)
// -----References-----
// Grabbed Fisher-Yates from here: https://www.squash.io/how-to-shuffle-a-javascript-array/
