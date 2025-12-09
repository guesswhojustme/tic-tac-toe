const divsBtnDiv = document.querySelector(".grid-container");

const array = [
    ['','',''],
    ['','',''],
    ['','','']
]

function displayArray(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

let marker = "";
let turns = 0;
let xWinner = false;
let oWinner = false;

function turn(){
    turns++;
	if(turns % 2 !==0){
	marker = 'x';
	}else if(turns % 2 == 0){
	marker = 'o';
	}
}

displayArray(array);

function checkDiagonal(array){
    if(array[0][0] == 'x' && array[1][1] == 'x' && array[2][2] == 'x' 
        ||
       array[0][2] == 'x' && array[1][1] == 'x' && array[2][0] == 'x' 
      ){
        xWinner = true;
        console.log("checkDiagonal Function was satisfied");
    }else if(
        array[0][0] == 'o' && array[1][1] == 'o' && array[2][2] == 'o' 
        ||
        array[0][2] == 'o' && array[1][1] == 'o' && array[2][0] == 'o'
    ){
        oWinner = true;
        console.log("checkDiagonal Function was satisfied");
    }
}

function checkHorizontal(array){
    if(array[0][0] == 'x' && array[0][1] == 'x' && array[0][2] == 'x'
        ||
       array[1][0] == 'x' && array[1][1] == 'x' && array[1][2] == 'x'
        ||
       array[1][0] == 'x' && array[2][1] == 'x' && array[2][2] == 'x'
    ){
        xWinner = true;
        console.log("checkHorizontal Function was satisfied");
    }else if(array[0][0] == 'o' && array[0][1] == 'o' && array[0][2] == 'o'
        ||
       array[1][0] == 'o' && array[1][1] == 'o' && array[1][2] == 'o'
        ||
       array[1][0] == 'o' && array[2][1] == 'x' && array[2][2] == 'o'
    ){
        oWinner = true;
        console.log("checkHorizontal Function was satisfied");
    }
}

function checkVertical(array){
    if(array[0][0] == 'x' && array[1][0] == 'x' && array[2][0] == 'x'
        ||
       array[0][1] == 'x' && array[1][1] == 'x' && array[2][1] == 'x'
        ||
       array[0][2] == 'x' && array[1][2] == 'x' && array[2][2] == 'x'
    ){
        xWinner = true;
        console.log("checkVertical Function was satisfied");
    }else if(
        array[0][0] == 'o' && array[1][0] == 'o' && array[2][0] == 'o'
        ||
       array[0][1] == 'o' && array[1][1] == 'o' && array[2][1] == 'o'
        ||
       array[0][2] == 'o' && array[1][2] == 'o' && array[2][2] == 'o'
    ){
        oWinner = true;
        console.log("checkVertical Function was satisfied");
    }

}

function checkArray(){
    checkDiagonal(array);
    checkHorizontal(array);
    checkVertical(array);
};

function checkWinner(){   
    if(xWinner){
        console.log("X won the game");
    }else if (oWinner){
        console.log("O won the game");
    }
}

divsBtnDiv.addEventListener('click', (event) => {
    const target = event.target;

    switch(target.id){
        case '1':
            turn();
            array[0][0] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("1").style.pointerEvents = "none";
        break;
        case '2':
            turn();
            array[0][1] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("2").style.pointerEvents = "none";
        break;
        case '3':
            turn();
            array[0][2] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("3").style.pointerEvents = "none";
        break;
        case '4':
            turn();
            array[1][0] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("4").style.pointerEvents = "none";
        break;
        case '5':
            turn();
            array[1][1] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("5").style.pointerEvents = "none";
        break;
        case '6':
            turn();
            array[1][2] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("6").style.pointerEvents = "none";
        break;
        case '7':
            turn();
            array[2][0] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("7").style.pointerEvents = "none";
        break;
        case '8':
            turn();
            array[2][1] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("8").style.pointerEvents = "none";
        break;
        case '9':
            turn();
            array[2][2] = marker;
            displayArray(array);
            checkArray();
            checkWinner();
            document.getElementById("9").style.pointerEvents = "none";
        break;
    }
})