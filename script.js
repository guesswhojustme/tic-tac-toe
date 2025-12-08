const array = [
    ['o','o','x'],
    ['o','o','x'],
    ['x','x','o']
]

let turns = 0;
let xWinner = false;
let oWinner = false;

const counter = (function () {
    let oMarkerCounter = 0;
    let xMarkerCounter = 0;

    return {
        xIncreament() {xMarkerCounter++},
        oIncreament() {oMarkerCounter++},
        resetCounter() {xMarkerCounter = 0; oMarkerCounter = 0;},
        getMarkerOVal() { return oMarkerCounter},
        getMarkerXVal() { return xMarkerCounter}
    }
})();


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
                counter.xIncreament();
                if(counter.getMarkerXVal() == array.horizontal[i].length){
                    xWinner = true;
                }
            }
            if(array.horizontal[i][j] == 'o'){
                counter.oIncreament();
                if(counter.getMarkerOVal() == array.horizontal[i].length){
                    oWinner = true;
                }
            }
        }
        if(counter.getMarkerXVal() !== array.horizontal[i].length || counter.getMarkerOVal() !== array.horizontal[i].length){
            counter.resetCounter();
        }
        console.log(counter.getMarkerOVal());
        console.log(counter.getMarkerXVal());
    }
    if(xWinner){
        console.log("X won the Game");
    }else if(oWinner){
        console.log("O won the Game");
    }
};

function checkDiagonal(array){
    for(i = 0; i < array.diagonal.length; i++){
        for(j = 0; j < array.diagonal[i].length; j++){
            if(array.diagonal[i][j] == 'x'){
                counter.xIncreament();
                if(counter.getMarkerXVal()== array.diagonal[i].length){
                    xWinner = true;
                }
            }
            if(array.diagonal[i][j] == 'o'){
                counter.oIncreament();
                if(counter.getMarkerOVal() == array.diagonal[i].length){
                    oWinner = true;
                }
            }
        }
        if(counter.getMarkerXVal() !== array.diagonal[i].length || counter.getMarkerOVal() !== array.diagonal[i].length){
            counter.resetCounter();
        }
        console.log(counter.getMarkerOVal());
        console.log(counter.getMarkerXVal());
    }
    if(xWinner){
        console.log("X won the Game");
    }else if(oWinner){
        console.log("O won the Game");
    }
};

function checkVertical(array){
    for(i = 0; i < array.vertical.length; i++){
        for(j = 0; j < array.vertical[i].length; j++){
            if(array.vertical[i][j] == 'x'){
                counter.xIncreament();
                if(counter.getMarkerXVal() == array.vertical[i].length){
                    xWinner = true;
                }
            }
            if(array.vertical[i][j] == 'o'){
                counter.oIncreament();
                if(counter.getMarkerOVal() == array.vertical[i].length){
                    oWinner = true;
                }
            }
        }
        if(counter.getMarkerXVal() !== array.vertical[i].length || counter.getMarkerOVal() !== array.vertical[i].length){
            counter.resetCounter();
        }
        console.log(counter.getMarkerOVal());
        console.log(counter.getMarkerXVal());
    }
    if(xWinner){
        console.log("X won the Game");
    }else if(oWinner){
        console.log("O won the Game");
    }
};


checkDiagonal(arrayDirections);
checkVertical(arrayDirections);
checkHorizontal(arrayDirections);