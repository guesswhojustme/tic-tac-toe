const playBtn = document.getElementById('play')

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

const array = [
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*']
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

function checkDiagonal(){

}

function checkHorizontal(){

}

function checkVertical(){
    
}

// checkArray(array);
console.log(gameStatus);

// function play(){
//     let row = +prompt("row starting with 0: ")
//     console.log(row);

//     let column = +prompt("column starting with 0: ")
//     console.log(column);

//     array[row][column] = player1.marker
//     displayArray(array);

//     checkArray(array);
//     console.log(gameStatus);
// }


// playBtn.addEventListener('click', () => {
//     checkArray(array);
// })
