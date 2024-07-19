const testBoard = [        /**/
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

function translateBoard(board) {
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
} /**/
let sizeCounter = 0
let multiCounter = 0

function checkZones(board, x, y, type) {
    if (checkValid(x, y) === false) {
        return sizeCounter
    }
    if (checkMatching(board, x, y, type) === false) {
        return sizeCounter
    }
    setCounted(board, x ,y)
    checkZones(board, x + 1, y, type)
    checkZones(board, x - 1, y, type)
    checkZones(board, x , y + 1, type)
    checkZones(board, x , y - 1, type)
}

function setCounted (board, x, y) {
    board[y][x][0] = `d`
    sizeCounter ++
    multiCounter += board[y][x][1]
}


function checkMatching (board, x, y, type) {
    if (board[y][x][0] === type){
        return true
    } else {
        return false
    }
}

function checkValid (x, y) {
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
        return true
    } else {
        return false
    }
}

let newTestBoard = translateBoard(testBoard)

const tileTypes = [`bl`, `b`, `pg`, `dg`, `y`, `br`]

function findValidTarget(board, targetList) {
    let target = ``
    board.forEach((row) => { 
        row.forEach((sqr) => {
            if (
                sqr[0] === targetList[0] ||
                sqr[0] === targetList[1] ||
                sqr[0] === targetList[2] ||
                sqr[0] === targetList[3] ||
                sqr[0] === targetList[4] ||
                sqr[0] === targetList[5]
            ) { 
                target = sqr[0]
            }
        })
    })
    return target
}

let results = []

while (findValidTarget(newTestBoard, tileTypes) !== ``) {
    newTestBoard.forEach((row, i) => {
        row.forEach((sqr, k) => {
            checkZones(newTestBoard, i, k, findValidTarget(newTestBoard, tileTypes))
            if (sizeCounter !== 0) {
                results.push({
                    size: sizeCounter,
                    multi: multiCounter
            })
                sizeCounter = 0
                multiCounter = 0
            }
        })
    })
}

console.log(results)
function calculateScores(array, player) {
    array.forEach((zone) => {
        player.score += zone.size * zone.multi
    })
}

const gary = {score: 0}

calculateScores(results, gary)
console.log(gary.score)