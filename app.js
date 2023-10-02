const e = require("cors");

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');
    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0]
    let direction = 1
    let score = 0
    let spped = 0.9
    let intervalTime = 0
    let interval = 0

    function control (ev){
        squares[currentIndex].classList.remove('snake')
        if (ev.keyCode === 39) {
            direction = 1 //right arroz on path
        } else if (ev.keyCode === 38){ 
            direction = -width // up arrow on path
        } else if (ev.keyCode === 37){
            direction = -1 // left arrow
        } else if (ev.keyCode === 40) {
            direction = +width //down arrow
        }
    }
    document.addEventListener('keyUp', control)

})