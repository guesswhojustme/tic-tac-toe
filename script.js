// const playBtn = document.getElementById('play')

// const game = (function () {

//     const gameBoard = {
//         array: [
//     ['*','*','*'],
//     ['*','*','*'],
//     ['*','*','*']
// ]
//     };

    
//     const gameObj = {
//         board: [],
//         player1: 'x',
//         player2: '0'
//     }


// })();

let turns = 0;

const array = [
    ['o','o','x'],
    ['x','o','x'],
    ['x','x','x']
]

let gameStatus = "continue";

function player(name, marker){
    return {
        marker, name
    };
};

const player1 = player('Marc', 'X');
const player2 = player('Josh', 'O');

console.log(player1);
console.log(player2);

function displayArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

console.log(displayArray(array));


function checkArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length + 1; j++){
            if(array[i][j] === '*'){
                 let row = +prompt("row starting with 0: ")
                    console.log(row);

                    let column = +prompt("column starting with 0: ")
                    console.log(column);

                    array[row][column] = player1.marker
                    displayArray(array);
            }else{
                gameStatus = "stop"
            }
        }
    }
}

let oMarkerCounter = 0;
let xMarkerCounter = 0;
let xWinner = false;
let oWinner = false;


const arrayDirections = {
    diagonal: [
        [array[0][0], array[1][1], array[2][2]],
        [array[0][2], array[1][1], array[2][0]]
    ],
    horizontal: [
        [array[0][0], array[0][1], array[0][2]],
        [array[1][0], array[1][1], array[1][2]],
        [array[2][0], array[2][1], array[2][2]],
    ],
    vertical: [
        [array[0][0], array[1][0], array[2][0]],
        [array[0][1], array[1][1], array[2][1]],
        [array[0][2], array[1][2], array[2][2]]
    ]
};

function checkHorizontal(array){
    for(i = 0; i < array.horizontal.length; i++){
        for(j = 0; j < array.horizontal[i].length; j++){
            if(array.horizontal[i][j] == 'x'){
                xMarkerCounter++
                if(xMarkerCounter == array.horizontal[i].length){
                    xWinner = true;
                }
            }
            if(array.horizontal[i][j] == 'o'){
                oMarkerCounter++
                if(oMarkerCounter == array.horizontal[i].length){
                    oWinner = true;
                }
            }
        }
        if(xMarkerCounter !== array.horizontal[i].length || oMarkerCounter !== array.horizontal[i].length){
            xMarkerCounter = 0;
            oMarkerCounter = 0;
        }
        console.log(xMarkerCounter);
        console.log(oMarkerCounter);
    }
    if(xWinner){
        console.log("X won the Game");
        console.log("checkHorizontal function was satisfied");
    }else if(oWinner){
        console.log("O won the Game");
        console.log("checkHorizontal function was satisfied");
    }
};

checkHorizontal(arrayDirections);

function checkDiagonal(array){
    for(i = 0; i < array.diagonal.length; i++){
        for(j = 0; j < array.diagonal[i].length; j++){
            if(array.diagonal[i][j] == 'x'){
                xMarkerCounter++
                if(xMarkerCounter == array.diagonal[i].length){
                    xWinner = true;
                }
            }
            if(array.diagonal[i][j] == 'o'){
                oMarkerCounter++
                if(oMarkerCounter == array.diagonal[i].length){
                    oWinner = true;
                }
            }
        }
        if(xMarkerCounter !== array.diagonal[i].length || oMarkerCounter !== array.diagonal[i].length){
            xMarkerCounter = 0;
            oMarkerCounter = 0;
        }
        console.log(xMarkerCounter);
        console.log(oMarkerCounter);
    }
    if(xWinner){
        console.log("X won the Game");
        console.log("checkDiagonal function was satisfied");
    }else if(oWinner){
        console.log("O won the Game");
        console.log("checkDiagonal function was satisfied");
    }
};

checkDiagonal(arrayDirections);


function checkVertical(array){
    for(i = 0; i < array.vertical.length; i++){
        for(j = 0; j < array.vertical[i].length; j++){
            if(array.vertical[i][j] == 'x'){
                xMarkerCounter++
                if(xMarkerCounter == array.vertical[i].length){
                    xWinner = true;
                }
            }
            if(array.vertical[i][j] == 'o'){
                oMarkerCounter++
                if(oMarkerCounter == array.vertical[i].length){
                    oWinner = true;
                }
            }
        }
        if(xMarkerCounter !== array.vertical[i].length || oMarkerCounter !== array.vertical[i].length){
            xMarkerCounter = 0;
            oMarkerCounter = 0;
        }
        console.log(xMarkerCounter);
        console.log(oMarkerCounter);
    }
    if(xWinner){
        console.log("X won the Game");
        console.log("checkVertical function was satisfied");
    }else if(oWinner){
        console.log("O won the Game");
        console.log("checkVertical function was satisfied");
    }
};

checkVertical(arrayDirections);
