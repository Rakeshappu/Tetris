class gameModel {
    constructor(ctx) {
        this.ctx = ctx;
        this.fallingPiece = null;
        this.grid = this.makeGrid();
    }

    makeGrid() {
        let grid = [];
        for (let i = 0; i < rows; i++) {
            grid.push([]);
            for (let j = 0; j < columns; j++) {
                grid[i].push(0);
            }
        }
        return grid;
    }

    collision(x, y, candidate = null) {
        const shape = candidate || this.fallingPiece.shape;
        const n = shape.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (shape[i][j] > 0) {
                    let p = x + j;
                    let q = y + i;
                    if (p >= 0 && p < columns && q < rows) {
                        if (this.grid[q][p] > 0) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    renderGameState() {
        this.ctx.clearRect(0, 0, columns, rows);
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j];
                this.ctx.fillStyle = colours[cell];
                this.ctx.fillRect(j, i, 1, 1);
            }
        }
        if (this.fallingPiece !== null) {
            this.fallingPiece.renderPiece();
        }
    }

    moveDown() {
        if (this.fallingPiece === null) {
            this.renderGameState();
            return;
        }
        if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
            const shape = this.fallingPiece.shape;
            const x = this.fallingPiece.x;
            const y = this.fallingPiece.y;
            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j;
                    let q = y + i;
                    if (p >= 0 && p < columns && q < rows && cell > 0) {
                        this.grid[q][p] = shape[i][j];
                    }
                });
            });
            if (this.fallingPiece.y === 0) {
                alert("Game Over");
                this.grid = this.makeGrid();
            }
            this.fallingPiece = null;
        } else {
            this.fallingPiece.y += 1;
        }
        this.renderGameState();
    }

    move(right) {
        if (this.fallingPiece === null) {
            return;
        }
        let x = this.fallingPiece.x;
        let y = this.fallingPiece.y;
        if (right) {
            if (!this.collision(x + 1, y)) {
                this.fallingPiece.x += 1;
            }
        } else {
            if (!this.collision(x - 1, y)) {
                this.fallingPiece.x -= 1;
            }
        }
        this.renderGameState();
    }

    rotate() {
        if (this.fallingPiece !== null) {
            let shape = this.fallingPiece.shape;
            let n = shape.length;
            let newShape = [];
            for (let i = 0; i < n; i++) {
                newShape.push([]);
                for (let j = 0; j < n; j++) {
                    newShape[i][j] = shape[n - j - 1][i];
                }
            }
            if (!this.collision(this.fallingPiece.x, this.fallingPiece.y, newShape)) {
                this.fallingPiece.shape = newShape;
            }
        }
        this.renderGameState();
    }
}
    