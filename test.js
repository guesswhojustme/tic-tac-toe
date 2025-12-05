const array = [
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*']
]

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

let gameStatus = "";

for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] === '*'){
                gameStatus = "continue"
            }
        }
}

console.log(gameStatus);


console.log(array.length);
