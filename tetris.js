let canvas = document.getElementById("game-canvas");
let scoreboard = document.getElementById("scoreboard");
let ctx = canvas.getContext("2d");
ctx.scale(block_side_length, block_side_length);

let model = new gameModel(ctx);
let score = 0;

let newGameState = () => {
    fullSend();
    if (model.fallingPiece === null) {
        const rand = Math.floor(Math.random() * shapes.length);
        const newPiece = new Piece(shapes[rand], ctx);
        model.fallingPiece = newPiece;
        model.moveDown();
    } else {
        model.moveDown();
    }
};

setInterval(() => {
    newGameState();
}, game_clock);

const fullSend = () => {
    const allFilled = (row) => {
        for (let x of row) {
            if (x === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < model.grid.length; i++) {
        if (allFilled(model.grid[i])) {
            score += score_worth;
            model.grid.splice(i, 1);
            model.grid.unshift(new Array(columns).fill(0));
        }
    }
    scoreboard.innerHTML = "Score: " + String(score);
};

document.addEventListener('keydown', (event) => {
    if (model.fallingPiece) {
        switch (event.key) {
            case 'ArrowLeft':
                model.move(false); // Move left
                break;
            case 'ArrowRight':
                model.move(true); // Move right
                break;
            case 'ArrowUp':
                model.rotate(); // Rotate piece
                break;
            case 'ArrowDown':
                model.moveDown(); // Move down faster
                break;
        }
    }
});
