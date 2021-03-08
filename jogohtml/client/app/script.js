let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let direction = 'right';
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let foodSnake = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


//Função para criar a area de jogo
function criarBG() {
    context.fillStyle = "#FFC333";
    context.fillRect(0, 0, 16 * box, 16 * box);
}




//Criar a animação snake
function snakeGenerator() {
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }    
}




//Comida da snakeGame
function snakeFood() {
        context.fillStyle = 'red';
        context.fillRect(foodSnake.x, foodSnake.y, box, box);
}



//Criar movimentação
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}




//Criar movimentos de animação snake
function startGame() {

//Definindo area de amplitude
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;


    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
           clearInterval(jogo);
           alert('fim de jogo!!!')
        }
    }



    criarBG();
    snakeGenerator();
    snakeFood();


    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'down') snakeY += box;
    if (direction == 'up') snakeY -= box;

    if(snakeX != foodSnake.x || snakeY != foodSnake.y) {
        snake.pop();
    } else {
        foodSnake.x = Math.floor(Math.random() * 15 + 1) * box;
        foodSnake.y = Math.floor(Math.random() * 15 + 1) * box;
    }







    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(startGame, 100);